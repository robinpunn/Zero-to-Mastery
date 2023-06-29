# Master the Coding Interview:Data Structures + Algorithms

---
### Table of Contents
1. [Big O](#big-o)
    - [What is good code](#what-is-good-code)
    - [Big O and Scalability](#big-o-and-scalability)
    - [O(n)](#on)
    - [O(1)](#o1)
    - [Simplifying Big O](#simplifying-big-o)
    - [Big O Rule 1](#big-o-rule-1)
    - [Big O Rule 2](#big-o-rule-2)
    - [Big O Rule 3](#big-o-rule-3)
    - [O(n^2)](#on2)
    - [Big O Rule 4](#big-o-rule-4)
    - [Big O Cheat Sheet](#big-o-cheat-sheet)
    - [What does this all mean?](#what-does-this-all-mean)
    - [O(n!)](#on-1)
    - [3 Pillars of Programming](#3-pillars-of-programming)
    - [Space Complexity](#space-complexity)
    - [Summary](#summary)
1. [How To Solve Coding Problems](#how-to-solve-coding-problems)
    - [Section Overview](#section-overview)
    - [What are companies looking for?](#what-are-companies-looking-for)
    - [What we need for coding interviews](#what-we-need-for-coding-interviews)
    - [Exercise: Google Interview](#exercise-google-interview)
1. [Data Structures: Introduction](#data-structures-introduction)
    - [Section Overview](#section-overview-1)
    - [What is a data structure?](#what-is-a-data-structure)
    - [How computers store data](#how-computers-store-data)
    - [Data Structures in different languages](#data-structures-in-different-languages)
    - [Operations on data structures](#operations-on-data-structures)
1. [Data Structures: Arrays](#data-structures-arrays)
    - [Arrays Introduction](#arrays-introduction)
    - [Static vs Dynamic Arrays](#static-vs-dynamic-arrays)
    - [Classes in JavaScript](#classes-in-javascript)
    - [Implementing an Array](#implementing-an-array)
    - [Strings and Arrays](#strings-and-arrays)
    - [Arrays Review](#arrays-review)
1. [Data Structures: Hash Tables](#data-structures-hash-tables)
    - [Hash Tables Introduction](#hash-tables-introduction)
    - [Hash Functions](#hash-functions)
    - [Hash Collisions](#hash-collisions)
    - [Hash tables in different languages](#hash-tables-in-different-languages)
    - [Hash Tables vs Arrays](#hash-tables-vs-arrays)
    - [Hash Tables Review](#hash-tables-review)
1. [Data Structures: Linked Lists](#data-structures-linked-lists)
    - [Linked Lists Introduction](#linked-lists-introduction)
    - [What is a Linked List?](#what-is-a-linked-list)
    - [Why linked lists?](#why-linked-lists)
    - [What is a pointer?](#what-is-a-pointer)
    - [Doubly Linked Lists](#doubly-linked-lists)
    - [Singly vs Doubly Linked Lists](#singly-vs-doubly-linked-lists)
    - [Linked Lists Review](#linked-lists-review)
1. [Data Structures: Stacks and Queues](#data-structures-stacks-and-queues)
    - [Stacks and Queues Introduction](#stacks-and-queues-introduction)
    - [Stacks](#stacks)
    - [Queues](#queues)
    - [Exercise 1 Stacks and Queues](#exercise-1-stacks-and-queues)
    - [How JavaScript works (optional)](#how-javascript-works-optional)
    - [Stacks and Queues Review](#stacks-and-queues-review)
1. [Data Structures: Trees](#data-structures-trees)
    - [Trees Introduction](#trees-introduction)
    - [Binary Tree](#binary-tree)
    - [O(log n)](#olog-n)
    - [Binary Search Tree](#binary-search-tree)
    - [Balanced vs Unbalanced BST](#balanced-vs-unbalanced-bst)
    - [BST Pros and Cons](#bst-pros-and-cons)
    - [AVL Trees + Red Black Trees](#avl-trees--red-black-trees)
    - [Binary Heaps](#binary-heaps)
    - [Priority Queue](#priority-queue)
    - [Trie](#trie)
1. [Data Structures: Graphs](#data-structures-graphs)
    - [Graphs Introduction](#graphs-introduction)
    - [Types of Graphs](#types-of-graphs)
    - [Graph Data](#graph-data)
    - [Graphs Review](#graphs-review)
1. [Algorithms: Recursion](#algorithms-recursion)
    - [Introduction to Algorithms](#introduction-to-algorithms)
    - [Recursion Introduction](#recursion-introduction)
    - [Stack Overflow](#stack-overflow)
    - [Anatomy of Recursion](#anatomy-of-recursion)
    - [Recursive vs Iterative](#recursive-vs-iterative)
    - [When to use recursion](#when-to-use-recursion)
    - [Recursion Review](#recursion-review)
1. [Algorithms: Sorting](#algorithms-sorting)
    - [Sorting Introduction](#sorting-introduction)
    - [The issue with sort()](#the-issue-with-sort)
    - [Sorting Algorithms](#sorting-algorithms)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)
    - [Merge Sort and O(n log n)](#merge-sort-and-on-log-n)
    - [Quick Sort](#quick-sort)
    - [Which Sort is Best](#which-sort-is-best)
    - [Heap Sort](#heap-sort)
    - [Radix Sort and Counting Sort](#radix-sort-and-counting-sort)
    - [Sorting Review](#sorting-review)
- [Alogrithms: Searching + BFS + DFS](#alogrithms-searching--bfs--dfs)
    - [Linear Search](#linear-search)
    - [Binary Search](#binary-search)
    - [Graph + Tree Traversals](#graph--tree-traversals)
    - [BFS Introduction](#bfs-introduction)
    - [DFS Introduction](#dfs-introduction)
    - [BFS vs DFS](#bfs-vs-dfs)
    - [PreOrder, InOrder, PostOrder](#preorder-inorder-postorder)
    - [Graph Traversal](#graph-traversal)
    - [Dijkstra and Bellman-Ford Algorithms](#dijkstra-and-bellman-ford-algorithms)
    - [Searching and Traversal Review](#searching-and-traversal-review)
---

---
### Big O

#### What is good code?
- Good code is 1) readable and 2) scalabe

#### Big O and Scalability
- How much does the algorithm/function slow down as the input increases?
- *Algorithmic efficiency: how many operations it needs in order to find the answer across different input sizes*
- The less an algorithm slows down as input increases, the better

#### O(n)
- O(n) --> Linear time ...Big O depends on the number of inputs (n)
- The number of operations increaes lineraly with the number of inputs
- Most common Big O notation

#### O(1)
- O(1) --> Constant time ...as elements increase, operations stay the same

#### Simplifying Big O
- Rule 1: Worst Case
- Rule 2: Remove constants
- Rule 3: Different terms for inputs
- Rule 4: Drop Non Dominants

#### Big O Rule 1
- We always care about the worst case scenario
- For example, if you're looping through an array, the worst case scenario is that the item you're looking for is the last item in the array.

#### Big O Rule 2
- Drop the constants: O(1 + n/2 + 100) --> O(n)
- As the input increases, constants have decreasingly signficant effect

#### Big O Rule 3
- Different inputs have different variables
- For example, a function can have two inputs which are both looped over. Each input would have its own variable: O(a+b)

#### O(n^2)
- Nested for loops are multiplied: 0(n^2) -> Quadratic time
- As elements(inputs) increase the number of operations increases qudartically

#### Big O Rule 4
- Drop non dominants
- O(n + n^2) --> O(n^2)
- As the input increases, the non dominant term has a decreasingly significant effect
- O(x^2 +3x + 100 + x/2) --> O(x^2)

#### Big O Cheat Sheet
- O(1) Constant- no loops
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear- for loops, while loops through n items
- O(n log(n)) Log Linear- usually sorting operations
- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential- recursive algorithms that solves a problem of size N
- O(n!) Factorial- you are adding a loop for every element
- [big o cheat sheet](https://www.bigocheatsheet.com/)

#### What does this all mean?
- We use Big O to talk about how our code performs
- It's not about the speed of the computer, but the number of operations it takes to run the code
- We can use Big O to measure one data structure vs another
- Why we can use an array vs an object
    - [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- Data structures are a way to organize data in order to use it more efficiently
- Algorithms are a set of steps to accomplish a certain task
- Data Structurs + Algorithms = Programs
- Knowing how to use data structures and algorithms is the difference between a good and a great developer

#### O(n!)
- O(n!) --> Factorial time
- As elements increase, the number of operations increases exponentially
- Not very common or efficient
- A nested loop for every element

#### 3 Pillars of Programming
- What is good code?
    - Readable
    - Scalable
        - Speed
        - Memory
- Readble
- Memory (space complexity)
- Speed (time complexity)

#### Space Complexity
- When a program executes, it has two ways to remember things
    - 1. the heap (variables)
    - 2. the stack (function calls)
- The more memory a program uses, the more space it takes up
- There is a tradeoff between speed and memory

#### Summary
- Knowing how much time and memory an algorithm takes is important
- Big O is something you won't find in your day to day job, but it should always be in the back of your mind
- Big O measures time and space complexity
- Big O describes the upper bounds of our estimates, looking at the worst case scenario
- Time is how long an algorithm takes to run, space is how much memory an algorithm takes up
- Big O is about how you can scale your code
- Sometimes readability is more important than scalability
- Premature optimization is the root of all evil
- You should always be aware of Big O, but you shouldn't focus on it until you need to
- Data needs to be sufficently large before you start worrying about Big O

---
### How To Solve Coding Problems

#### Section Overview
- The technical interview is a way to see if you can solve a problem the company or employer is facing
- What is the ideal problem solving process?
- Use data structures and algorithms to solve problems
- The goal is not to memorize algorithms, but to understand the thought process behind solving problems
- Analyze Big O solutions, but choose the right solution for the problem

#### What are companies looking for?
1. Analytic Skills
    - How can you think through a problem and analyze it?
    - Companies want to see how you think through a problem
2. Coding Skills
    - Do you code well?
    - Is your code clean?
3. Technical Skills
    - Do you know the fundamentals?
    - Do you understand the pros and cons of different solutions?
4. Communication Skills
    - Does your personality match the company culture?
    - Can you communicate well with others?
- When and why should you use certain data structures and algorithms over others?

#### What we need for coding interviews
- Data Structures
    - Arrays
    - Stacks
    - Queues
    - Linked Lists
    - Trees
    - Tries
    - Graphs
    - Hash Tables
- Algorithms
    - Sorting
    - Dynamic Programming
    - BFS + DFS (searching)
    - Recursion

#### Exercise: Google Interview
- Interview Cheat Sheet
    1. The three pillars of good code
    2. What skills interviewers are looking for
    3. Step by Step through a problem
    4. Good code checklist
    5. Hueristics to ace the question
    - **Always remember**: Communicate your thought process as much as possible. Don't worry about finishing fast. Every part of the interview matters.

---
### Data Structures: Introduction

#### Section Overview
- A data structure is a collection of values, the relationships among them, and the functions or operations that can be applied to the data
- Algorithms are the steps we put in place to manipulate data structures
- Data structures + Algorithms = Programs

#### What is a data structure?
- A data structure is a collection of values, the relationships among them, and the functions or operations that can be applied to the data
- Data structures are a way to organize data in order to use it more efficiently
- Data structures have different pros and cons
- Two parts to a data structure
    1. How to build it
    2. How to use it
- Based on different scenarios, data needs to be stored in a specifiic format

#### How computers store data
- Variables are stored in RAM(random access memory)
- Storage is persistent or permanent, RAM is temporary
- Persistent storage is slower than RAM
- CPU acceses RAM and persistent storage, but accessing RAM is much faster
- RAM has addresses that are used to access the data and are used to run programs
- Each address has a number of bits that can be used to store data
- 8bits = 1 byte, each address can hold 1 byte of data
- CPU is connected to a memory controller that is connected to RAM
- Memory controller can read and write data to RAM
- CPU caches recent data that it has accessed
- 8 bit system can store 256 different values, 16 bit system can store 65,536 different values, 32 bit system can store 4,294,967,296 different values, 64 bit system can store 18,446,744,073,709,551,616 different values
- Our goal is to minimize the operations that we need to do to in order for the CPU to access the data

#### Data Structures in different languages
- Each language has different data types and data structures
- Javascript has primitive data types while complex data types are objects and arrays
- If a language doesn't have a data structure, you can build it yourself

#### Operations on data structures
- Data structures are simply variations on how we store data
- Some data structures are better than others for different operations
- Insertion, deletion, traversal, searching, and sortig are some of the most common operations
- Access is the most important/common operation

---
### Data Structures: Arrays

#### Arrays Introduction
- Arrays, sometimes called lists, organize data sequentially
- Arrays have the smallest memory footprint of any data structure
- Arrays are the best choice if all you need to do is store data and access it by index
    - lookup (access) is O(1)
    - push is O(1)
    - insert is O(n)
    - delete is O(n)

#### Static vs Dynamic Arrays
- Static arrays are fixed in size, you need to specify the size when you create the array
- Dynamic arrays are not fixed in size, they can grow and shrink as needed
- Arrays in JavaScript are dynamic
- Low level languages like C++ allow managing memory manually, which allows you to create static arrays
- With javascript, memory is managed automatically
- Dynamic arrays expand as you add more elements
    - append is O(1) if there is space, O(n) if there is no space

#### Classes in JavaScript
- Arrays and objects are reference types in JavaScript
- Primitive types are copied by value, reference types are copied by reference
- Context vs Scope
    - Context tells you where we are within the object
    - Scope is the visibility of variables
    - this refers to the object that is executing the current function
- Instantiation
    - When you make a copy of an object and reuse the code
    - The new keyword does the following things
        - Creates a new empty object
        - Binds the value of this to the new empty object
        - Calls the constructor function to build the object

#### Implementing an Array
    - This section is not necessary for the interview, but it is good to know
    - Data structures are simply things that we can build from scratch
    - Most data structures are built on top of other data structures
    - Arrays in JavaScript are just objects with integer keys that act like indexes

#### Strings and Arrays
- Treat strings questions as array questions
- Strings are arrays of characters
- Use split() to convert a string into an array
- Use join() to convert an array into a string

#### Arrays Review
- Pros
    - Fast lookups
    - Fast push/pop
    - Ordered
- Cons
    - Slow inserts
    - Slow deletes
    - Fixed size (if using static arrays)

---
### Data Structures: Hash Tables

#### Hash Tables Introduction
- Objects in JavaScript are a type of hash table
- Every langauge should have a built in hash table
    - Python has dictionaries
    - Java has maps
    - C++ has maps
    - Ruby has hashes
- Hash tables are used a lot in databases and caches
- Hash tables use key value pairs
    - Keys are used to look up values, like indexes, using hash functions

#### Hash Functions
- A hash function generates a value of fixed length for each input that it gets
- Hash functions are one way functions, you can't go from the output to the input (imdepotent)
- Imdempotence allows for very fast lookups
- Under the hood, hash functions are optimized to be very fast, unlike sha256 functions which are slow

#### Hash Collisions
- Big O
    - insert is O(1)
    - lookup is O(1)
    - delete is O(1)
    - search is O(1)
- Hash collisions are when two keys map to the same index in an array
    - This slows down lookups
    - O(n) instead of O(1)
- There are different ways to handle collisions

#### Hash tables in different languages
- Implemented differently in different languages, but key and value pairs are usually any type of data
- In JavaScript Map() is a way to create a hash table
- JavaScript also uses Set() which is a hash table with only keys and no values

#### Hash Tables vs Arrays
- Hash tables are great when you want quick access to certain values
- Search is O(1) in hash tables and O(n) in arrays
- Insertion is O(1) in hash tables and O(n) in arrays
- Look up is O(1) in hash tables and O(1) in arrays

#### Hash Tables Review
- Pros
    - Fast lookups
    - Fast inserts
    - Flexible keys
- Cons
    - Unordered
    - Slow key iteration
- Hash tables are great for storing data that you need to look up quickly
- Hash tables are not good for storing data that you need to iterate over
- The trade off is fast access for more memory
- One of the solutions for collisions is to use a linked list

---
### Data Structures: Linked Lists

#### Linked Lists Introduction
- Two types of linked lists
    - Singly linked lists
    - Doubly linked lists
- Arrays can increase in size, but this increases the memory footprint
- Arrays also have bad performance for insertion and deletion
- Hash tables improve on some of the array deficiencies, but they are not ordered

#### What is a Linked List?
- A singly linked list is a collection of nodes that each point to the next node
- Each node has a value and a pointer to the next node
- The first node is called the head and the last node is called the tail
- Linked lists are null terminated, the last node points to null
- Linked lists can be sorted or unsorted
- Linked lists can contain any type of data
- JavaScript does not have linked lists, but you can build them yourself

#### Why linked lists?
- Linked lists are great for insertion and deletion
- Linked lists are not great for random access
- The main difference between arrays and linked lists is that arrays are indexed while linked lists are not
    - It is easy to find an item in an arrray with the index
    - To find an item in a linked list you need to traverse the list
- Another advantage arrays have is caching, which is when the CPU stores data in memory for faster access
    - Linked lists are not stored contiguously in memory, so they are not good for caching
- Linked lists have an advantage over hash tables because they are ordered
- Big(O)
    - prepend is O(1)
    - append is O(1)
    - lookup is O(n)
    - insert is O(n)
    - delete is O(n)

#### What is a pointer?
- A pointer is a reference to another location in memory
- In JavaScript, when using a pointer, deleting the original object will not delete the object that the pointer is pointing to
- JavaScript is garbage collected, meaning that memory is managed automatically

#### Doubly Linked Lists
- Doubly linked lists are linked lists where each node points to the next and the previous node
- This allows for traversal in both directions
- Big(O)
    - prepend is O(1)
    - append is O(1)
    - lookup is O(n)
    - insert is O(n)
    - delete is O(n)

#### Singly vs Doubly Linked Lists
- Singly linked lists are better for memory
- Doubly linked lists are better for finding the previous node
- Singly linked lists are better for insertion and deletion
- Doubly linked lists are better for lookup

#### Linked Lists Review
- Doens't come prebuilt in JavaScript and other languages because it is low level
- It is used a lot in other data structures like hash tables, stacks, and queues
- A fundamental data structure that is very useful in computer science, and a popular interview question
- Pros
    - Fast insertion
    - Fast deletion
    - Ordered
    - Flexible size
- Cons
    - Slow lookup
    - More memory
- The primary reason to choose a linked list over something like an array is simplicity and the ability to shrink and grow as needed
- Light weight and self contained, seen in a lot of places
    - File systems in a computer
    - browser history
- Linked lists are related to trees and graphs

---
### Data Structures: Stacks and Queues

#### Stacks and Queues Introduction
- Stacks and queues are linear data structures
    - Stacks and queues are ordered, so data is traversed sequentially
    - Unlike arrays, there is no random access operation
    - Built on top of lower level data structures like arrays and linked lists
    - Higher level allows for more control over how data is stored and accessed

#### Stacks
- LIFO: Last in, first out
- Big(O)
    - lookup is O(n)
    - pop is O(1)
    - push is O(1)
    - peek is O(1)
- Browser history is an example of a stack
- Undo/redo is an example of a stack

#### Queues
- FIFO: First in, first out
- Big(O)
    - lookup is O(n)
    - enqueue is O(1)
    - dequeue is O(1)
    - peek is O(1)
- Apps like uber or restaurants use queues
- Printers and task scheduling are examples of queues
- Uploading resources to a server is an example of a queue
- Not efficient to create a queue with an array because you have to shift the array every time you dequeue

#### Exercise 1 Stacks and Queues
- For stacks, both linked lists and arrays are good options
    - Arrays allow cache locality, which is better for speed when accessing data
    - Linked lists have extra memory associated with the pointers but have better dynamic memory allocation
- Queues are better implemented with linked lists because you don't have to shift the array every time you dequeue

#### How JavaScript works (optional)
- JavaScript is a single threaded language that can be non-blocking
1. What is a program?
    - allocates memory
    - parses and executes
2. JavaScript engine... v8 on chrome... reads the code and executes it
    - memory heap... memory allocation
    - call stack... where the code is read and executed
3. Memory Leak
    - memory leaks happen when you have unused memory that is not freed, it fills up the memory heap
4. Call Stack
    - where the code is read and executed
    - first in, last out
    - synchronous, meaning that one thing happens at a time
        - with multithreading, multiple things can happen at the same time, which can cause deadlocks... when two threads are waiting for each other to finish
    - Stack overflow is when the call stack is too large
5. JavaScript runtime environment
    - included in browsers
    - web APIs
        - setTimeout
        - fetch
        - DOM
    - callback queue
    - event loop
        - event loop checks the call stack and the callback queue
        - if the call stack is empty, it will push the first thing in the callback queue to the call stack
        - if the call stack is not empty, it will wait
        - this is how asynchronous code works

#### Stacks and Queues Review
- Stacks and Queues
    - Fast operations
    - Fast peek
    - Ordered
    - Slow lookup
- Stacks and Queues can be built with arrays or linked lists
    - It may not be a good idea to build a queue with an array because you have to shift the array every time you dequeue

---
### Data Structures: Trees
#### Trees Introduction
- Trees are data structures that have a hierachical structure
    - as opposed to linked lists or arrays which are linear
    - trees can have 0  or more child nodes
- A tree usually starts with a root or parent node
    - All children in the tree descend from the root node
    - Every child of a node descends from only one parent
- Trees have a unidirectional parent-child relationship
- Leaf nodes are the very end of a tree data structure
- Trees can have subtrees
- The DOM is a tree data structure
- Like linked lists, trees use the concept of nodes
    - Nodes can contain any type of information that we want
    - Linked lists are technically a type of tree
    - However, in trees nodes can only point to children and they don't have to reference the parent
- There are [many tree data structures](https://en.wikipedia.org/wiki/List_of_data_structures#Trees)

#### Binary Tree
- In a binary tree, each node can only have either 0,1, or 2 child nodes
    - Each child can only have one parent
- A "full" tree has no gaps in the tree
- In a **perfect binary tree**, every node either has 0 children or 2 children
    - The bottom layer of the tree is completely filled
    - This type of binary tree is extremely efficient and desirable
    - Two important properties:
        1. The number of total nodes doubles as we move down the tree
        1. The number of nodes on the last level is equal to the sum of the number of nodes on all the other levels + 1
            - half of the nodes are on the last level and the data is split in half
- In a **full binary tree**, every node has 0 or 2 children, never 1 child
- Binary trees introduce a new Big O notation, O(log N)
- Big(O)
    - lookup: O(log N)
    - insert: O(log N)
    - delete: O(log N)

#### O(log n)
- Because of the way binary trees are structured, we can calculated the amount of node that they have
- We use two the power of the level
```js
Level 0: 2^0 = 1
Level 1: 2^1 = 2
Level 2: 2^2 = 4
Level 2: 2^3 = 8
```
- The formula is: ``# of nodes = 2^h - 1``... h = height
    - This is further simplified to: ``log nodes = height(steps)``
        - log 100 = 2 // 10^2 = 100
- Based on the height of the tree, the maximum amount of decisions we make is log(n)
- Binary search trees allow a "divide and conquer approach"
- O(log n) is more efficient that O(n)

#### Binary Search Tree
- The binary search tree is the most common tree data structure
- This data structure preserves relationships

**RULES**
1. All child nodes to the right of the root node must be greater than the current node
2. A node can only have up to two children

- The advantage of a binary search tree is that lookup is very easy
- [Binary Search Tree example](https://visualgo.net/en/bst?slide=1)

#### Balanced vs Unbalanced BST
- If adding values that are increasing, the binary tree is unbalanced
    - An unbalanced binary tree can resemble a linked list
    - lookup, insert, and delete become O(n) just like in a linked list
- An interview question might be why an unbalanced binary search tree is bad
    - Ideally, we want binary search trees to be balanced to get the benefit of O(log n)
- There are algorithms that can help balance a binary tree... it's an advanced concept
    - Some options include AVL trees and Red Black trees which allow binary search trees to be balanced
        - In most programming languages, these are built in

#### BST Pros and Cons
**Pros**
- Better than O(n)
- Ordered
- Flexible size

**Cons**
- No O(1) operations

- Binary search trees aren't the fastest for anything
- On average, an array or hash table will have faster operation
    - But there are certain conditions where they do outperform arrays and hash tables
- Binary search trees perform really well as long as they are balanced and edge cases are avoided

#### AVL Trees + Red Black Trees
- In production, AVL trees or Red Black trees are most likely to be encountered as they rebalance themselves
- AVL Trees:
    - [Animation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
    - [How it Works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
- Red Black Trees:
    - [Animation](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
    - [How it Works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)

#### Binary Heaps
- Two common type of tree is a heap
    - Heaps have a binary version called binary heaps which only have to children per node
- In a binary tree every child belongs to a parent node that has a greater priority or value
    - This is known as a "max heap"
    - In a "min heap", the root node is the smallest
- A heap can be used in any alogrithm where ordering is important
    - It is commonly used when it comes to priority queues
- Heaps don't have O(1) or O(log n) random access, they are less ordered than binary search trees
- In a heap, left and right can be any value relative to the parent as long as it's less than the parent
- Big (O)
    - lookup: O(n)
    - insert: O(log N)
    - delete: O(log N)
- Binary Heaps are great at comperative operations
- Heaps add value in trees from left to right and then bubbles up
    - In a best case, an insert can be O(1) and O(log N) in the worst case

**Memory Heap != Heap Data Structure**

#### Priority Queue
- The advantage of Binary Heaps is that they take up the least amount of space possible
    - This is due to left to right insertion
- Binary Heaps are extremely useful for priority queues
    - With queues, we follow FIFO
    - In priority queues, each element has a priority
        - Elements with higher priorities are served first
**Pros**
- Better than O(n)... execept for lookup
- Priority
- Flexible size
- Fast Insert

**Cons**
- Slow lookup

- Binary Heaps are good when you're interested in finding the max or min
    - Binary heaps often have a findMax or findMin method that are O(1)

#### Trie
- A trie is a specialized tree used in searching, most often with text
- In most searches it can outperform binary search trees, hashes, and most other data structures that have been covered thusfar
- Tries allow you to know if a word or part of a word exists in a body of text
- Tries usually have an empty root node
    - From there letters are added which can have multiple children
- Tries are good for providing auto suggestions in search engines or IP routing
- The benefit of tries are speed and space
- Big(O) of a trie is O(length of word)
- Tries are also advantageous in terms of space complexity because of their use of "prefixes" and use of child nodes

---
### Data Structures: Graphs
#### Graphs Introduction
- Graphs are one of the most used data structures when it comes to modeling real life
- Graphs are a set of values that are related with a pair relationship
- Each item in a graph is called a node or vertex
- Nodes are connected with edges
- Graphs are good to represent real world relationships represented by links
- Graphs encompass data strucutres such as trees and linked lists
    - Linked lists are a type of tree and trees are a type of graph

#### Types of Graphs
- There are many graphs, but there are certain characteristics that allow us to describe graphs
- Two key descriptors are **Directed** and **Undirected** graphs
- Directed graphs can be thought of as unidirectional whereas undirected graphs aren't bound by those rules
- Another way to describe graphs is **unweighted** and **weighted**
    - Values can be applied to various aspects of graphs, not just the nodes
    - Weighted graphs are used a lot in calculating optimal paths
- Lastly, another common way to describe graphs is **cyclic** or **acyclic**
    - Vertices connected in a cyclic manner are what define cyclic graphs
- Directed Acyclic Graph goes in one direction...

#### Graph Data
- Graphs are built on top of other data structures
- A DAG can be thought of as composed of trees and linked lists

#### Graphs Review
- In interviews, graphs aren't as big of a topic because they take time
- Graphs are great for relationships
- However, scaling requires a lot of resources
- Most likely, we will use tools like [neo4j](https://neo4j.com/) that allow us to build fast, graph databases

---
### Algorithms: Recursion
#### Introduction to Algorithms
- Algorithms are functions... a two line function is a technically an algorithm
- Algorithms are steps in a process we take to perform a desired action
- [List of algorithms](https://en.wikipedia.org/wiki/List_of_algorithms)
- Algorithms allos us to use data structures to perform actions on that data
> Data Structures + Algorithms = Programs
> Class{} + function() = Program

**Data Structures**
- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Tries
- Graphs
- Hash Tables

**Algorithms**
- Sorting
- Dynamic Programming
- BFS + DFS (searching)
- Recursion

- Big(O) and scalability is important as data gets larger and larger
    - Certain algorithms allows us to simplify our Big(O) complexity into smaller/better time complexity
    - For example, a function of O(n^2) can be reduced to O(n log n) with the right algorithm

#### Recursion Introduction
- Technically, recursion isn't an algorithm... it is more of a concept
- Recursion is when you define something in terms of itself
    - It is a function that refers to itself inside the function
```js
function inception() {
    inception();
}
```
- Recursion is good for tasks that have repeated subtasks
- The concept of recursion is used in searching and sorting algorithms
```js
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
```

#### Stack Overflow
- Recursive functions can lead to the concept of [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow)
- There is a ``call stack`` that functions based on memory... adding to much to the stack uses up all memeory
- One of the biggest problems with recursion is causing a ``stack overflow``
    - Recursion has to hold onto the individual calls in the ``call stack``

#### Anatomy of Recursion
- Every recursive function needs to have a "base case" (stop point)
- Recursive functions have two paths
    1. Recursive case (call the function)
    2. Base case (stop calling the function)

**3 Rules to build a recursive function**
1. Identify the base case
2. Identify the recursive case
3. Get closer to base case and return when base case is true

- Some recursive functions can have exponential time
    - Big(O) = O(2^n)
    - Dynamic programming and memoization can improve to O(n)

#### Recursive vs Iterative
- Anything you do with recursion can be done iteratively (loop)
- Recursion can make code DRY and readable, but it creates a large stack (memory footprint)
- Iterative solution may not be as readable, but they tend to be more efficient because they don't make additional function calls
- Recursion can be effective when working with data structures with an unkown depth (trees, traversal)
**Tail Call Optimization**
Allows recursion without increasing call stack

#### When to use recursion
- Traversing or searching trees or graphs can be optimal with recursion
- Every time you're using a tree or converting something into a tree, consider recursion
    1. Divide into a number of sub problems that are smaller instances of the same problem
    2. Each instance of the sub problem is identical in nature
    3. The solution of each sub problem can be combined to solve the problem at hand
- Divide and conquer using recursion

#### Recursion Review
- A function that calls itself
- Good because it can maintain state at different levels of recursion
- The stack gets filled with functions and is removed one by one until we have our final return
- With recursion, we have to be wary of stack overflows
- Use recursion when it makes code more readable
    - It can however, be less efficient than an iterative solution
- Anything you can do with recursion you can do iteratively

---
### Algorithms: Sorting
#### Sorting Introduction
- When inputs get larger, sorting is more complicated
- Most big companies have some form of sorting involved
- There are various [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm) available outside of the ``.sort()`` methods available in programming languages
- Sorting and searching are two of the bigger problems in computer science

**Types of Sorting**
- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

#### The issue with sort()
- We can't always trust that the built in sort method will sort data correctly

```js
const basket = [1, 65, 34, 2, 1, 7, 8];
basket.sort() // [1,2,2,34,65,7,8]
```
- In JavaScript, the [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method converts elements to strings before sorting

- The [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method can be used when sorting letters with accents

```js
spanish.sort(function(a,b) {
    return a.localeCompare(b);
})
```

#### Sorting Algorithms
- Sorting algorithms have their own tradeoffs
    - They each have their own time complexity and space complexity tradeoffs
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
- Sorting algorithms perform differently based on the inputs

#### Bubble Sort
- Bubble sort is one of three "elementary sorts" (insertion, selection)
- Bubble sort comes from the idea of "bubbling up" the largest value using multiple pass throughs
    - Bubble sort is not very efficient because of the 'multiple pass through' nature, but it is very simple
- **Bubble sort**:
    - Time complexity: O(n^2)
    - Space complexity: O(1)

#### Selection Sort
- Selection sort is another one of the simpler ways to sort a list
- The algorithm works by scanning a list of elements for the smallest item and swapping it with the element in the first position
- **Selection sort**:
    - Time complexity: O(n^2)
    - Space complexity: O(1)

#### Insertion Sort
- Insertion sort is also not the most efficient, but in some cases it is extremely fast
- Insertion sort is useful when the list is almost sorted
- It performs well with small data sets
- **Insertion sort**:
    - Time complexity: O(n^2)
    - Space complexity: O(1)

#### Merge Sort and O(n log n)
- Merge sort (like quick sort) uses the divide and conquer approach with the use of recursion
    - This method usually provides a logn advantage
- Merge sort takes a list and divides it in half continuosly until there are single elements
    - The single elements are compared and the list is merged back into one until it is sorted
- Merge sort is one of thore effecient methods of sorting and typically performs better than other sorting algorithms
- **Merge sort**:
    - Time complexity: O(n log(n))
    - Space complexity: O(n)
- Merge sort is a "stable algorithm": [stack overflow explanation](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
    - A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted.
    - Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.

#### Quick Sort
- Like merge sort, quick sort is a divide and conquer algorithm
- Quick sort uses a pivoting technique to break the main list into smaller lists
    - The smaller lists use the pivoting technique until they're sorted
- **Quick sort**:
    - Time complexity: O(n^2)
    - Space complexity: O(log(n))
- Quick sort and merge sort are probably the two most used sorting algorithms
- Quick sort is usually the fastest, but it has bad worst case behaviors

#### Which Sort is Best
- **Insertion sort** should be used with a small amount of items or almost sorted items
    - It uses very little space and is easy to implement in code
- **Bubble sort** is not used very often
- **Selection sort** like bubble sort is not very efficient and won't be used that often
- **Merge sort** should be used when we're worried about worst case scenarios
    - However, if worried about memory, merge sort is very expensive
- **Quick sort** is one of the more popular sorting algorithms, but compared to merge sort, its downside is the worst case scenario
    - If the pivot isn't picked properly, the sorting could be very slow
- **Heap sort**:
    - Time complexity: O(n log(n))
    - Space complexity: O(1)
- While heap sort does have favorable worst case scenarios, it is slower in most cases

#### Heap Sort
- [Heap sort](https://brilliant.org/wiki/heap-sort/)
    - Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure.
    - Like mergesort, heap sort has a running time of O(n log(n))
    - and like insertion sort, heap sort sorts in-place, so no extra space is needed during the sort.
- [quick sort vs heap sort SO](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort)
    - Heapsort is O(N log N) guaranted, what is much better than worst case in Quicksort.
        - Heapsort doesn't need more memory for another array to putting ordered data as is needed by Mergesort.
        - So why do comercial applications stick with Quicksort? What Quicksort has that is so special over others implementations?
    - I've tested the algorithms myself and I've seen that Quicksort has something special indeed.
        - It runs fast, much faster than Heap and Merge algorithms.
        - The secret of Quicksort is: It almost doesn't do unnecessary element swaps. Swap is time consuming.

#### Radix Sort and Counting Sort
- **Comparison Sort**
    - Bubble Sort
    - Insertion Sort
    - Selection Sort
    - Merge Sort
    - Quick Sort
- Mathematically, it is impossible to improve on O(n log(n))
    - We sort by comparison
    - However, it can be improved upon if there are no comparisons made

- **Non-comparison Sort**
    - Counting sort
    - Radix sort
- Non-comparison uses binary for sorting?
- They are only useful for fixed length integers

- **Radix sort**:
    - Time complexity: O(nk)
    - Space complexity: O(n+k)

- **Counting sort**:
    - Time complexity: O(n+k)
    - Space complexity: O(k)

- Radix Sort: https://brilliant.org/wiki/radix-sort/
- Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html
- Counting Sort: https://brilliant.org/wiki/counting-sort/
- Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

#### Sorting Review
- JavaScript uses insertion sort for the ``sort()`` method, however it is different from browser to browser
    - Chrome uses quick sort and insertion sort
    - Mozilla uses merge sort
- Use **quick sort** when the average case performance matters more than the worst case (average is O(n log(n)))
- **merge sort** is always O(n log(n)) and it' stable... space complexity is worse than quick sort
- In the work setting **bubble**, **insertion**, and **selection** are not typically used
- In the work setting, the framework or library will have a built in sorting algorithm

---
### Alogrithms: Searching + BFS + DFS
- Breadth First Search
- Depth First Search
- Searching is performed often

- **Search/Traversal**
    - Linear Search
    - Binary Search
    - Depth First Search
    - Breadth First Search

#### Linear Search
- A method of finding a target value within a list
- Sequentially searches each element in a list until the target is found or each element has been searched
- **Linear Search**:
    - Time complexity: O(n)
- Search can be improved if the elements are sorted

#### Binary Search
- If we know the list is sorted, we can discard half the items... we can start searching in the middle of the list
- **Binary Search**:
    - Time complexity: O(log n)

#### Graph + Tree Traversals
- Search and Traversal are often used interchangably
- Traversals can be thought of as visiting every node
- Both tree and graph traversals will be DFS or BFS

#### BFS Introduction
- Breadth First Search searches left to rigtht level by level until the node is found or tree ends
- BFS uses additional memory because it is necessary to track the child nodes on each level

#### DFS Introduction
- Depth First Search searches one branch of the tree down as many levels as possible until target node is found or the end is reached
- DFS has a lower memeory requirement than BFS because it's not necessary to store all the child pointers
- The idea is we want to go as deep as possible in a graph or tree, usually starting from the left, and then go to the right until the traversal is complete

#### BFS vs DFS
- Both achieve the goal of traversal
- Both have the same time complexity: O(n)
- **BFS**
    - Pros:
        - Good at finding the shortest path
    - Cons:
        - Requires more memory
    - If you have additional information and know that the location of the node is in the upper level of the graph or tree, BFS is better
- **DFS**
    - Pros:
        - Less memory required
        - Good at asking the question: does the path exist?
    - Cons:
        - It can get really slow if the tree or graph is really deep

#### PreOrder, InOrder, PostOrder
- There are three ways we can implement DFS:
    - inorder: 33, 101, 105
    - preorder: 101, 33, 105
        - start with parent node then the child nodes from left to right
        - useful if we cant to recreate a tree
    - postorder: 33, 105, 101
        - goes to the bottom from left to right up to the parent

#### Graph Traversal
- Graph traversals are the same as tree traversals considering trees are a type of graph
- [Visual Algo](https://visualgo.net/en/dfsbfs)
- **BFS in Graphs**
    - Lends itself nicely to determining the shortest path between any node
    - Used in reccomendation engines (p2p networks, google maps, facebook)
    - Allows us to turn a graph into a tree
- **DFS in Graphs**
    - Can be used to solve something like a maze
    - Good at determining if the path exists

#### Dijkstra and Bellman-Ford Algorithms
- These algorithms most likely won't show up in an interview as they are extremely complicated and take up a long time
- BFS is good at findihng the shortes path, but it assumes each path has the same weight
- Dijkstra or Bellman would be best to find the shortest path in a weighted graph
- Bellman-Ford is more effective at solving the shortest path because it can account for negative weights
- Bellman-Ford has a time complexity of O(n^2)
- Dijkstra can't accomodate for negative weights, but it is more efficient

#### Searching and Traversal Review
- Linear search can be good for some cases but it's not the most efficient
- Binary search can search with O(log(n))
- Depth First Search goes as deep as possible into a tree or graph
- Breadth First Search searches level by level

### Algorithms: Dynamic Programming
#### Dynamic Programming Introduction
- Dynamic programming is an optimization technique using caching
- At a high level, dynamic programming is a way to solve a problem by breaking it down into a collection of sub problems
    - Solve each sub problem once and store the solution

#### Memoization
- Caching is a way to store values so you can use them later on
- Caching is a way to speed up programs by holding some peice of data in an easily accessible way
- Memoization is a specific form of caching that involves caching the return value
- Memoization is simply a way to remember a solution to a sub-problem

#### Dynamic Programming
- Dynamic programming combines divide and conquer with memoization
- Steps to determine whether dynamic programming should be used
    1. Can be divided into subproblem
    2. Recursive solution
    3. Are the subproblems repetitive
    4. Memoize subproblems
