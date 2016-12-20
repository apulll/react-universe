module.exports = {
  entry:'./client.js',
  output: {
    filename:'bundle.js',
    path:'dist'
  },
  module: {
    loaders: [
      {
        test:/\.js$|\.jsx$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['react','es2015','react','stage-0'],
          plugins: ["transform-runtime", "transform-decorators-legacy", "add-module-exports", "antd"],
        }

      }
    ]
  }
}
