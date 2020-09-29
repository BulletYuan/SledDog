/* deps module */

const Router = require('koa-router');
const ComponentsController = require('./controller/Components');


/* init module */

const router = new Router({
    prefix: '/api/v1'
});


/* uses module */

router.get('components/:id', ComponentsController.Penguin);


/* exportModule module */

module.exports = router;