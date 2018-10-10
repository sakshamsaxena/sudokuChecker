/*
  Function to check if a given solution of Sudoku is correct or not.
  The input is expected to be a 2-D Array of JavaScript representing the 9x9
  grid of Sudoku with [0][0] index denoting the top-left number in the puzzle.
*/

var util = require('./util')

function sudokuChecker (solution) {
  // Perform all checks in the same go simultaneously for performance.

  // Linear Map to check repetition of a number (0th index is dummy).
  var map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var i, j, digit

  // Starting with horizontal rows.
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      digit = solution[i][j]
      if (util.checkType(digit) &&
          util.checkRange(digit) &&
          util.checkValidity(digit, map, i)) {
        map[digit] += 1
      } else {
        return false
      }
    }
  }

  // Reset the map to 0s again
  map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  // Continue with vertical columns.
  for (j = 0; j < 9; j++) {
    for (i = 0; i < 9; i++) {
      digit = solution[i][j]
      // Already checked type and range above and it came clean
      if (util.checkValidity(digit, map, j)) {
        map[digit] += 1
      } else {
        return false
      }
    }
  }

  return true
}

module.exports = sudokuChecker
