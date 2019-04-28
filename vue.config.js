const webpack=require('webpack');
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
    	},
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
   },
   css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                     remUnit: 42
                })]
            }
        }
    }

}
