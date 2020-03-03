const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 26, 2018 13:20:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerHTML = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      if (distance <= 0) {
        //clearInterval(x);
        document.getElementById('on').innerText= "ONGOING!!";
        document.getElementById('days').innerHTML = "0";
        document.getElementById('hours').innerHTML = "0";
        document.getElementById('minutes').innerHTML = "0";
        document.getElementById('seconds').innerHTML = "0";
      }

    }, second)