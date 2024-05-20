
// Function to generate a random shortener URL code
function generateCode(length){
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for( let i = 0; i < length; i++){
    result += chars.charAt(Math.floor(Math.random()* chars.length))
  }
  return result
}


// Class to represent the URL shortener
class URLShortener{
constructor(){
  this.usedCodes = new Set() // set to store used shortened codes
  this.urlMap = {
    code: '',
    url: ''
  } // Object to map shortened codes to original URLs
}

shorten(_url){
  let _code;
  do {
    _code = generateCode(5); // generate a 5-character random code
  } while (this.usedCodes.has(_code)); // Check if code is unique
  
  this.usedCodes.add(_code) // add the unique code to the set
  this.urlMap.code = _code; // store the mapping in the object
  this.urlMap.url = _url
  return _code
}

// Function to get the original URL for a shortened code
getOriginalURL(code) {
  return this.urlMap[code]
}
}

module.exports = {generateCode, URLShortener}