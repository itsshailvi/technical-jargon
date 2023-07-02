//Reverse words in a given string
// Input:
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i

reverseWords(s)
    {
      //split('.') based on the gap if nothing then no space('') if they have space in between(' ') and then it makes them in array based on separator,
       // reverse , reverses array like a function call join again joins it to form like a string based on parameter that acts as a separator
 
        return s.split('.').reverse().join('.')
    }
