[![Build Status](https://travis-ci.com/jlhiskey/code-challenge.svg?branch=master)](https://travis-ci.com/jlhiskey/code-challenge)

# BFS-Graph
 - Write a function that accept a graph and a starting vertex and returns a boolean declaring if the graph is connected.
 ## Function
 - When you input:
  
  
     const graph = new Graph();
 
     const one = new Vertex(1);
     const two = new Vertex(2);
     const three = new Vertex(3);
     const four = new Vertex(4);
     const five = new Vertex(5);
     const six = new Vertex(6);
 
     graph.addVertex(one);
     graph.addVertex(two);
     graph.addVertex(three);
     graph.addVertex(four);
     graph.addVertex(five);
     graph.addVertex(six);
 
     graph.addDirectedEdge(one, two);
     graph.addDirectedEdge(one, five);
     graph.addDirectedEdge(one, four);
     graph.addDirectedEdge(two, three);
     graph.addDirectedEdge(three, six);
     graph.addDirectedEdge(five, six);
 
     bfs(graph, one, six);
     
   - Returns:
   
   
        true
        
 - When you input:
  
  
     const graph = new Graph();
 
     const one = new Vertex(1);
     const two = new Vertex(2);
     const three = new Vertex(3);
     const four = new Vertex(4);
     const five = new Vertex(5);
     const six = new Vertex(6);
 
     graph.addVertex(one);
     graph.addVertex(two);
     graph.addVertex(three);
     graph.addVertex(four);
     graph.addVertex(five);
     graph.addVertex(six);
 
     graph.addDirectedEdge(one, two);
     graph.addDirectedEdge(one, five);
     graph.addDirectedEdge(one, four);
     graph.addDirectedEdge(two, three);
    
     bfs(graph, one, six);
     
   - Returns:
   
   
        false
