const Penguin = async (ctx, next) => {
    ctx.body = 'Hello Penguin!';
    await next();
}

module.exports = {
    Penguin,
}