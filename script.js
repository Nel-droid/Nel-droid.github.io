const canvas=document.getElementById("matrixCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const chars="01";
const fontSize=16;

const columns=canvas.width/fontSize;

const drops=Array(Math.floor(columns)).fill(1);

function draw(){

ctx.fillStyle="rgba(5,5,5,0.1)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00f3ff";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars.charAt(Math.floor(Math.random()*chars.length));

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}

drops[i]++;

}

}

setInterval(draw,50);



const textEl=document.querySelector(".typing-text");

const words=[
"RED TEAM ANALYST",
"OFFENSIVE SECURITY STUDENT",
"ENGLISH LANGUAGE EXPERT"
];

let w=0;
let c=0;
let del=false;

function type(){

const word=words[w];

textEl.textContent=del?word.substring(0,c--):word.substring(0,c++);

if(!del && c>word.length){

del=true;
setTimeout(type,2000);

}

else if(del && c<0){

del=false;
w=(w+1)%words.length;
setTimeout(type,500);

}

else{

setTimeout(type,del?50:100);

}

}

type();
