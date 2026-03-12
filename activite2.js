const answers={

q13:"Réponse libre : le cyberharcèlement correspond à des insultes ou attaques répétées en ligne.",

q14:"Réponse attendue : Une forme de violence en ligne.",

q15:"Réponse attendue : Méchants.",

q16:"Réponse attendue : Sur Internet.",

q17:"Réponse attendue : Faux.",

q18:"Réponse possible : triste, stressée, isolée.",

q19:"Réponse attendue : Parce qu’il peut continuer jour et nuit.",

q20:"Réponse possible : certaines personnes se sentent protégées derrière un écran.",

q21:"Réponse possible : sensibiliser au cyberharcèlement et encourager à aider les victimes.",

q22:"Réponse possible : parler à un adulte, signaler les messages, bloquer les harceleurs.",

q23:"Réponse possible : soutenir la personne, l’écouter et signaler les messages.",

q24:"Réponse personnelle : moment marquant de la vidéo.",

q25:"Réponse personnelle : exemples de cyberharcèlement.",

q26:"Réponse possible : anonymat, effet de groupe, manque d’empathie.",

"production-orale":"Exemple : Il est important de protéger les victimes. On peut parler à un adulte, signaler les messages et soutenir la personne."

};



document.querySelectorAll(".btn-validate").forEach(btn=>{

btn.addEventListener("click",()=>{

const section=btn.dataset.section;

const secElem=document.getElementById(section);

secElem.querySelectorAll(".explanation").forEach(exp=>{

const id=exp.id.replace("exp-","");

if(answers[id]){

exp.textContent=answers[id];

}

});

updateProgress();

});

});



function updateProgress(){

const sections=document.querySelectorAll(".quiz-section");

let done=0;

sections.forEach(sec=>{

const exp=sec.querySelector(".explanation");

if(exp && exp.textContent.length>0){

done++;

}

});

const pct=(done/sections.length)*100;

document.getElementById("progress-bar").style.width=pct+"%";

}



/* ENREGISTREUR AUDIO */

let mediaRecorder;

let audioChunks=[];

const startBtn=document.getElementById("startRecord");

const stopBtn=document.getElementById("stopRecord");

const audioPlayback=document.getElementById("audioPlayback");

const status=document.querySelector(".record-status");

if(startBtn){

startBtn.addEventListener("click",async()=>{

const stream=await navigator.mediaDevices.getUserMedia({audio:true});

mediaRecorder=new MediaRecorder(stream);

mediaRecorder.start();

status.textContent="Statut : enregistrement en cours";

audioChunks=[];

mediaRecorder.addEventListener("dataavailable",event=>{

audioChunks.push(event.data);

});

mediaRecorder.addEventListener("stop",()=>{

const audioBlob=new Blob(audioChunks);

const audioURL=URL.createObjectURL(audioBlob);

audioPlayback.src=audioURL;

status.textContent="Statut : enregistrement terminé";

});

startBtn.disabled=true;

stopBtn.disabled=false;

});

stopBtn.addEventListener("click",()=>{

mediaRecorder.stop();

startBtn.disabled=false;

stopBtn.disabled=true;

});

}