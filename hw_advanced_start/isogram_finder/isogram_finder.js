const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    splitSort = function(inWord){
        var lowerCase = inWord.toString().toLowerCase()
        var letters = lowerCase.split('');
        var alphaOrder = letters.sort();
        return alphaOrder.join('');
    }
        var sorted = splitSort(this.word)
        var decision = true
        for(var i=0; i < sorted.length -1; i++){           
            var current = sorted[i];
            var next = sorted[i+1];
            // console.log(`i-1 = [${next}], i = [${current}]`) TESTER LOG
            if(current != next){
                continue;
            } else {
                decision = false
            }           
        }
        return decision
          
            
        
}

module.exports = IsogramFinder;
