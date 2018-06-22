const gulp = require("gulp"),
	connect = require("gulp-connect"),
	sass = require("gulp-sass");

gulp.task("connect", function(){
	connect.server({
		root : "src"
	});
});

//定制任务：编译sass
gulp.task("sass-task", function(){
	gulp.src("src/sass/*.scss")//源
		.pipe(sass({outputStyle:"expanded"}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(connect.reload());
});