var gulp = require('gulp');
var fs = require('fs');

var meteorDist = "./meteor-dist"

module.exports = function(callback) {

	gulp.src('./dist/**', {base: './dist'})
		.pipe(gulp.dest('./meteor-build/'));

	gulp.src('./meteor-src/*', {base: './meteor-src'})
		.pipe(gulp.dest('./meteor-build/'));

}