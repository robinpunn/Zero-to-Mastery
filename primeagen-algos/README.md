# [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)

---
### Table of Contents
1. [Introduction](#introduction)
2. [Basics](#basics)
    1. [Big O Time Complexity](#big-o-complexity)
        - [What is Big O](#what-is-big-o)
        - [Why do we use it](#why-do-we-use-it)
        - [Big O Complexity](#big-o-complexity)
    2. [Arrays Data Structure](#arrays-data-structure)
        - [Array](#array)
        - [Arrays Q and A](#arrays-q-and-a)
3. [Search](#search)
	1. [Linear Search and Katat Setup](#linear-search-and-kata-setup)
		- [Algorithms](#algorithms)
	2. [Binary Search Algorithm](#binary-search-algorithm)
		- [Is it ordered](#is-it-ordered)
	3. [Psuedo Code Binary Search](#psuedo-code-binary-search)
	4. [Two Crystal Balls Problem](#two-crystal-balls-problem)
	5. [Implementing Two Crystal Balls](#implementing-two-crystal-balls)


## Introduction
[A Common-Sense Guide to Data Structures and Algorithms](https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222?keywords=introduction+to+algorithms&s=books&sr=1-16&linkId=2000de29907b98b5ac7a98aa6b52c1d9&language=en_US&ref_=as_li_ss_tl)
[Introduction to Algorithms](https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X?keywords=introduction+to+algorithms&s=books&sr=1-1&linkId=83c55b2c018fbe94a1de79ebd447b66a&language=en_US&ref_=as_li_ss_tl)

## Basics
### Big O Time Complexity
#### What is Big O
Big O is a way to categorize your algorithms time or memory requirements based on input. It is not meant to be an exact measurement. It will not tell you how many CPU cycles it takes. Instead, it is meant to generalize the growth of your algorithm.
- Example: When someone says Oh of N, they mean your algorithm will grow linearily based on input

#### Why do we use it
Often it will help us make decisions about what data structures and algorithms to use. Knowing how they will perform can greatly help create the best possible program

**Example**:
```js
function sum_char_codes(n:string): number {
	let sum = 0;
	for (let i=0; i<n.length; ++i) {
		sum += n.charCodeAt(i);
	}
	return sum;
}
```
O(n)?

**Big O, said differently**
As your input grows, how fast does computation grow?

**Important concepts**
	1. growth is with respect to the input

**In the real world**
obviously memory growing is not computationally free, but in the matter of thinking about algorithms, we don't necessarily think about that

In languages like Go or JavaScript, you pay even heavier penalties because the memory can be kept around, grows faster, and causes complete halts in your program for cleanup

**Back to the example**
Simplest trick for complexity is to look for loops

**Another Example**
```js
function sum_char_codes(n:string): number {
	let sum = 0;
	for (let i=0; i<n.length; ++i) {
		sum += n.charCodeAt(i);
	}
	for (let i=0; i<n.length; ++i) {
		sum += n.charCodeAt(i);
	}
	return sum;
}
```
Still O(n)... drop constants

**Important concepts**
1. growth is with respect to inputs
2. Constants are dropped
	- O(2n) -> O(n)... Big O is meant to describe the upper bound of the algorithm (the growth of the algorithm). The constant eventually becomes irrelevant.

Take the following:
N = 1, O(10N) = 10, O(N^2) = 1
N = 5, O(10N) = 50, O(N^2) = 25
N = 100, O(10N) = 1000, O(N^2) = 10,000 // 10x bigger
N = 10000, O(10N) = 100,000, O(N^2) = 100,000,000 //1000x bigger

**There is a practical vs theoretical difference**
Just because N is faster than N^2, doesn't mean practically its always faster for smaller input
We drop constants. Therefore O(100N) is faster than O(N^2). But practically speaking, O(N^2) would probably win for some small set of input.

**Let's do another example**
```js
function sum_char_codes(n:string):number {
	let sum = 0;
	for (let i=0; i<n.length;++i) {
		const charCode = n.charCodeAt(i);
		// Capital E
		if (charCode === 69) {
			return sum;
		}
		sum += charCode;
	}
	return sum;
}
```

**In BigO we often consider the worst case**
Especially in interviews... never asked for best, average, and worst case. Just worst case.
E =69
Therefore any string with E in it will terminate early (unless E is the last item in the list)
IT IS STILL O(N)

**Important concepts**
1. growth is with respect to the input
2. Constants are dropped
3. Worst case is usually the way we measure

#### Big O Complexity
O(1)
O(logn)
O(n)
O(n logn)
O(n^2)
O(2^n)
O(n!)

**Some Examples**
**O(N^2)**
```js
function sum_char_codes(n:string):number {
	let sum=0;
	for (let i=0; i<n.lenth;++i) {
		for (let j=0; j<n.length; ++j) {
			sum += charCode;
		}
	}
	return sum;
}
```
**O(N^3)**
```js
function sum_char_codes(n:string):number {
	let sum=0;
	for (let i=0; i<n.lenth;++i) {
		for (let j=0; j<n.length; ++j) {
			for (let k=0; k<n.length; ++k) {
				sum += charCode;
			}
		}
	}
	return sum;
}
```

**O(n log n)**
Quicksort

**O(log n)**
Binary search trees

There is also O(sqrt(n))

**One more note**
There are different ways to measure the complexity of algorithms, but in general the easiest one to use is the "Upper Band"

### Arrays Data Structure
#### Array
A contiguous memory space, contiguous meaning unbreaking, which contains a certain amount of bytes

```js
const a = new ArrayBuffer(6);

a // ArrayBuffer {[Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6}

const a8 = new Uint8Array(a)

a8[0] = 45 // 45

a // ArrayBuffer {[Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6}

a8[2] = 45 // 45

a // ArrayBuffer {[Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6}

const a16 = new Uint16Array(a)

a // ArrayBuffer {[Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6}

a16[2] = 0x4545 // 17733

a // // ArrayBuffer {[Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6}
```
The purpose of the above information was to show that arrays and lists are not the same ???

**So Let's Talk About Arrays**
- Getting a specific index
	- Takes the width of type and multiplies it by the offset, puts it at the memory address
	- That may not be the exact process, but it's the simplest way to understand it
- Insertion at a specific index
	- Inserting in to an array doesn't necessarily insert it, it overwrites its
	- Go to memory address and add in width of type
- Deletion at a specific index
	- We don't really "delete" anything
	- It gets a 0 or null value
- Insertion and Deletion have a Big O of O(1)... constant time
	- Constant time doesn't mean you do one thing, it means we do a constant amount of things no matter what the input is, it does not grow with the input

**Arrays**
They are fixed size contiguous memory chunks
- That means you cannot grow it
- There is no "insertAt" or push or pop. But that doesn't mean you can write those methods.

#### Arrays Q and A
Q: Arrays don't have insert, push, pop?
A: Technically not. Not if it is a static array or a traditional array

Q: If an array doesn't grow, does its size and memory allocation need to be specified at initialization of the array.
A: An array has to have its size as part of its allocation... you can't grow it. You can reallocate it... meaning you have to create a new array -> take your old array and write it into the new one

Q: When you're creating an array in JavaScript, are you creating something that has an array underneath the hood?
A: Yes, there is a literal array at some point. There is a memory buffer at some point underneath the hood. But, we don't see it that way in JavaScript. The same occurs in Java. For the most part, it operates as an array.

Q: How big is the array that you instantiate?
A: That is part of optimizing. In Rust, if you create a new vector, it's going to create a memory buffer with a size 5 underneath. As you push and pop, it has 5 units for you to be able to play in.


## Search
### Linear Search and Kata Setup
#### Algorithms
The A in DSA

**When Applicable**
I will pretend that JavaScript actually has arrays
I only have access to the .length property of an array

It is a good practice to visualize the problem, discuss it with boxes and arrows, and then program it. It's definitely a core competency that you will follow for life.

Search is something that you do often.
Possibly the simplest algo, Linear Search.
The ``indexOf`` method is a linear search
**What is the Big O**
O(n)... as the input grows, so does the time (linearly)

**Let's Implement it**
``git clone git@github.com:ThePrimeagen/kata-machine.git``

First example is linear search
```js
export default function linear_search( haystack: number[], needle: number,): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
```

### Binary Search Algorithm
#### **Is it ordered**
If your data set is ordered, you have new advantages you can take with that data
If we have an array that's ordered, we don't have to start in the first position

**10%**
One approach to take would be not to search from the first but to search maybe 10% of n, and then check to see if what you've searched it larger than what you need.
If it is larger, then you can search that portion to get the solution.

So we do 10 operations of jumping, plus 0.1 N. The worst case is still O(n)

Practically speaking, this is better than linear search.  But theoretically, if our elements go from 100 to 1,000,000 our algorithm will run that much slower. So we didn't "improve" the algorithm, we improved it practically speaking.

**Middle**
Another approach is to jump the middle of the array. If our value isn't in the middle, then we can check only 1 half of the array. We can keep cutting the search in half until we ultimately reach:
(N/2<sup>k</sup>) = 1
N=2<sup>k</sup>
log<sub>2</sub>N = k
logN

**Example**
log4096 = 12
4096
2048
1024
512
256
128
64
32
16
8
4
2
1
We take 12 steps to get to 1

So the worst case is we keep have to half the data, logN, and this is a binary search

##### **Another BigO Trick**
If the input halves at each step, its likely O(logN) or O(NlogN)

### Psuedo Code Binary Search
a function that searches an array with a low and high
``search(arr, lo,hi)n``
We could do a loop until some condition occurs
First we find the midpoint: lo + hi - lo divided by 2
**m = lo + (hi-lo) /2**
Adding low is the "offset", hi-lo /2 is midpoint

Then we assign the value to the midpoint

Condition 1 : value === n... then return true
Condition 2 : value > n... lo = m + 1, m = lo + (hi - lo) /2
Condition 3 : else... hi = m

do all that, while lo is less than high

This works only under the assumption that the array is sorted

```js
export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }

    } while (lo < hi);

    return false;
}
```

### Two Crystal Balls Problem
Given two crystal balls that will break from high enough distance, determine the exact spot in which it will break in the most optimized way

We're going to have an array filled with false and true, our goal is to find the first true
We can use a linear search to find the optimal breaking point returning true which would be O(n)
If we used binary search at half the data set, it would still be O(n) considering we have two crystal balls and if the first returns true then a ball breaks???
Using binary search, we cut the space in half, but it would be more efficient to jump a square root amount of times???
Using square roots, we make jumps until it breaks and then move back to the last point of non breaking. This would be O($\sqrt{n}$)

### Implementing Two Crystal Balls
The logic is, that when using binary search, if the ball breaks if we start at the half way point, then we only have one ball left and we would have to start at the last none "good" position which would be the start. Then we would linearly search from there. Even though its half the data set, it's still O(n) after dropping constants.


```js
export default function two_crystal_balls(breaks: boolean[]): number {
    // create the jump using square root
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // use first crystal ball to see where it breaks
    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // if it breaks, walk back sqrt(n)
    i -= jumpAmount;

    // as long as j is less than the jump amount and i is less than breaks.length, loop until it breaks
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
```
We first walk by $\sqrt{n}$
We check for breaks jumping by $\sqrt{n}$
If it breaks, we jump back $\sqrt{n}$
Then we linearly walk forward at most a $\sqrt{n}$ until we find a break

The reason we choose $\sqrt{n}$ is the only way we can change this from non linear running... if we use binary search, we still run into a linear problem
