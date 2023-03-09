//get to listen to an event
   window.addEventListener("keydown", keyPressed);


   function keyPressed(s){
    console.log(s)
     const audio = document.querySelector(`audio[data-key='${s.keyCode}']`)
     const key = document.querySelector(`div[data-key='${s.keyCode}']`)
     console.log(audio)
     if (!audio) return;  //stop the function from running all together
     audio.currentTime = 0 
    audio.play()
    console.log(key)

       key.classList.add('plays')

   }



   