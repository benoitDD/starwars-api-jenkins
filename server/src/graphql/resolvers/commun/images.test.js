import {uploadImage} from './images'
import {i18nMock, createReadStreamMock} from '../test'

//jest.mock('fs')

describe('Test uploadImage', () => {
    const mimetypePng = 'image/png'
    const mimetypeMpeg = 'image/mpeg'
    const fnUploadImage = (mimetype) => () => uploadImage(i18nMock)({createReadStream: createReadStreamMock, mimetype})

    test('Test uploadImage without exception', () => {
        expect(fnUploadImage(mimetypePng)).not.toThrow()
        expect(fnUploadImage(mimetypePng)).toBeTruthy()
    })

    test('Test uploadImage with exception', () => {
        expect(fnUploadImage(mimetypeMpeg)).toThrow("The files _extension_ don't allow")
    })
})