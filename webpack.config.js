module.exports = {
    entry: './public/assets/scripts/index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    output: {
        filename: 'bundle.js',
    },
};