const {mimeAccept} = require('./images')

test('Mimetype accept', () => {
    const resPng = mimeAccept('image/png')
    const resMpeg = mimeAccept('image/mpeg')
    expect(Array.isArray(resPng)).toBeTruthy()
    expect(Array.isArray(resMpeg)).toBeTruthy()

    expect(resPng.length).toBe(20)
    expect(resMpeg.length).toBe(2)

    expect(resPng[0]).toBeTruthy()
    expect(mimeAccept('image/jpeg')[0]).toBeTruthy()
    expect(mimeAccept('image/tiff')[0]).toBeFalsy()
    expect(mimeAccept('image/gif')[0]).toBeFalsy()
    expect(resMpeg[0]).toBeFalsy()
})