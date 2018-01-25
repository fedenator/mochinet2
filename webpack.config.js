let SRC_DIR = "src/main/resources/static/js/";

module.exports = {
    entry: {
        index: './src/main/frontend/scenes/index.js'
    },
    output: {
        filename: SRC_DIR + '[name]-boundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
            	test: /\.css$/,
            	use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"   },
                    { loader: "less-loader"  }
                ]
            }
        ]
    }
};
