function save(text){

localStorage.setItem(

"markdown",

text

);

}

function load(){

return localStorage.getItem(

"markdown"

)||"";

}
