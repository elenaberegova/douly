function render(text){

let html=text

.replace(/^# (.*)$/gm,"<h1>$1</h1>")

.replace(/^## (.*)$/gm,"<h2>$1</h2>")

.replace(/^### (.*)$/gm,"<h3>$1</h3>")

.replace(/^- (.*)$/gm,"<li>$1</li>")

.replace(/\n/g,"<br>");

preview.innerHTML=html;

}
