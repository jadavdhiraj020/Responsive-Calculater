let input_numbers = document.querySelectorAll('.btn');
let small_display = document.querySelector('.small_display');
let big_display = document.querySelector('.big_display');
const pi = 3.1415926535897932384626433832795;
const expo = 2.7182818284590452353602874713527;
let value = '0';
let values;
let input;
let key;

print_number();

function print_number() {
    input_numbers.forEach(element => {
        value = '';
        element.onclick = function () {
            input = element.innerText;
            if (input === 'C') {
                clear();
            } else if (input === 'n!') {
                values = small_display.innerHTML;
                value = factorial(value);
                big_display.innerText = value;
                small_display.innerText = `fact(${values})`;
            } else if (input === 'x²') {
                values = small_display.innerHTML;
                value = sqr(value);
                big_display.innerText = value;
                small_display.innerText = `sqr(${values})`;
            } else if (input === 'π') {
                handleConst(pi);
            } else if (input === 'e') {
                handleConst(expo);
            } else if (input === '√') {
                values = small_display.innerHTML;
                value = squareRoot(value);
                small_display.innerText = `sqrt(${values})`;
                big_display.innerText = value;
            } else if (input === 'x^y') {
                value += '^';
                small_display.innerHTML = value;
            } else if (input === '10^x') {
                value = '10^' + value;
                small_display.innerHTML = value;
            } else if (input === 'log') {
                values = small_display.innerHTML;
                value = logarithm(value);
                small_display.innerText = `log(${values})`;
                big_display.innerText = value;
            } else if (input === 'sin' || input === 'cos' || input === 'tan') {
                trigonometric(value);
            } else if (input === 'CE') {
                clear();
            } else if (input === '=') {
                result(value);
                value = values || '';
            } else {
                value += element.innerText;
                small_display.innerHTML = value;
            }
        };
    });
}


function result(value) {
    if (value === '') {
        value = '0';
    } else {
        value = value.replace('^', '**');
        value = eval((`${value}`));
    }
    values = eval(value);
    big_display.innerHTML = value;
    return values;
}

function trigonometric(value) {
    if (input === 'sin') {
        value = value * (Math.PI / 180);
        value = Math.sin(value);
        values = small_display.innerHTML;
        // value = tangent(value);
        small_display.innerText = `sin(${values})`;
        big_display.innerText = value;
    } else if (input === 'cos') {
        value = value * (Math.PI / 180);
        value = Math.cos(value);
        values = small_display.innerHTML;
        // value = tangent(value);
        small_display.innerText = `cos(${values})`;
        big_display.innerText = value;
    } else {
        value = value * (Math.PI / 180);
        value = Math.tan(value);
        values = small_display.innerHTML;
        // value = tangent(value);
        small_display.innerText = `tan(${values})`;
        big_display.innerText = value;
    }
}

function clear() {
    value = '';
    small_display.innerHTML = value;
    big_display.innerHTML = value;
}

function factorial(value) {
    if (value === '') {
        return 1;
    } else {
        if (value < 0) {
            return 'Error: Cannot calculate factorial of a negative number';
        } else if (value === 0 || value === 1) {
            return 1;
        } else {
            return value * factorial(value - 1);
        }
    }
}

function sqr(value) {
    if (value === '') {
        return 0;
    } else {
        if (value === 0) {
            return 0;
        } else {
            return value * value;
        }
    }
}

function logarithm(value) {
    if (value === '') {
        return 0;
    } else {
        if (value === 0) {
            return 0;
        } else {
            return Math.log10(value);
        }
    }
}

function squareRoot(value) {
    return value = Math.sqrt(value);
}


function handleConst(constants) {
    if (value === '') {
        small_display.innerText = '';
        big_display.innerText = constants;
    } else {
        value = value + expo;
        small_display.innerText = value;
    }
}

document.body.addEventListener('keydown', (event) => {
    key = event.key;
    if (key >= '0' && key <= '9') {
        big_display.innerHTML = '';
        value += key;
        small_display.innerHTML = value;
        event.preventDefault();
    } else if (key === '+') {
        big_display.innerHTML = '';
        value += '+';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === '-') {
        big_display.innerHTML = '';
        value += '-';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === '*') {
        big_display.innerHTML = '';
        value += '*';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === '/') {
        big_display.innerHTML = '';
        value += '/';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === 'Enter') {
        result(value);
        value = values || '';
    } else if (key === 'c' || key === 'Delete') {
        clear();
    }
});

