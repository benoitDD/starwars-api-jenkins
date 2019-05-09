function resolveImage(image){
    return {
        _id: image._id,
        filename: `${process.env.DIRECTORY_IMAGE_EXT}${image.filename}`,
        title: image.title,
        description: image.description,
    }
}

function resolveImages(images){
    if(!images || !images.length){
        return null
    }
    return images.map(resolveImage)
}

export {resolveImages}