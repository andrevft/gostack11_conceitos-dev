const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.js$/, //barra invertida sinaliza que é um ponto e não que pode ser qq coisa. $ sinaliza q acaba ali.
                exclude: /node_modules/, //conversão é responsabilidade da propria biblioteca fazer a conversão
                use: {
                    loader: 'babel-loader', //resumo: toda vez q precisar de um .js que nao estiver no node_module converte pelo babel
                }

            },

            {
                test: /\.css$/, //barra invertida sinaliza que é um ponto e não que pode ser qq coisa. $ sinaliza q acaba ali.
                exclude: /node_modules/, //conversão é responsabilidade da propria biblioteca fazer a conversão
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
             }

        ]
    },
};