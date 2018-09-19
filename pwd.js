//synchronous - no need for a handler func

module.exports = function (done) {
  done('\n2')
  done(`\n${process.cwd()}`);
  done('\ndone - pwd')
}