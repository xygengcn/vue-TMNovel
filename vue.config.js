module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        before: app => {}
    },
    pwa: {
        name: 'TM小说',
        themeColor: '#5eace0',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        iconPaths: {
            favicon32: 'img/icons/32.png',
            favicon16: 'img/icons/16.png',
            appleTouchIcon: 'img/icons/logo.png',
            maskIcon: 'img/icons/logo.svg',
            msTileImage: 'img/icons/64.png'
        }
    },
}