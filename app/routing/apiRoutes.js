const data = require('express').Router();
const path = require('path');
var bodyParser = require('body-parser')
var friendsArray = require(path.join(__dirname, '../data/friends.js'))



data.route('/friends').post(function (req, res) {
  var userLog = req.body;
  var match = getMatch(userLog)
  friendsArray.push(userLog)
  res.json(match)
}); //// <============== the end of the section it needs to be placed in
///////////////////////// This section below will need to be placed within the .get route above in order to be executed on submit. Only keeping it out for testing purposes.

data.route('/match').get(function (req, res) {
  res.json(resp[0])
})



function getMatch(newUser) {
  var userScore = newUser.scores
  ////////// Converts the userScores from a string to a number
  var userNumber = userScore.map(Number);
  console.log("=================================")
  console.log("User Number:")
  console.log(userNumber)
  console.log("=================================")
  var holdArray = [];
  //////////////pushes the friendsArray into individual arrays only containing the scores
  for (var i = 0; i < friendsArray.length; i++) {
    holdArray.push(friendsArray[i].scores);
  }
  console.log(holdArray)

  var dif = [];
  for (var i = 0; i < holdArray.length; i++) {
    var hold = holdArray[i]
    ///////////////// finds the difference between each array at each index
    var difference = hold.map(function (item, index) {
      return item - userNumber[index]
    })
    ////////// Adds together all indexes of individual differences
    dif.push(difference.reduce((a, b) => a + b))
  }
  console.log(dif)

  //////////// returns the closest number in an array to 0
  function calculateClosestTo(arr) {
    return arr.reduce((acc, x) =>
      acc === 0 ? x :
      x >= 0 && x <= Math.abs(acc) ? x :
      x <= 0 && -x <= Math.abs(acc) ? x : acc, 0)
  }
  var closestToZero = calculateClosestTo(dif);
  console.log(closestToZero)
  var index = dif.indexOf(closestToZero)
  console.log(index)
  //////////// Finds the Match
  console.log(friendsArray[index])
  var match = friendsArray[index];
  return match

}

module.exports = data;