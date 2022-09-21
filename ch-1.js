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

// times(12345, 12345);

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

function smallest_divisor(n) {
    const find_divisor = (n, test) =>
        n < square(test)
        ? n
        : divides(n, test)
            ? test
            : find_divisor(n, test + 1);
    
    return find_divisor(n, 2); 
}

const is_prime = (n) =>
    n === smallest_divisor(n);

// is_prime(619);

const expmod = (base, exp, m) =>
    exp === 0
    ? 1
    : is_even(exp)
        ? square(expmod(base, exp / 2, m)) % m
        : (base * expmod(base, exp - 1, m) %m);

// expmod(2, 3, 3);

function fermat_test(n) {
    const try_it = (a) =>
       expmod(a, n, n) === a;
       
    return try_it(1 + math_floor(math_random() * (n - 1)));
}

// fermat_test(13);

const fast_is_prime = (n, times) =>
    times === 0
    ? false
    : fermat_test(n)
        ? fast_is_prime(n, times - 1)
        : false;

//------------------------------
// 1.30
//------------------------------

function sum(from, to, fn, step_fn) {
    const iter = (x, result) =>
        to < x
        ? result
        : iter(step_fn(x), result + fn(x));
        
    return iter(from, 0);
}

//------------------------------
    
const cube = (x) =>
    x * x * x;
    
    
const inc = (n) =>
    n + 1;

const sum_cubes = (from, to) =>
    sum(from, to, cube, inc);

// sum_cubes(1, 10);

const same = (x) =>
    x;

const sum_integers = (from, to) =>
    sum(from, to, same, inc);
    
sum_integers(1, 10);
