
// format response util
const response = (data={},message='success',code=200) => {
    return {
        code,data,message,
    };
};

// format response body util
const formats = (ctx,type='application/json',data={}) => {
    if(!ctx) return;
    ctx.type=type;
    ctx.body=response(data);
}

module.exports={
    response,
    formats,
}
