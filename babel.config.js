module.exports = function(api) {
    const isProd = api.env('production');

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ];

    const plugins = [];

    if (isProd) {

    }

    return {
        presets,
        plugins
    };
};