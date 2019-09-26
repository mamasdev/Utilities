// // I tried rake and was mising some keywords
// const rake = require('node-rake')
// // also I tried keyword-extractor and was mising some keywords
// var keyword_extractor = require("keyword-extractor");
// // also I tried retext and was miising some keywords
// var retext = require('retext')
// var pos = require('retext-pos')
// var keywords = require('retext-keywords')
// var toString = require('nlcst-to-string')


// I took this from keyword-extractor source code
var stp = {
    stopwords: [
        "a",
        "a's",
        "able",
        "about",
        "above",
        "according",
        "accordingly",
        "across",
        "actually",
        "after",
        "afterwards",
        "again",
        "against",
        "ain't",
        "all",
        "allow",
        "allows",
        "almost",
        "alone",
        "along",
        "already",
        "also",
        "although",
        "always",
        "am",
        "among",
        "amongst",
        "an",
        "and",
        "another",
        "any",
        "anybody",
        "anyhow",
        "anyone",
        "anything",
        "anyway",
        "anyways",
        "anywhere",
        "apart",
        "appear",
        "appreciate",
        "appropriate",
        "are",
        "aren't",
        "around",
        "as",
        "aside",
        "ask",
        "asking",
        "associated",
        "at",
        "available",
        "away",
        "awfully",
        "b",
        "be",
        "became",
        "because",
        "become",
        "becomes",
        "becoming",
        "been",
        "before",
        "beforehand",
        "behind",
        "being",
        "believe",
        "below",
        "beside",
        "besides",
        "best",
        "better",
        "between",
        "beyond",
        "both",
        "brief",
        "but",
        "by",
        "c",
        "c'mon",
        "c's",
        "came",
        "can",
        "can't",
        "cannot",
        "cant",
        "cause",
        "causes",
        "certain",
        "certainly",
        "changes",
        "clearly",
        "co",
        "com",
        "come",
        "comes",
        "concerning",
        "consequently",
        "consider",
        "considering",
        "contain",
        "containing",
        "contains",
        "corresponding",
        "could",
        "couldn't",
        "course",
        "currently",
        "d",
        "definitely",
        "described",
        "despite",
        "did",
        "didn't",
        "different",
        "do",
        "does",
        "doesn't",
        "doing",
        "don't",
        "done",
        "down",
        "downwards",
        "during",
        "e",
        "each",
        "edu",
        "eg",
        "eight",
        "either",
        "else",
        "elsewhere",
        "enough",
        "entirely",
        "especially",
        "et",
        "etc",
        "even",
        "ever",
        "every",
        "everybody",
        "everyone",
        "everything",
        "everywhere",
        "ex",
        "exactly",
        "example",
        "except",
        "f",
        "far",
        "few",
        "fifth",
        "first",
        "five",
        "followed",
        "following",
        "follows",
        "for",
        "former",
        "formerly",
        "forth",
        "four",
        "from",
        "further",
        "furthermore",
        "g",
        "get",
        "gets",
        "getting",
        "given",
        "gives",
        "go",
        "goes",
        "going",
        "gone",
        "got",
        "gotten",
        "greetings",
        "h",
        "had",
        "hadn't",
        "happens",
        "hardly",
        "has",
        "hasn't",
        "have",
        "haven't",
        "having",
        "he",
        "he's",
        "hello",
        "help",
        "hence",
        "her",
        "here",
        "here's",
        "hereafter",
        "hereby",
        "herein",
        "hereupon",
        "hers",
        "herself",
        "hi",
        "him",
        "himself",
        "his",
        "hither",
        "hopefully",
        "how",
        "howbeit",
        "however",
        "i",
        "i'd",
        "i'll",
        "i'm",
        "i've",
        "ie",
        "if",
        "ignored",
        "immediate",
        "in",
        "inasmuch",
        "inc",
        "indeed",
        "indicate",
        "indicated",
        "indicates",
        "inner",
        "insofar",
        "instead",
        "into",
        "inward",
        "is",
        "isn't",
        "it",
        "it'd",
        "it'll",
        "it's",
        "its",
        "itself",
        "j",
        "just",
        "k",
        "keep",
        "keeps",
        "kept",
        "know",
        "knows",
        "known",
        "l",
        "last",
        "lately",
        "later",
        "latter",
        "latterly",
        "least",
        "less",
        "lest",
        "let",
        "let's",
        "like",
        "liked",
        "likely",
        "little",
        "look",
        "looking",
        "looks",
        "ltd",
        "m",
        "mainly",
        "many",
        "may",
        "maybe",
        "me",
        "mean",
        "meanwhile",
        "merely",
        "might",
        "more",
        "moreover",
        "most",
        "mostly",
        "much",
        "must",
        "my",
        "myself",
        "n",
        "name",
        "namely",
        "nd",
        "near",
        "nearly",
        "necessary",
        "need",
        "needs",
        "neither",
        "never",
        "nevertheless",
        "new",
        "next",
        "nine",
        "no",
        "nobody",
        "non",
        "none",
        "noone",
        "nor",
        "normally",
        "not",
        "nothing",
        "novel",
        "now",
        "nowhere",
        "o",
        "obviously",
        "of",
        "off",
        "often",
        "oh",
        "ok",
        "okay",
        "old",
        "on",
        "once",
        "one",
        "ones",
        "only",
        "onto",
        "or",
        "other",
        "others",
        "otherwise",
        "ought",
        "our",
        "ours",
        "ourselves",
        "out",
        "outside",
        "over",
        "overall",
        "own",
        "p",
        "particular",
        "particularly",
        "per",
        "perhaps",
        "placed",
        "please",
        "plus",
        "possible",
        "presumably",
        "probably",
        "provides",
        "q",
        "que",
        "quite",
        "qv",
        "r",
        "rather",
        "rd",
        "re",
        "really",
        "reasonably",
        "regarding",
        "regardless",
        "regards",
        "relatively",
        "respectively",
        "right",
        "s",
        "said",
        "same",
        "saw",
        "say",
        "saying",
        "says",
        "second",
        "secondly",
        "see",
        "seeing",
        "seem",
        "seemed",
        "seeming",
        "seems",
        "seen",
        "self",
        "selves",
        "sensible",
        "sent",
        "serious",
        "seriously",
        "seven",
        "several",
        "shall",
        "she",
        "should",
        "shouldn't",
        "since",
        "six",
        "so",
        "some",
        "somebody",
        "somehow",
        "someone",
        "something",
        "sometime",
        "sometimes",
        "somewhat",
        "somewhere",
        "soon",
        "sorry",
        "specified",
        "specify",
        "specifying",
        "still",
        "sub",
        "such",
        "sup",
        "sure",
        "t",
        "t's",
        "take",
        "taken",
        "tell",
        "tends",
        "th",
        "than",
        "thank",
        "thanks",
        "thanx",
        "that",
        "that's",
        "thats",
        "the",
        "their",
        "theirs",
        "them",
        "themselves",
        "then",
        "thence",
        "there",
        "there's",
        "thereafter",
        "thereby",
        "therefore",
        "therein",
        "theres",
        "thereupon",
        "these",
        "they",
        "they'd",
        "they'll",
        "they're",
        "they've",
        "think",
        "third",
        "this",
        "thorough",
        "thoroughly",
        "those",
        "though",
        "three",
        "through",
        "throughout",
        "thru",
        "thus",
        "to",
        "together",
        "too",
        "took",
        "toward",
        "towards",
        "tried",
        "tries",
        "truly",
        "try",
        "trying",
        "twice",
        "two",
        "u",
        "un",
        "under",
        "unfortunately",
        "unless",
        "unlikely",
        "until",
        "unto",
        "up",
        "upon",
        "us",
        "use",
        "used",
        "useful",
        "uses",
        "using",
        "usually",
        "uucp",
        "v",
        "value",
        "various",
        "very",
        "via",
        "viz",
        "vs",
        "w",
        "want",
        "wants",
        "was",
        "wasn't",
        "way",
        "we",
        "we'd",
        "we'll",
        "we're",
        "we've",
        "welcome",
        "well",
        "went",
        "were",
        "weren't",
        "what",
        "what's",
        "whatever",
        "when",
        "whence",
        "whenever",
        "where",
        "where's",
        "whereafter",
        "whereas",
        "whereby",
        "wherein",
        "whereupon",
        "wherever",
        "whether",
        "which",
        "while",
        "whither",
        "who",
        "who's",
        "whoever",
        "whole",
        "whom",
        "whose",
        "why",
        "will",
        "willing",
        "wish",
        "with",
        "within",
        "without",
        "won't",
        "wonder",
        "would",
        "would",
        "wouldn't",
        "x",
        "y",
        "yes",
        "yet",
        "you",
        "you'd",
        "you'll",
        "you're",
        "you've",
        "your",
        "yours",
        "yourself",
        "yourselves",
        "z",
        "zero"
    ]
}

//Then built my own keyword extractor who calculate occurencies too


function DevidePhrase(Phrase, Max) {
    var result = []


    var PhrArr = Phrase.split(" ")


    for (var g = 0; g < PhrArr.length; g++) {

        if (Max != undefined && g == Max + 1) break

        if (g == 5) break


        for (var i = 0; i < PhrArr.length - g; i++) {




            if (PhrArr[i] != "" && stp.stopwords.findIndex(stpWrd => stpWrd == PhrArr[i].toLowerCase().trim()) == -1) {


                var chunkPhrase = []
                chunkPhrase.push(PhrArr[i])
                for (var k = i + 1; k < i + g + 1; k++) {
                    chunkPhrase.push(PhrArr[k])
                }

                result.push(chunkPhrase.join(" ").toLowerCase().trim())
            }
        }
    }
    return result
}


var GenerateKeywordsReText = async (txt) => {

    var Gen = []
    var txtArr = txt.split("\n")

    var txtToLookIn = txt.replace(/[^a-zA-Z ]/g, " ").replace(/  +/g, ' ')


    for (var i = 0; i < txtArr.length; i++) {
        var scanning = txtArr[i].replace(/[^a-zA-Z ]/g, " ").replace(/  +/g, ' ')

        //     console.log("Keywords in " + scanning)

        //    var Gnr = await GenerateKeywordsReTextPromise(scanning)
        //     console.log(Gnr)
        //     console.log("--------------------------------" )

        var kwds = DevidePhrase(scanning)

        Gen = Gen.concat(kwds)
        // Gnr.RspKwds.forEach(e => {
        //     Gen.push(e.toLowerCase())

        // })
        // Gnr.RspPhrases.forEach(e => {
        //     Gen.push(e.toLowerCase())
        //     var chunks = DevidePhrase(e.toLowerCase())
        //     chunks.forEach(chnk=>{
        //         Gen.push(chnk)
        //     })

        // })




    }

    Gen = CalculateOccurencies(Gen)
    
    console.log("CalculateOccurencies")
  


    removeNumbersLowerThan(1,Gen)

   

    var all = []

    for (var idx = 0; idx < Object.keys(Gen).length; idx++) {


        var kwReg=Object.keys(Gen)[idx]
        var count =  Gen[Object.keys(Gen)[idx]];
        
            for (var i = 0; i < count; i++) {
                all.push(kwReg.toLowerCase())
            }
        

    }


    return all
}

function CalculateOccurencies(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}
function removeNumbersLowerThan(num, obj) {
    for (var property in obj) {
        if (obj[property] <= num) {
            delete obj[property];
        }
    }
}

// easy to use
/*
var GenerateKeywords = require("./GenerateKeywords.js")
GenerateKeywords("myMultiLineText")
*/

//Not Using this anymore
var GenerateKeywordsReTextPromise = function (txt) {

    return new Promise(function (resolve, reject) {

        retext()
            .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
            .use(keywords)
            .process(txt, (err, file) => {
                if (err) {
                    reject(err)
                }

                var RspKwds = []
                file.data.keywords.forEach(function (keyword) {
                    RspKwds.push(toString(keyword.matches[0].node))
                })

                var RspPhrases = []
                file.data.keyphrases.forEach(function (phrase) {
                    RspPhrases.push(phrase.matches[0].nodes.map(stringify).join(''))

                    function stringify(value) {
                        return toString(value)
                    }
                })

                resolve({
                    RspKwds: RspKwds,
                    RspPhrases: RspPhrases
                })


            })
    })
}
//Not Using this anymore
var GenerateKeywordsRake = (txt) => {


    var gen = rake.generate(txt)
    console.log(gen)
    return gen;

}


//Not Using this anymore
var GenerateKeywordsExtractor = (txt) => {
    var Gen = []

    var txtArr = txt.split("\n")

    for (var i = 0; i < txtArr.length; i++) {



        var ans = keyword_extractor.extract(txtArr[i], {
            language: "english",
            remove_digits: true,
            return_changed_case: true,
            remove_duplicates: false,
            return_chained_words: true
        });

        ans.forEach(e => {

            if (e.split(" ").length > 5) {
                var spl = keyword_extractor.extract(e, {
                    language: "english",
                    remove_digits: true,
                    return_changed_case: true,
                    remove_duplicates: false,
                    return_chained_words: false
                });


                Gen = Gen.concat(spl)
            }
        })
        Gen = Gen.concat(ans)


    }

    return Gen

}


module.exports = GenerateKeywordsReText