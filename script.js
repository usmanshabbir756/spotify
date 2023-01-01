console.log("welcome to spotify");
let songIndex=1;
let audioElement=new Audio("songs/1.mp3");
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem =Array.from(document.getElementsByClassName("songItem"));

let song=[
    {songname:"Aisa Banna sanwarna", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname:"Dhadkan - Dulha ka sahra ", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"Dil Pe Zakham ", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname:"Khooni Akhian ", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname:"Na Chero Hame ", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname:"Na Rukte Hain Ansoo ", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname:"Saadgi To Hamari", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songname:"Sochta Hoon Ke Wo ", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songname:"Ye Jo Halka Halka ", filepath:"songs/9.mp3", coverpath:"covers/5.jpg"},
    {songname:"Kali kali zulfon ", filepath:"songs/10.mp3", coverpath:"covers/2.jpg"}
];
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songN")[0].innerHTML=song[i].songname;
});

masterplay.addEventListener("click", ()=> {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
        makeAllPlay();
    }
});

audioElement.addEventListener("timeupdate" , ()=> {
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener("change" , () => {
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});

Array.from(document.getElementsByClassName("songchange")).forEach(element => {
    element.addEventListener("click",()=>{
        if(songIndex==element.id){
            if(audioElement.paused || audioElement.currentTime <=0){
                songIndex=parseInt(element.id);
                makeAllPlay();
                element.classList.remove("fa-play");
                element.classList.add("fa-pause");
                audioElement.src=`songs/${songIndex}.mp3`;
                document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
                audioElement.play();
                gif.style.opacity = 1;
                masterplay.classList.remove("fa-play");
                masterplay.classList.add("fa-pause");
            }
            else{
                audioElement.pause();
            masterplay.classList.remove("fa-pause");
            masterplay.classList.add("fa-play");
            gif.style.opacity = 0;
            makeAllPlay();
            }
        }
        else{
            songIndex=parseInt(element.id);
            makeAllPlay();
            element.classList.remove("fa-play");
            element.classList.add("fa-pause");
            audioElement.src=`songs/${songIndex}.mp3`;
            document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
        }
        
        

    })

});
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songchange")).forEach(element=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
        makeAllPlay();
    }
    }
  });

  document.getElementById("next").addEventListener("click",()=>{
    console.log(songIndex);
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
        document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
  });
  document.getElementById("previous").addEventListener("click",()=>{
    console.log(songIndex);
    if(songIndex<=1){
        songIndex=10;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
        document.getElementById("masterSongName").innerText=song[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
  });