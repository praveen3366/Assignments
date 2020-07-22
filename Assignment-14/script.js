

function Message() {
    var a = document.getElementById("txt");
    setTimeout(function(){ a.value="10.. " }, 1000);
    setTimeout(function(){ a.value="9.. " }, 2000);
    setTimeout(function(){ a.value="8.. " }, 3000);
    setTimeout(function(){ a.value="7.. " }, 4000);
    setTimeout(function(){ a.value="6.. " }, 5000);
    setTimeout(function(){ a.value="5.. " }, 6000);
    setTimeout(function(){ a.value="4.. " }, 7000);
    setTimeout(function(){ a.value="3.. " }, 8000);
    setTimeout(function(){ a.value="2.. " }, 9000);
    setTimeout(function(){ a.value="1.." }, 10000);
    setTimeout(function(){ a.value="Happy Sunday!!!" }, 11000);
  }
  Message()