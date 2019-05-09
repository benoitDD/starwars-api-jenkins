const mime = require('mime-types')

function mimeAccept(mimetype){
    const extension = mime.extension(mimetype)
    return ['png', 'jpeg', 'jpg'].includes(extension) ? [true, extension] : [false, extension]
}

module.exports = {mimeAccept}