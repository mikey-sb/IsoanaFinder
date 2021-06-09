const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const anagrams = []
    splitSort = function(inWord){
        var lowerCase = inWord.toString().toLowerCase()
        var letters = lowerCase.split('');
        var alphaOrder = letters.sort();
        return alphaOrder.join('');
    }
    if(this.word != otherWords){
    for (var i=0; i < otherWords.length; i++){
        word1 = this.word
        word2 = otherWords[i]
        if(splitSort(word1) == splitSort(word2)){
            anagrams.push(word2)
        }
    }}
    return anagrams
}



module.exports = AnagramFinder;
