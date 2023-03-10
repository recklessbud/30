//get to listen to an event
   window.addEventListener("keydown", keyPressed);

//the function for the event listener
   function keyPressed(s){
    console.log(s)
     const audio = document.querySelector(`audio[data-key='${s.keyCode}']`)//getting the audio from the dom
     const key = document.querySelector(`div[data-key='${s.keyCode}']`)//getting all the divs from the dom
    //  console.log(audio)
     if (!audio) return;  //stop the function from running all together
     audio.currentTime = 0 
    audio.play()
    // console.log(key)

       key.classList.add('plays')
      
   }
 // adding the transition end event

 const allKeys = document.querySelectorAll('.key')

        allKeys.forEach(k => k.addEventListener('transitionend', moveTransition))

        function moveTransition(ms) {
       if (ms.propertyName !==  'transform') {
          return
       }
     console.log(ms.propertyName)
            this.classList.remove('plays')
            
        }
   