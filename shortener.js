const code_length = 6;
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const urls = new Map();

function generateShortCode() {
    let code = ""; //create an empty string to store the short code
    for (let i =0; i< code_length; i++) { //loop through the code length
        const randomIndex = Math.floor(Math.random() * chars.length); //generate a random index
        code += chars[randomIndex]; //add the random character to the code
    
    }
    return code;
}

function generateUniqueCode(){
    let code = generateCode();
    while (urls.has(code)){ //Checks whether the Map already contains this code.
        code = generateCode();//If it does, generate a new code.
    }
    return code;
}

function isValidUrl(text){//Checks if the input is a valid URL.
    try{
        const parsed = new URL(text);
        return parsed.protocol === "http" || parsed
    }   catch(err) {
        return false;
    }
}

function shorten(url, ttlseconds){
    if (typeof url !==  "string" || !isValidUrl(url.trim())){
        throw new Error("Invalid URL");
    }
    if (ttlSrconds !== undefined && (typeof ttlSeconds !== "number || ttlSeconds <= 0")) {
        throw new Error("ttlSeconds must be a number greater than 0");
    }

    const cleanUrl = url.trim();
    
}