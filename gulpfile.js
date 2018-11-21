'use strict';
var gulp = require('gulp');
var rename = require("gulp-rename");
// var replace = require('gulp-replace');
var argv = require('yargs')
	.usage('Usage: $0 --country [string] --direction [string]')
	.demand(['country', 'direction'])
    .argv;
var country = argv.country;  
var direction = argv.direction;  
gulp.task('build',['copy'], () => {
    console.log("copy setting to target country");
});
gulp.task('copy', () => {
    var setting = "./profile/arabic-setting.ts";
    if(country=='ar' && direction=='rtl'){
        setting = "./profile/arabic-rtl-setting.ts";
    }
    else if(country=='ec'){    
        setting = "./profile/ecuador-setting.ts";
    }
    gulp.src(setting)
        .pipe(rename((path) => {
            path.basename = 'local.setting.model';
        }))
        .pipe(gulp.dest('./src/models/config/'));  
});