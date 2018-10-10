/*
  Utility Functions
*/

function isAnInteger (d) {
  // parseInt automatically checks type as well
  if (parseInt(d) === d) {
    return true
  } else {
    return false
  }
}

function isInRange (d) {
  if (d >= 1 && d <= 9) {
    return true
  } else {
    return false
  }
}

function isUnique (d, m, f) {
  if (m[d] === f) {
    return true
  } else {
    return false
  }
}

module.exports = {
  'checkType': isAnInteger,
  'checkRange': isInRange,
  'checkValidity': isUnique
}
