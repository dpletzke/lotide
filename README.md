# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dpletzke/lotide`

**Require it:**

`const _ = require('@dpletzke/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `(head)`: returns first element of an array
* `(tail)`: returns last element of an array
* `(middle)`: returns the middle element or pair of elements
* `(assertArraysEqual)`: prints to console if arrays are deep equal
* `(assertEqual)`: prints to console if values are strict equal
* `(assertObjectsEqual)`: prints to console if objects are deep equal
* `(countLetters)`: counts a passed character in a string
* `(countOnly)`: counts a passed item in a array
* `(eqArrays)`: returns true if arrays are deep equal
* `(eqObjects)`: returns true if objects are deep equal
* `(findKey)`: returns key who's value returns true when passed into callback
* `(findKeyByValue)`: returns key of passed value
* `(flatten)`: returns 1d array of passed many dimensional array
* `(letterPositions)`: returns an object of key: value pairs of all characters in a string where the value is an array of the indexes of that character  
* `(map)`: this is a recreation of the .map() vanilla JS function
* `(takeUntil)`: returns an array slice starting at the beginning and excluding after the first element that passes a callback 
* `(without)`: 

