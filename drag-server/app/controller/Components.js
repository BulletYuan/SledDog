const { formats, response } = require('../common/formatResponse');

const Penguin = async (ctx, next) => {
    console.log(ctx.req.params)
    ctx.body = 'Hello Penguin!';
    await next();
}

module.exports = {
    Penguin,
}