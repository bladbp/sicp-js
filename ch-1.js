// 1.2
const translated_expr = () => 
    (5
       + 4
       + (2 - (3 - (6 + 4 / 5))))
    /
    (3
       * (6 - 2)
       * (2 - 7));
             
// translated_expr()
//------------------------------
// 1.3
//------------------------------

const square = (x) =>
    x * x;

const max_square = (a, b, c) =>
    (a >= b || a >= c ? square(a) : 0)
    +
    (b >  a || b >= c ? square(b) : 0)  
    +
    (c >  a || c >  b ? square(c) : 0);
    
// max_square(1, 2, 3);
//------------------------------
// 1.7
//------------------------------

const abs = (x) =>
    x < 0
    ? -x
    : x;

const average = (x, y) =>
    (x + y) / 2 ;

function sqrt(x) {
    const improve = (guess, x) =>
        average(guess, x / guess);
        
    const is_good_enough = (guess, prev_guess) =>
        abs(guess - prev_guess) < 0.00001;
    
    const sqrt_iter = (guess, prev_guess, x) =>
        is_good_enough(guess, prev_guess)
        ? guess
        : sqrt_iter(improve(guess, x), guess, x);
        
    return sqrt_iter(1, 2, x);
}

// sqrt(15159303417273129); // 123123123
//------------------------------

function factorial(x) {
    const fact_iter = (product, count) => 
        count <= 0
        ? product
        : fact_iter(product * count, count - 1);
    
    return fact_iter(1, x);
}

//factorial(6);

function fib(x) {
    const fib_iter = (a, b, count) =>
       count <= 0
       ? a
       : fib_iter(b, a + b, count - 1);
       
    return fib_iter(0, 1, x);
}

// fib(2);

//------------------------------
// 1.11
//------------------------------

// f(n) = n if n < 3 and f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3







