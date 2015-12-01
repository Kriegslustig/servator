var gulp = require('gulp')
var exec = require('child_process').exec
var proc

gulp.watch('./**/*.js', ['default'])

gulp.task('default', () => {
  if(proc) proc.kill()
  proc = exec('npm start')
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
})

