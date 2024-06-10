import axios from 'axios';

const baseURL = 'http://localhost:8000/';

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: baseURL,
    // 超时
    timeout: 10000
})

export default service;