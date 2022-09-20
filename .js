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
    + (b >  a || b >= c ? square(b) : 0)  
    + (c >  a || c >  b ? square(c) : 0);
    
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
function some_function_implementation(n) {
    const rec = (n) =>
        n < 3
        ? n
        : rec(n - 1)
          + 2 * rec(n - 2)
          + 3 * rec(n - 3);
          
    const iter = (a, b, c, count) =>
        count === 0
        ? c
        : iter(b,
               c,
               a * 3 + b * 2 + c,
               count - 1);
    
    // return rec(n);
    return n < 3 ? n : iter(0, 1, 2, n - 2);
}

// some_function_implementation(12);

//------------------------------
// listing
//------------------------------

const is_even = (x) =>
    x % 2 === 0;

const fast_pow = (base, exp) =>
    exp === 0
    ? 1
    : is_even(exp)
        ? square(fast_pow(base, exp / 2))
        : base * fast_pow(base, exp - 1);

// fast_pow(123, 30);
        
//------------------------------
// 1.16, RIS
//------------------------------

function pow(base, exp) {
    const pow_iter = (acc, base, exp) =>
        exp === 0
        ? acc
        : is_even(exp)
            ? pow_iter(acc, base * base, exp / 2)
            : pow_iter(acc * base, base, exp - 1);
            
    return pow_iter(1, base, exp);
}

// pow(2, 5);

//------------------------------
// 1.17, 1.18
//------------------------------

const double = (x) =>
    x + x;

const halve = (x) =>
    x / 2;

function times(a, b) {
    const times_iter = (res, a, b) =>
        b === 0
        ? res
        : is_even(b)
            ? times_iter(res, double(a), b / 2)
            : times_iter(res + a, a, b - 1);
    
    return times_iter(0, a, b);
}

times(12345, 12345);

//------------------------------
// listing
//------------------------------

const gcd = (a, b) =>
    b === 0
    ? a
    : gcd(b, a % b);

// gcd(6, 40);

const divides = (a, b) =>
    a % b === 0;

function smallest_divisor_brutforce(n) {
    
    
   return find_divisor(n, 2); 
}