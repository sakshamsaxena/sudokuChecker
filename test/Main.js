/* eslint-env mocha */

var assert = require('assert')
var sudokuChecker = require('../index.js')

var solution

suite('Correct solution', function () {
  setup(function () {
    // Correct solution taken from Soduko's Wikipedia Page :
    // https://en.wikipedia.org/wiki/Sudoku
    solution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
  })
  test('should pass and return true synchronously', function () {
    assert.strictEqual(sudokuChecker(solution), true)
  })
  test('should pass and return true asynchronously', function () {
    sudokuChecker(solution, function (err, result) {
      if (err) {
        assert.fail(result, true, err)
      } else {
        assert.strictEqual(result, true)
      }
    })
  })
})

suite('Incorrect solution', function () {
  setup(function () {
    // The last row's last two digits are swapped
    solution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 9, 7]
    ]
  })
  test('should fail and return false synchronously', function () {
    assert.strictEqual(sudokuChecker(solution), false)
  })
  test('should fail and return false asynchronously', function () {
    sudokuChecker(solution, function (err, result) {
      if (err) {
        assert.fail(result, false, err)
      } else {
        assert.strictEqual(result, false)
      }
    })
  })
})
