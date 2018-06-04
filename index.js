"use strict";

function summer (sumVal) {
  return function (toAdd) {
    return sumVal + toAdd
  }
}

module.exports = summer;