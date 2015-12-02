var gulp = require('gulp')
var spawn = require('child_process').spawn
var proc

function pipe (proc) {
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stdout)
}

function spawnNpm () {
  return spawn('npm', ['run', 'start'])
}

gulp.watch('/app/**/*.js', { interval: 1000 }, ['default'])

gulp.task('default', () => {
  if(proc) {
    proc.on('close', () => spawnNpm)
    proc.stop()
  } else {
    pipe(proc = spawnNpm())
  }
})

