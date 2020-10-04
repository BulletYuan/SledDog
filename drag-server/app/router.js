/* deps module */

const Router = require('koa-router');
const ComponentsController = require('./controller/Components');


/* init module */

const router = new Router({
    prefix: '/api/v1'
});


/* uses module */

router.post('/components', ComponentsController.query);


/* exportModule module */

module.exports = router;