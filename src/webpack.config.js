const path = require("path");

module.exports = {
  // Point d'entrée de votre application
  entry: "./src/index.js",

  // Configuration de sortie
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Configuration des modules
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Ajoutez d'autres règles pour vos fichiers JS, CSS, etc.
    ],
  },

  // Plugins (ajoutez des plugins si nécessaire)
  plugins: [
    // Exemples de plugins :
    // new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],

  // Configuration du serveur de développement (si vous utilisez webpack-dev-server)
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
