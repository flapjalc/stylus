import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import htmlmin from 'gulp-htmlmin';
import fs from 'fs';
import path from 'path';

const data = {}
const dir = 'app/modules/'

const modules = fs.readdirSync( dir )
modules.forEach( item => {
  const module = path.join( dir, item )
  if ( ! fs.lstatSync( module ).isDirectory() ) return
  const jsons = fs.readdirSync( module ).filter( item => path.extname( item ) === '.json' )
  jsons.forEach( json => {
    const name = path.basename( json, path.extname( json ) )
    const file = path.join( dir, item, json )
      data[name] = JSON.parse( fs.readFileSync( file ) )
  })
})

gulp.task("html", function() {
  return gulp.src("src/pages/*.pug")
    .pipe(plumber())
    .pipe(pug({locals: {jsons: data}}))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
});
