/**
 * Contains path information
 */

import * as nodePath from 'path'; // import module path
const rootFolder = nodePath.basename(nodePath.resolve()); // Get the name of the project root folder (gulp-2022)

const distFolder = './dist'; // the dist folder is created automatically by the "gulp" command. You can also use rootFolder here
const srcFolder = './src'  // variable with root source folder

/**
 * The path object that will store all the path
 */
export const path = {
   // production folder
   dist: {
      libs: `${distFolder}/libs/`,
      fonts: `${distFolder}/fonts/`,
      images: `${distFolder}/img/`,
      js: `${distFolder}/js/`,
      css: `${distFolder}/css/`,
      html: `${distFolder}/`,
   }, 

   // source folder
   src: { 
      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      js: `${srcFolder}/js/bundle.js`,
      scss: `${srcFolder}/scss/style.scss`, // get the main style.scss file
      html: `${srcFolder}/*.html`, // we get .html files that are in the src folder (the contents of the "components" folder are not copied to dist)
      libs: `${srcFolder}/libs/**/*.*`, // all files in all folders inside files folder
      svgSprite: `${srcFolder}/icons/*.svg`
   },

   // files/folders tracking
   watch: { 
      fonts: `${srcFolder}/fonts/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
      js: `${srcFolder}/js/**/*.js`,
      css: `${srcFolder}/scss/**/*.scss`, // monitor all .scss files in all folders in the src/ directory
      html: `${srcFolder}/**/*.html`, // keep track of all .html files in all folders in the src/ directory
      libs: `${srcFolder}/libs/**/*.*`, // track all files with any extension in all folders in the src/files directory
      svgSprite: `${srcFolder}/icons/*.svg`
   }, 

   clean: distFolder, // clear the production folder
   distFolder: distFolder, // production folder
   srcFolder: srcFolder, // source folder
   rootFolder: rootFolder, // root folder (gulp-2022)
   ftp: `test` // ftp connection
}
