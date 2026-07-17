const editor=

document.getElementById(

"editor"

);

const preview=

document.getElementById(

"preview"

);

editor.value=load();

render(editor.value);

editor.addEventListener(

"input",

()=>{

save(editor.value);

render(editor.value);

}

);
