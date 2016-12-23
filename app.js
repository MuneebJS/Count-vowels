// Count Vowels - Enter a string and the program counts the number of vowels 
// in the text. For added complexity have it report a sum of each vowel found
var prm = prompt("Enter a text");
var vowels = ['a', 'e', "i", 'o', 'u'];
var each_vowel = [];
var vowels_count = 0;
var a = 0;
var e = 0;
var i_vowel = 0;
var o = 0;
var u = 0;
var consonants = 0;
function count_vowels() {
    var i;
    var j;
    for (i = 0; i < prm.length; i++) {
        for (j = 0; j <= 4; j++) {
            if (prm.charAt(i) == vowels[j]) {
                vowels_count++;
                each_vowel.push(prm.charAt(i));
            }
        }
    }
    console.log(vowels_count);
    console.log(each_vowel);
}
function each_vowels_counter_fun() {
    for (counter = 0; counter < each_vowel.length; counter++) {
        if(each_vowel[counter] == 'a') {
            a++;
        }
        else if(each_vowel[counter] == 'e') {
            e++;
        }
        else if(each_vowel[counter] == 'i') {
            i_vowel++;
        }
        else if(each_vowel[counter] == 'o') {
            o++;
   ;     }
        else {
            u++;
        }
    }
    console.log(a+e+i_vowel+o+u)
}
count_vowels();
each_vowels_counter_fun();
console.log('a = '+ a + ' e = ' + e + ' i = ' + i_vowel + ' o = ' + o + ' u ' + u);