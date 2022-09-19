// 1.2
const translated_expr = () => 
    (5
       + 4
       + (2 - (3 - (6 + 4 / 5))))
    /
    (3
       * (6 - 2)
       * (2 - 7))
    ;
             
// translated_expr()
//------------------------------
// 1.3
//------------------------------

const square = (x) =>
    x * x
    ;

const max_square = (a, b, c) =>
    (a >= b || a >= c ? square(a) : 0)
    +
    (b >  a || b >= c ? square(b) : 0)  
    +
    (c >  a || c >  b ? square(c) : 0)
    ;
    
// max_square(1, 2, 3);
//------------------------------
// listing
//------------------------------