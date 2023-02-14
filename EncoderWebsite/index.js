
// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}


const inputText = function(){
    return document.getElementById("inputText").value;
}

const enterPassword = function(){
    return document.getElementById("password").value;
}

function setOutputText(text){
    document.getElementById('outputText').textContent = text;
}

function toOriginalText(){
    //I know this do not protect any thing. ya.
    if(md5(enterPassword())=="cde894c52e0ad735d6c72ced91a04250"){
        setOutputText(atou(inputText()));
    }
    else{
        setOutputText("Wrong Password.(Hint:10 word)")
    }
    
}


function toEncodedText(){
    setOutputText(utoa(inputText()));
}
