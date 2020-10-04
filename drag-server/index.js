/* deps module */

const path = require('path');

const Koa = require('koa');
const static = require('koa-static');
const cors = require('koa-cors');
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');


/* init module */

const staticPath = path.join(__dirname, 'public', 'resources');

const app = new Koa();
app.keys = ['Penguin-1601211807085-Koa']
const router = require('./app/router');


/* uses module */

app.use(static(staticPath));

app.use(cors({
    origin: () => {
        return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(koaBody({
    multipart: true,                    // allow mutiple files
    urlencoded: true,                   // allow encoded content
    formidable: {
        uploadDir: path.join(__dirname, 'public', 'upload'),   // upload dir
        maxFileSies: 20 * 1024 * 1024,  // MAX 20MB
    }
}));
app.use(bodyParser());
app
    .use(router.routes())
    .use(router.allowedMethods());


/* port module */

const port = 4004;
app.listen(port);
console.log('app started at port ' + port + '...');