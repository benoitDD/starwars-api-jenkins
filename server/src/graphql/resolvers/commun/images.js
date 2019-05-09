import uniqueFilename from 'unique-filename'
import fs from 'fs'
import {mimeAccept} from '../../../../../commun/images'

function uploadImage(i18n){
    return ({ createReadStream, filename, mimetype, encoding }) =>{
        const extension = mimeAccept(mimetype)
        if(!extension[0]){
            throw Error(i18n.t("The files _extension_ don't allow", {extension: extension[1]}))
        }
        const filenameImg = uniqueFilename('') + '.' + extension[1]
        const stream = createReadStream()
        const pathImages = process.env.DIRECTORY_IMAGE
        
        var wstream = pathImages && fs.createWriteStream(`${pathImages}${filenameImg}`)
        stream.pipe(wstream)
        return filenameImg
    }
}

export {uploadImage}