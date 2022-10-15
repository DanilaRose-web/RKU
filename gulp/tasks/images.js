/**
 * Optimize images
 */

import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
   return app.gulp.src(app.path.src.images, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(app.plugins.newer(app.path.dist.images)) // check images in result folder
      .pipe(webp({
         quality: 70
      })) // create .webp images
      .pipe(app.gulp.dest(app.path.dist.images)) // put .webp in the folder with the result

      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.dist.images))
      
      // optimize images
      .pipe(imagemin({ 
         progressive: true,
         svgoPlugins: [{ removeViewBox: false }],
         interlaced: true,
         optimizationLevel: 3 // 0 to 7
      }))

      .pipe(app.gulp.dest(app.path.dist.images)) // put the optimized images in the folder with the result
      .pipe(app.gulp.src(app.path.src.svg)) // get .svg images
      .pipe(app.gulp.dest(app.path.dist.images)) // put in the folder with the result .svg images
      .pipe(app.plugins.browsersync.stream());
}
