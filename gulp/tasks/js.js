/**
 * Javascript file handling
 */ 

import webpack from "webpack-stream"; // Including webpack to add import capability (ES6)

export const js = () => {
   return app.gulp.src(app.path.src.js, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'JS',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'bundle.min.js',
         }
      }))
      .pipe(app.gulp.dest(app.path.dist.js))
      .pipe(app.plugins.browsersync.stream());
}

/**
 * sourcemaps: true - helps to track in which file js is written 
 */