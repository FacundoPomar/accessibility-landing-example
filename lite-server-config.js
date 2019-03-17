module.exports = function (bs) {
    return {
        port: 8080,
        files: ['./dist/**/*.{html,htm,css,js}'],
        https: false,
        server: {
            baseDir: './dist',
            middleware: {
                // overrides the second middleware default with new settings
                1: require('connect-history-api-fallback')({
                    index: '/index.html',
                    verbose: false
                })
            }
        }
    };
};