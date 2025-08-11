# HashTables

## Across Languages:
- JVS: Objects
- JVA: Maps
- PYN: Dictionaries
- RBY: Hashes

## Overview

**Example: Grapes in a Basket**

We are trying to store 10,000 grapes in a basket:
- label = "basket"
- key = "grapes"
- value = 10,000

```Javascript
basket.grapes = 10000;
```

## Hash Functions
- A function that generates a value of fixed length for each input that it gets
- Hashing can look like md5, SHA-256, SHA-1, etc. They encrypt.

**Usable Functions:**
- Insert: O(1)
- lookup: O(1)
- delete:  O(1)
- search: O(1)

## Stack Overflow
- You always have a llimited amount of memory to store
- Because Hash functions randomly store in certain parts of memory, there may be collisions
- When two seperate pieces of data collide in one part of our bucket (address), we get a stack overflow
- stack overflows create new data structures that are called linked lists.
- colliisons (for read/write) slow down how fast we can access data in our tables. O(n/k) -> O(n)

## Hash Tables VS. Arrays
- Hash Tables are used when you want quick access to certain values
- Because of hash addresses, we can quickly grab data using keys.
- for insertions and deletions, because we can quickly access via addresses, we can get by with O(1) time
- For arrays, we need to iterate through the list, so it takes a lot longer.




