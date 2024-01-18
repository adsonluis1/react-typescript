"use strict";
const nums = [10, 4, 5, 19, 49];
console.log(Math.max(...nums));
console.log(nums.sort((a, b) => b - a).splice(0, 3));
