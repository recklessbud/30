const secHand = document.querySelector('.second')
const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.min')

function allDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secDeg = ((seconds / 60) * 360) + 90
    // console.log(seconds)
    secHand.style.transform = `rotate(${secDeg}deg)`
   // for minutes
    const minutes =  now.getMinutes()
     const minDeg = ((minutes / 60) * 360 )+ 90
    //  console.log(minutes)
    minHand.style.transform = `rotate(${minDeg}deg)`
//  for hours
   const hours = now.getHours()
    const hoursDeg = ((hours / 60) * 360) + 90
      hourHand.style.transform = `rotate(${hoursDeg}deg)`
    //   console.log(hours)
   



}

setInterval(allDate, 1000)