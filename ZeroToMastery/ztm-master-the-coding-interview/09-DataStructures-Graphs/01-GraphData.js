// Edge List (creating array associations)
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List (index of the array is the value of the actual graph node)
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix (0 and 1 to indicate if node x has a connection to node y)
const graph3 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
