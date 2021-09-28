const path = require('path');
const {url} = require('../utils/global_url')
const sharp = require('sharp')
const uploadImages = async (req, res, next) => {
    const filePath = path.join(__dirname, '../public/images/')
    console.log("DIR", filePath)
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let imagesUploaded = req.files.images;
            const isArray = Array.isArray(imagesUploaded);
            console.log(isArray)
            if (isArray) {
                console.log("upload Multiple")
                const paths = []
                imagesUploaded.map(async (file) => {
                    const fileName = file.name
                    await sharp(file.data).resize({
                        width: 600,
                    }).toFile(`${filePath}${fileName}`,(err, info) => {
                        console.log(info)
                        if(err){
                            res.send({err: err})
                        }
                        console.log('upload mas ', `${filePath}${fileName}`)
                        paths.push(`${url.server}/images/${fileName}`)
                        if (imagesUploaded.length === paths.length) {
                            console.log('SAMA')
                            // console.log(Array.isArray(paths))
                            res.send({
                                status: true,
                                message: 'Upload Image Success',
                                data: paths
                            })
                        }
                    })

                })
            } else {
                console.log("Upload Single")
                console.log(imagesUploaded)
                // const fileKu = `${filePath}`
                console.log('hehe ', filePath)


                let imageName = imagesUploaded.name;
                await sharp(imagesUploaded.data).resize({
                    width: 600,
                }).toFile(`${filePath}${imageName}`,(err, info) => {
                    console.log(info)
                    if(err){
                        res.send({err: err})
                    }
                    res.send({
                        status: true,
                        message: 'Upload Image Success',
                        data: [
                            `${url.server}/images/${imageName}`
                        ]
                    })
                })
            }
        }


    } catch (e) {
        res.status(500).send({error: e.message});

    }
}

const uploadIcons = async (req, res, next) => {
    const filePath = path.join(__dirname, '../public/icons/')
    // console.log("DIR", filePath)
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let iconsUploaded = req.files.icons;
            const isArray = Array.isArray(iconsUploaded);
            console.log(isArray)
            if (isArray) {
                console.log("upload Multiple")
                const paths = []
                iconsUploaded.map(async (file) => {
                    const fileName = file.name
                    await sharp(file.data).resize({
                        width: 80,
                    }).toFile(`${filePath}${fileName}`,(err, info) => {
                        console.log(info)
                        if(err){
                            res.send({err: err})
                        }
                        console.log('upload mas ', `${filePath}${fileName}`)
                        paths.push(`${url.server}/icons/${fileName}`)
                        if (iconsUploaded.length === paths.length) {
                            console.log('SAMA')
                            // console.log(Array.isArray(paths))
                            res.send({
                                status: true,
                                message: 'Upload Banner Success',
                                data: paths
                            })
                        }
                    })

                })
            } else {
                console.log("Upload Single")
                console.log(iconsUploaded)
                // const fileKu = `${filePath}`
                console.log('hehe ', filePath)


                let iconName = iconsUploaded.name;
                await sharp(iconsUploaded.data).resize({
                    width: 80,
                }).toFile(`${filePath}${iconName}`,(err, info) => {
                    console.log(info)
                    if(err){
                        res.send({err: err})
                    }
                    res.send({
                        status: true,
                        message: 'Upload Banner Success',
                        data: [
                            `${url.server}/icons/${iconName}`
                        ]
                    })
                })
            }
        }


    } catch (e) {
        res.status(500).send({error: e.message});

    }
}

const uploadBanner = async (req, res, next) => {
    const filePath = path.join(__dirname, '../public/banner/')
    console.log("DIR", filePath)
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let imagesUploaded = req.files.banner;
            const isArray = Array.isArray(imagesUploaded);
            console.log(isArray)
            if (isArray) {
                console.log("upload Multiple")
                const paths = []
                imagesUploaded.map(async (file) => {
                    const fileName = file.name
                    await sharp(file.data).resize({
                        width: 200,
                    }).toFile(`${filePath}${fileName}`,(err, info) => {
                        console.log(info)
                        if(err){
                            res.send({err: err})
                        }
                        console.log('upload mas ', `${filePath}${fileName}`)
                        paths.push(`${url.server}/banner/${fileName}`)
                        if (imagesUploaded.length === paths.length) {
                            console.log('SAMA')
                            // console.log(Array.isArray(paths))
                            res.send({
                                status: true,
                                message: 'Upload Banner Success',
                                data: paths
                            })
                        }
                    })
                })
            } else {
                // console.log("Upload Single")
                console.log(imagesUploaded)
                // const fileKu = `${filePath}`
                console.log('hehe ', filePath)
                let imageName = imagesUploaded.name;
                await sharp(imagesUploaded.data).resize({
                    width: 200,
                }).toFile(`${filePath}${imageName}`,(err, info) => {
                    console.log(info)
                    if(err){
                        res.send({err: err})
                    }
                    res.send({
                        status: true,
                        message: 'Upload Banner Success',
                        data: [
                            `${url.server}/banner/${imageName}`
                        ]
                    })
                })
            }
        }


    } catch (e) {
        res.status(500).send({error: e.message});

    }
}

module.exports = {
    uploadImages,
    uploadIcons,
    uploadBanner
}
