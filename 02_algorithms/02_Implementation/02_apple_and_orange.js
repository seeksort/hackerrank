// https://www.hackerrank.com/challenges/apple-and-orange
/**
* A house is between two trees, on the same axis. Given
* positions of the trees and house and fruit that falls from
* both trees, determine how many trees have fallen onto the
* house.
*/

// House
const s = 7;
const t = 11;

// Trees
const a = 5;
const b = 15;

// # Apples
const m = 3;
const appleDists = [-2, 2, 1];

// # Oranges
const n = 2;
const orangeDists = [5, -6];

/*
Output (2 lines):
# apples that fell on the house
# oranges that fell on the house
*/

(function () {
  function fruitPositions(treePosition, distances) {
    const positions = [];
    distances.forEach(dist => positions.push(treePosition + dist));
    return positions;
  }

  const applePositions = fruitPositions(a, appleDists);
  const orangePositions = fruitPositions(b, orangeDists);

  function fruitOnHouse(positions) {
    let count = 0;
    positions.forEach((position) => {
      if (position >= s && position <= t) {
        count += 1;
      }
    });
    return count;
  }

  console.log(`${fruitOnHouse(applePositions)}\n${fruitOnHouse(orangePositions)}`);
}());
