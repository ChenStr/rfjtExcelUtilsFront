import request from '@/utils/request'


// 查询商品属性列表
export function test(query) {
  return request({
    url: '/test',
    method: 'get',
    params: query
  })
}

// 上传的请求（这里是request封装的请求，封装了请求头等信息） responseType: 'blob' 这个是关键
//request是封装的请求方法
export function startUploadFile(query,param){
  return request({
    url: '/upload',
    responseType: 'blob',
    method:'post',
    data: query,
  })
}
