module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
    proxy: {
      '/': {
        ws: false,
        target: 'http://localhost:8080',// 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
            '^/': '/'
        }
      },
      '/api': {
        target: 'http://localhost:8080',// 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {   //重写路径
          '^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
          //'^/api': '/' 这种接口配置出来     http://XX.XX.XX.XX:8083/login
        }
      }
    }
  }
}