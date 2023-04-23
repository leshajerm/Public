function checkPalindrome(word) {
    let newWord = word.split(''," ",",").reverse().join('');
    word = word.split(''," ",",").join('')
    if (word == newWord) {
        console.log('This is palindrome ')
    }
    else {
        console.log('false')
    }
}
checkPalindrome('anna, anna')