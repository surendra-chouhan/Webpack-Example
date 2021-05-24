const path = require('path');

module.exports = {
    entry : './JS/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        clean:true
    },
    module : {
        rules : [
            {   
                test: /\.css$/,
                exclude: /node_modulde/,
                use : [
                    "style-loader","css-loader"
                ]
            }
        ]
    }
}