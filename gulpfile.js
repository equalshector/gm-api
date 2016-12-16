var gulp = require('gulp'),
    spawn = require('child_process').spawn,    
    node


gulp.task('default', function() {
    runServer()

    gulp.watch(['app/**/*.js', 'app.js'], function() {
        runServer()
    })
})

function runServer() {
    if (node) node.kill()
    node = spawn('node', ['app.js'], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
        gulp.log('Error detected, waiting for changes...');
        }
    })
}
