const path = require('path'); //Nos permite ubicarnos en las carpetas ya sea local o la nube
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Webpack para html
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = { // TOda la configuracion de lo que va a sucede. Modulo a exportar
  entry: './src/index.js', // Nuestro js principal
  output: { //Hacia donde ira una vez configurafo y transpilado
    path: path.resolve(__dirname, 'dist'), // se creara una carpeta con nombre 'dist'
    filename: 'main.js' // El nombre del archivo generado sera main.js
  },
  resolve: {
    extensions: ['.js'] // extensiones que usaremos, en este caso solo .js
  },
  module: { // modulos con las reglas que usaremos, enn este casoa las de babel
    rules: [ //reglas
      {
        test: /\.js?$/, //Nos permite identificar los archivos que queremos de nuestro entorno
        exclude: /node_modules/, //excluimos la carpeta que no queremos para nuestro proyecto
        use: {
          loader: 'babel-loader' // que loader usara, en este caso es babel-loader
        }
      }
    ]
  },
  plugins: [ //plugins
    new HtmlWebpackPlugin( //nos permite trabajar con los archivos html
      {
        inject: true, // como voy a injectar un valor a los html
        template: './public/index.html', //donde se encuentra el template principal
        filename: './index.html' // en donde estara ese archivo y como lo llamare
      }
    ),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: ''
      }]
    })
  ]
}