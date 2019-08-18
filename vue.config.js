/*
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:35
 * @LastEditors: 
 * @LastEditTime: 2019-08-17 11:38:16
 */
const webpack = require('webpack');
module.exports = {
    devServer: { //api跨域操作
        proxy: {
            '/api': {
                target: 'http://localhost:80',
                changeOrigin: true,
                ws: true,
            }
        },
    },
    lintOnSave: false, //关闭eslint检查
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
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    }

    // css: {
    //     loaderOptions: {
    //         css: {
    //             // options here will be passed to css-loader
    //         },
    //         // postcss: {
    //         //     // options here will be passed to postcss-loader
    //         //     plugins: [require('postcss-px2rem')({
    //         //          remUnit: 75
    //         //     })]
    //         // }
    //     }
    // },
    // css: { // 配置高于chainWebpack中关于css loader的配置
    //     // modules: true, // 是否开启支持‘foo.module.css’样式
    //     // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    //     sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    //     loaderOptions: { // css预设器配置项
    //         sass: {
    //             data: '@import "@/assets/scss/mixin.scss"' //`@import "@/assets/scss/mixin.scss";`
    //         }
    //     }
    // },
}