# Sodoku Checker

A node module which checks if a Sudoku solution represented in a 2-D Array is correct or not.

## Installation

You can obtain Sudoku Checker as an npm module and use it in your code/application.
```
$ npm install sudokuChecker
```

## Usage

Sudoku Checker has both sync and async API, as demonstrated below.

```javascript
var sudokuChecker = require('sudokuchecker')

var mySolution = [
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

var result
// Sync
result = sudokuChecker(mySolution) // true
// Async
sudokuchecker(mySolution, function(err, res) {
  if (err) {
    throw err
  } else {
    result = res // true
  }
})
```

## API

### sudokuChecker(solution[, callback])

* Returns : <Boolean>

* Arguments :
	* `solution` <Array>
	* `callback` <Function>
		* `err` <Error>
		* `res` <Boolean>

`solution` is a 2-D Array representing the Sudoku Puzzle solution with the Array's `[0][0]` index denoting the top-left-most number of the puzzle. Each number must be a valid integer digit in the range [1,9], otherwise an `err` is returned. Valid input but incorrect solution array results in `false`, otherwise for a perfect solution, `true` is returned.

## License

[MIT](./LICENSE.txt)