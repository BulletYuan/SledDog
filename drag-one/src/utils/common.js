function request(axios, opt) {
  opt = Object.assign({
    methods: 'get',
    url: '',
    data: {},
  }, opt)
  const host = 'http://localhost:4004'
  opt.url = host + opt.url;
  console.log(opt)
  return axios(opt)
}

export {
  request,
}