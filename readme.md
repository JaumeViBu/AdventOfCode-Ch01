# \* ADVENT OF CODE 2023 \*

## Challenge of day 01

For this year Advent of Code I will try to apply TDD with JS, using Node and Jest.

This first challenge took me too long due to 2 big time sinkers.

- The first one being having to fight in order for jest to accept es6 module syntax, in the end I used coomonJs as to be able to advance.
- The second was that I thought that using regex to parse the input given would be quick and easy... as always, regex turns to be a hard mistress. After too many hours sinked in trying to get a working regex to do everything, I decided to just use two simpler rules, one for the start and one for the end.

I tried to apply TDD as best as I could.
First I wrote the function definitions.
After that I wrote the basic tests I could see I will need for that function.
Finally I worked on the fuction till it passed all tests.
If at any moment I found I needed to pass extra tests, I wrote the tests and if they failed went backk to fix the function until it passed.

&nbsp;

After passing the first part of the challenge, I saw the good part of applying TDD, as I could expand what I had without fear of breaking something else and not catching it.

&nbsp;

All in all, I enjoyed this first one.

---

### Run it

It's a node project, so first, make sure to have node in your machine.
([How to install node](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))

Before trying to run it, it's necessary to install the packages for it, in this project these are:

- Jest

To install the missing packages, in a terminal being inside the project directory run:

> npm install

To run the tests using jest, in terminal:

> npm test

---

## Challenge-Text:

### Part 1

---

Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

> 1abc2
> pqr3stu8vwx
> a1b2c3d4e5f
> treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

&nbsp;

### Part 2

---

Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

> two1nine
> eightwothree
> abcone2threexyz
> xtwone3four
> 4nineeightseven2
> zoneight234
> 7pqrstsixteen

In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?

---

### [Advent Of Code 2023 - Day01](https://adventofcode.com/2023/day/1)
