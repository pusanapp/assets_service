const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/admin_contact_route')
const app = express();

app.use(fileUpload({
    createParentPath: true
}));
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/admin/contact', contactRouter)

module.exports = app;
