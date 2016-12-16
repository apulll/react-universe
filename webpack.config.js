module.exports = {
  entry:'./client.js',
  output: {
    filename:'bundle.js',
    path:'dist'
  },
  module: {
    loaders: [
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['react']
        }

      }
    ]
  }
}
