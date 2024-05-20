function isValidUrl(urlString){
  try {
    new URL(urlString)
    return true
  } catch(err){
  return false}
}
module.exports = isValidUrl