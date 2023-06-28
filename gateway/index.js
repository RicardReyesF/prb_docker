const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express();

app.use(morgan('dev'));

app.use('/characters',createProxyMiddleware({
    target: 'http://characters:7001',
    changeOrigin: true
}))

app.use('/films',createProxyMiddleware({
    target: 'http://films:7002',
    changeOrigin: true
}))

app.use('/planets',createProxyMiddleware({
    target: 'http://planets:7003',
    changeOrigin: true
}))


app.listen(7000,() => {
    console.log('escuchando por el puerto 7000')
})