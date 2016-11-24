var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./app.js']
  },
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  plugins: [new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./dist/vendor-manifest.json'),
  })]
};