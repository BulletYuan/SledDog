function request(opt) {
    opt = Object.assign(opt, {
        methods: 'get',
        url: '',
        data: {},
    })
    return this.$axios(opt)
}

export default {
    request,
}