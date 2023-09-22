
function repeatHello(callback){
    const interval = setInterval(() => {
     callback("Ciao");
      }, 1000);
    
      setTimeout(() => {
        clearInterval(interval);
      }, 5000);
    }
    
    const callbackCiao = (messaggio) => {
      console.log(messaggio);
    };
    
    repeatHello(callbackCiao);
