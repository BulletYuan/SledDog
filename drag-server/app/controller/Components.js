const { response } = require('../common/formatResponse');

const { queryService } = require('../service/Components');

const query = async (ctx, next) => {
    const { id } = Object.assign({ id: '' }, ctx.body);
    const cpts = await queryService(id);
    ctx.set('Content-Type', 'application/json; charset=utf-8')
    ctx.body = response(cpts);
    await next();
}

module.exports = {
    query,
}