module.exports = {
  presets: [
    ['@vue/app', { useBuiltIns: 'entry' }],
    '@babel/preset-env'
  ],
  plugins: [ '@babel/proposal-optional-chaining' ]
}
