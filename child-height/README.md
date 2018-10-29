[![Build Status](https://travis-ci.com/jlhiskey/code-challenge.svg?branch=master)](https://travis-ci.com/jlhiskey/code-challenge)

# Balanced-Tree
 - Write a function that accept a binary tree and returns whether the left and right sides of the tree are within 1 height +/- of each other.
 ## Function
 - When you input 'bob'
    - Returns:
        - Returns <b>{"b" => 2, "o" => 1}</b>.
        
 - When you input:
 
 
     const A = new Node(3);
     const B = new Node(6);
     const C = new Node(5);
     const D = new Node(7);
     const E = new Node(30);
     const F = new Node(15);
     const G = new Node(10);
 
     const treeOne = new BinaryTree(A);
 
     A.left = B;
     A.right = C;
 
     B.left = D;
     B.right = E;
 
     C.left = F;
     C.right = G;
 
     balancedTree(treeOne);
     
    
     
   - Returns:
        - true
         
 - When you input:
  
                      const A = new Node(3);
                      const B = new Node(6);
                      const C = new Node(5);
                      const D = new Node(7);
                      const E = new Node(30);
                      const F = new Node(15);
                      const G = new Node(10);
                      const H = new Node(100);
                      const I = new Node(99);
                      const J = new Node(102);
                  
                      const treeTwo = new BinaryTree(A);
                  
                      A.left = B;
                      A.right = C;
                  
                      B.left = D;
                      B.right = E;
                  
                      C.left = F;
                      C.right = G;
                  
                      C.left = H;
                      H.left = I;
                      I.left = J;
                      
                      balancedTree(treeTwo);
  - Returns:
       - false        
