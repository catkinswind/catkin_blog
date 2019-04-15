module.exports = {
    devServer: {     //api跨域操作
        proxy: {
            '/api': {
                target: 'http://localhost:80',
                changeOrigin: true,
                ws: true,
            }
        },
    },
    lintOnSave: false,      //关闭eslint检查
    configureWebpack: {     
    	resolve: {
    		alias: {
    			'vue$': 'vue/dist/vue.esm.js' 
    		}
    	}
    }
     
  

}
