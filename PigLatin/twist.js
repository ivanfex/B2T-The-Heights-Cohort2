var word = prompt("Let's speak some pig latin! Give a me word!");

if (word.charAt(0) == ("a") || word.charAt(0) == ("e") || word.charAt(0) == ("i") || word.charAt(0) == ("o") || word.charAt(0) == ("u")){
    //Telling the user words can't start with a vowel in order to able to play
    alert("Words can't start with a vowel, try again!");
    location.reload();
} else if (word.charAt(0) == ("A") || word.charAt(0) == ("E") || word.charAt(0) == ("I") || word.charAt(0) == ("O") || word.charAt(0) == ("U")){
    //Telling the user words can't start with a vowel in order to able to play
    alert("Words can't start with a vowel, try again!");
    location.reload();
} else if (word == ""){
    //Not letting the user enter an empty string
    alert("Come on, write something! It will be fun!");
    location.reload();
} else {
    var first = word.charAt(0);
    var rest = word.substr(1,(word.length - 1));
    //Turning all letters to lower case that way the text is not going to look unkFay
    var latin = rest.toLocaleLowerCase() + first.toLowerCase() + "ay";

    //console.log(rest.toLowerCase() + first.toLowerCase() + "ay"); //for testing purposes
    //console.log(latin); //for testing purposes
    document.getElementById("pig").innerHTML = latin;
}
