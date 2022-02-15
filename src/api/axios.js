import axios from "axios";


//相应拦截
axios.interceptors.response.use(
    res => res.data,//拦截到相应对象，将相应对象的data属性返回给调用的地方
    err => Promise.reject(err)
)

