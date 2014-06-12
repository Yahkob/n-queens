/*           _
   ___  ___ |#|_   _____ _ __ ___
  /%%%|/*_%\|*\@\ /#/^_*\$'__/%$$*|
  \_%%\%(_) |&|\@V@/%$_^/*|  \__&\
  |___/\___/|^| \$/ \___|_|  |___/
___________________________________
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizatio ns that will allow you to skip a lot of the dead search space)
 take a look at solversSpec.js to see what the tests are expecting */


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
