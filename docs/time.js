window.onload = () => {
   h = 0;
   m = 0;
   s = 0;
   timeStarted = 0;

   time = document.getElementById("time");
   btnStart = document.getElementById("btn-start");
   btnStop = document.getElementById("btn-stop");
   btnReset = document.getElementById("btn-reset");
   btnStart.addEventListener("click", start);
   btnStop.addEventListener("click", stop);
   btnReset.addEventListener("click", reset);

   // Modal
   allTimer = document.getElementById("Timer");
   modal = document.getElementById("modal");
   btnYes= document.getElementById("btn-yes");
   btnNot = document.getElementById("btn-not");
   btnYes.addEventListener("click", continued);
   btnNot.addEventListener("click", cancel);
   music = new Audio('./musical023.mp3');
   music.loop = true;


   // modal.classList.remove("hidden")
   // allTimer.classList.add("hidden")
};




function write() {
   let ht, mt, st;
   s++;

   if (s > 59) {
      m++;
      s = 0;
   }
   if (m > 59) {
      h++;
      m = 0;
   }
   if (h > 24) h = 0;

   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);
   
   document.title = `${ht}:${mt}:${st} - Cronometro`;
   theTime = `${ht}:${mt}:${st}`;

   time.innerHTML = theTime

   actions(theTime)

}

function start() {
   write();
   timeStarted = setInterval(write, 1000);
   btnStart.removeEventListener("click", start);
}

function stop() {
   clearInterval(timeStarted);
   btnStart.addEventListener("click", start);
}

function reset() {
   clearInterval(timeStarted);
   time.innerHTML = "00:00:00";
   h = 0;
   m = 0;
   s = 0;
   btnStart.addEventListener("click", start);
   resetAudio(music);
}

function actions(time) {
   if( time == "00:05:00") question();
   if( time == "01:00:00") question2();
}

function question2() {
   reproducirInJs();
   stop();
}

function question(){
   reproducirInJs();
   stop();
   allTimer.classList.add("hidden");
   modal.classList.remove("hidden");
   content= document.getElementById("content");
   content.addEventListener("click", cancel);
}

function resetAudio(audio){
   audio.pause();
   audio.currentTime = 0;
}

function reproducirInJs(){
   const btnPlay =  document.getElementById("btn-reproducir");
   btnPlay.click();
}

function reproducir(){
   music.play();
}

function continued(){
   modal.classList.add("hidden");
   allTimer.classList.remove("hidden");
   start();
   resetAudio(music);
   content.removeEventListener("click",cancel);
}

function cancel(){
   modal.classList.add("hidden");
   allTimer.classList.remove("hidden");
   reset();
   resetAudio(music);
   content.removeEventListener("click",cancel);
}