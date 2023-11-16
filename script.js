let input_numbers = document.querySelectorAll('.btn');
let small_display = document.querySelector('.small_display');
let big_display = document.querySelector('.big_display');
let history_display = document.querySelector('.history_display');
const pi = 3.1415926535897932384626433832795;
const expo = 2.7182818284590452353602874713527;
let alternatives = 0;
let value = '0';
let history_html = '';
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
            } else if (input === 'π') {
                handleConst(pi);
            } else if (input === 'e') {
                handleConst(expo);
            } else if (input === 'x^y') {
                value += '^';
                small_display.innerHTML = value;
            } else if (input === 'log' || input === 'n!' || input === '√' || input === 'x²' || input === '1/x' || input === 'ln') {
                log_root_n(value);
            } else if (input === 'sin' || input === 'cos' || input === 'tan') {
                trigonometric(value);
            } else if (input === '10^x') {
                value = '10^' + value;
                small_display.innerHTML = value;
            } else if (input === '=') {
                result(value);
                history();
                value = values || '';
            } else {
                value += element.innerText;
                small_display.innerHTML = value;
            }
        };
    });
}

function delete_history() {
    history_display.innerHTML = '';
    small_display.innerHTML = '';
    big_display.innerHTML = '0';
}

function history() {
    history_html += `            
            <div>
                <p class="small_history_display">${small_display.innerText}</p>
                <p class="big_history_display">=${big_display.innerText}</p>
                <hr>
            </div>`;
    history_display.innerHTML = history_html;
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


function remover() {
    value = small_display.innerText;
    value = value.substring(0, value.length - 1);
    small_display.innerText = value;
    result(value);
}

function log_root_n(value) {
    values = small_display.innerText;
    if (input === 'log') {
        value = logarithm(value);
        small_display.innerText = `log(${values})`;
    } else if (input === 'ln') {
        value = ln(value);
        small_display.innerText = `ln(${values})`;
    } else if (input === '√') {
        value = squareRoot(value);
        small_display.innerText = `sqrt(${values})`;
    } else if (input === 'n!') {
        value = factorial(value);
        small_display.innerText = `fact(${values})`;
    } else if (input === 'x²') {
        value = sqr(value);
        small_display.innerText = `sqr(${values})`;
    } else if (input === '1/x') {
        value = logarithm(value);
        small_display.innerText = `1/(${values})`;
    }
    big_display.innerText = value;
    return value;
}

function trigonometric(value) {
    value = value * (Math.PI / 180);
    values = small_display.innerHTML;
    if (input === 'sin') {
        value = Math.sin(value);
        small_display.innerText = `sin(${values})`;
    } else if (input === 'cos') {
        value = Math.cos(value);
        small_display.innerText = `cos(${values})`;
    } else {
        value = Math.tan(value);
        small_display.innerText = `tan(${values})`;
    }
    big_display.innerText = value;
}

function clear() {
    value = '0';
    small_display.innerHTML = value;
    big_display.innerHTML = value;
    value = '';
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

function ln(value) {
    if (value === '') {
        return 0;
    } else {
        if (value === 0) {
            return 0;
        } else {
            return Math.log(value);
        }
    }
}

function squareRoot(value) {
    return value = Math.sqrt(value);
}


function handleConst(constants) {
    if (value === '') {
        small_display.innerText = constants;
        value = constants;
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
        history();
        value = values || '';
    } else if (key === 'c' || key === 'Delete') {
        clear();
    } else if (key === '(') {
        big_display.innerHTML = '';
        value += '(';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === ')') {
        big_display.innerHTML = '';
        value += ')';
        event.preventDefault();
        small_display.innerHTML = value;
    } else if (key === 'Backspace') {
        remover();
    }
});

