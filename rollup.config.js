const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

const resolve = (...args) => {
    return path.resolve(__dirname, ...args);
}

const extensions = ['.js', '.ts'];

module.exports = {
    input: resolve('./src/index.ts'),
    output: {
        file: resolve(pkg.main),
        format: 'umd',
        name: 'conversionRadix'
    },
    plugins: [
        nodeResolve({
            extensions,
            modulesOnly: true
        }),
        babel({
            exclude: 'node_modules/**',
            extensions
        })
    ]
};