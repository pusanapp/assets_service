const path = require('path');
const {url} = require('../utils/global_url')
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
                    await file.mv(`${filePath}${fileName}`, async (err) => {
                        if (err) {
                            res.send({
                                status: false,
                                message: err.message
                            })
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
                await imagesUploaded.mv(`${filePath}${imageName}`, async (err) => {
                    if (err) {
                        console.log('err, ' + err.message)
                        res.send({err2: err.message})
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
                    await file.mv(`${filePath}${fileName}`, async (err) => {
                        if (err) {
                            res.send({
                                status: false,
                                message: err.message
                            })
                        }
                        console.log('upload mas ', `${filePath}${fileName}`)
                        paths.push(`${url.server}/icons/${fileName}`)
                        if (iconsUploaded.length === paths.length) {
                            res.send({
                                status: true,
                                message: 'Upload Icons Success',
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
                await iconsUploaded.mv(`${filePath}${iconName}`, async (err) => {
                    if (err) {
                        console.log('err, ' + err.message)
                        res.send({err2: err.message})
                    }
                    res.send({
                        status: true,
                        message: 'Upload Icons Success',
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
                    await file.mv(`${filePath}${fileName}`, async (err) => {
                        if (err) {
                            res.send({
                                status: false,
                                message: err.message
                            })
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
                await imagesUploaded.mv(`${filePath}${imageName}`, async (err) => {
                    if (err) {
                        console.log('err, ' + err.message)
                        res.send({err2: err.message})
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
