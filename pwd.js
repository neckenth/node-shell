//synchronous - no need for a handler func

module.exports = function (done) {
  done(`\n${process.cwd()}`);
  done('\n> ');

}