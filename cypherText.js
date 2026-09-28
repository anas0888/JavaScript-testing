 function cypherText(str){
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            return String.fromCharCode(97 + (122-code))
       
        }
    }).join('')
}
export {cypherText}