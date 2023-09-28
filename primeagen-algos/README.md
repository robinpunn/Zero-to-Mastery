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


