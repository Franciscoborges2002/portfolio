/*
 * GET the language that the user uses
*/
addEventListener("load", (event) => {
    //check if there is something in localstorage
    if(localStorage.getItem("language") === null){
        localStorage.setItem("language", navigator.language.slice(0,2));
    }else{//User already has a language in localstorage

    }
});