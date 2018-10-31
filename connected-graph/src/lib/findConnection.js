'use strict';

const Queue = require('queue-fifo'); // eslint-disable-line

module.exports = function findConnection(graph, startVertex) {
  const queue = new Queue();
  const visitedVertices = new Set();
  const parentPath = new Map();
  let isConnected = false;

  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);

  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();
    const neighbors = graph.getNeighbors(currentVertex);

		for (let neighbor of neighbors) { // eslint-disable-line
      const neighborVertex = neighbor.vertex;

      if (visitedVertices.has(neighborVertex)) {
				continue; // eslint-disable-line
      } else {
        visitedVertices.add(neighborVertex);
      }
      parentPath.set(neighborVertex, currentVertex);

      queue.enqueue(neighborVertex);
    }
  }
  if (graph._adjacencyList.size === visitedVertices.size) {
    isConnected = true;
  }
  return isConnected;
};
