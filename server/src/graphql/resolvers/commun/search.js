import stringSimilarity from 'string-similarity'

function stringSimilar(s1, s2){
    return s1.startsWith(s2) 
        || s2.startsWith(s1)
        || s1.endsWith(s2) 
        || s2.endsWith(s1)
        || stringSimilarity.compareTwoStrings(s1, s2) > 0.8
}

function searchIn(array, text){
    const textNormalize = normalizeString(text)
    let res = []
    if(array){
        res = array.filter(objet => objet.name && stringSimilar(normalizeString(objet.name), textNormalize))
    }
    return res
}

function normalizeString(s){
    return s.toUpperCase()
}

export {searchIn}