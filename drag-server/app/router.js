/* deps module */

const Router = require('koa-router');
const HelloController = require('./controller/HelloPenguin');


/* init module */

const router = new Router({
    prefix: '/api/v1'
});


/* uses module */

router.get('/', HelloController.Penguin);


/* exportModule module */

module.exports = router;