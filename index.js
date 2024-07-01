function findMatching(array, string){
    const string1 = string.toUpperCase()
    return array.filter(str => str.toUpperCase() === string1)
}
function fuzzyMatch(array, string){
    return array.filter(str => str.startsWith(string))
}
function matchName(array, string){
    return array.filter(obj => obj.name === string)
}