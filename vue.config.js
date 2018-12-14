module.exports = {
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0].push({
          from: 'api/',
          to: './api/'
        })
        return args
      })
  }
}
