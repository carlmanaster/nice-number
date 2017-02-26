# nice-number
_Compact formatting of numbers_

For many applications we're only interested in the first few digits of a number.  Comparing two similar numbers, if their first three digits are the same and they have the same number of digits, they're close enough to be the same for many purposes.  And they take up a lot less screen space.  So nice-number gives you a nice representation of the number which is useful for these purposes.  Values with an absolute value between 10 and 1,000 are presented as integers; with an absolute value between 1,000 and 1,000,000 as an integer 'K', etc.  If they're too large or too small, exponential notation is used.


*  returns 'null' for null
*  returns 'null' for undefined
*  uses exponential notation for values < 0.001
*  uses 0.xxx notation for values < 1
*  uses x.x notation for values < 10
*  uses integer notation for values < 1,000
*  uses K notation for values < 1,000,000
*  uses M notation for values < 1,000,000,000
*  uses G notation for values < 1,000,000,000,000
*  uses exponential notation for values >= 1,000,000,000,000
