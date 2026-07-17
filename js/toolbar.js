document

.getElementById(

"sample"

)

.onclick=()=>{

editor.value=SAMPLE;

save(SAMPLE);

render(SAMPLE);

};

document

.getElementById(

"clear"

)

.onclick=()=>{

editor.value="";

save("");

render("");

};
