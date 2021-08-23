const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let a = expr.match(/.{1,2}/g).join(' ').match(/.{1,15}/g).join('** ** ** ** ** ').match(/.{1,3}/g)
    let i = 0
    let result = ''
    while (i <= expr.length) {
    if (a[i] === "10 " || a[i] === '10') {
            result = result + '.'
            i++
    } else if (a[i] === "11 " || a[i] === '11') {
            result = result + '-'
            i++
    } else if (a[i] === "00 ") {
        result = result + ''
        i++
    } else if (a[i] === "** ") {
        result = result + ' '
        i += 5
    }else {
        break
    }
    }

    return result
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => MORSE_TABLE[b]
        ).join('')
    ).join(' ');
}

module.exports = {
    decode
}
