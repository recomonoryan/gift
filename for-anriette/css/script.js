$(function(){
  var imgChild1 = "";
  var prevElem1 = "";
  var nextElem1 = "";
  var a = 0;

  var imgChild2 = "";
  var prevElem2 = "";
  var nextElem2 = "";
  var b = 0;

  var imgChild3 = "";
  var prevElem3 = "";
  var nextElem3 = "";
  var c = 0;

  var imgChild4 = "";
  var prevElem4 = "";
  var nextElem4 = "";
  var d = 0;
  
  document.querySelector(".tap-word").addEventListener("click", function(event){
     var isVolumeOn = true;
     var music = document.getElementById("music");
     music.volume = 0.80;
     music.loop = true;
     music.play();
     $("#volume").click(function(){
        if(isVolumeOn){
          $(this).removeClass("fa-volume-up");
          $(this).addClass("fa-volume-off");
          isVolumeOn = false;
          music.pause();

        }
        else{
          $(this).removeClass("fa-volume-off");
          $(this).addClass("fa-volume-up");
          isVolumeOn = true;
          music.play();

        }
     });
     $("#intro").fadeOut(400, function(){
        $(".main-content").show();
        $("#volume").fadeIn();
        imgChild1 = $("#inner-1 .slide-show:nth-child(1)");
        imgChild1.fadeIn("slow");
        prevElem1 = imgChild1;
        a++;

        imgChild2 = $("#inner-2 .slide-show:nth-child(1)");
        imgChild2.fadeIn("slow");
        prevElem2 = imgChild2;
        b++;

        imgChild3 = $("#inner-3 .slide-show:nth-child(1)");
        imgChild3.fadeIn("slow");
        prevElem3 = imgChild3;
        c++;

        imgChild4 = $("#inner-4 .slide-show:nth-child(1)");
        imgChild4.fadeIn("slow");
        prevElem4 = imgChild4;
        d++;
     });
     $("#intro").html("");
     setInterval(function(){
      prevElem1.fadeOut(400, function(){
        if(a === 4){
          nextElem1 = $("#inner-1 .slide-show:nth-child(1)");
          a = 1;
        }
        else
        {
          nextElem1 = prevElem1.next();
        }
        nextElem1.fadeIn();
        prevElem1 = nextElem1;
        a++
      });
    }, 15000);

    setInterval(function(){
      prevElem2.fadeOut(400, function(){
        if(b === 7){
          nextElem2 = $("#inner-2 .slide-show:nth-child(1)");
          b = 1;
        }
        else{
          nextElem2 = prevElem2.next();
        }
        nextElem2.fadeIn();
        prevElem2 = nextElem2;
        b++;
      });
    }, 15500);

    setInterval(function(){
      prevElem3.fadeOut(400, function(){
        if(c === 4){
          nextElem3 = $("#inner-3 .slide-show:nth-child(1)");
          c = 1;
        }
        else{
          nextElem3 = prevElem3.next();
        }
        nextElem3.fadeIn();
        prevElem3 = nextElem3;
        c++;
      });
    }, 16000);

    setInterval(function(){
      prevElem4.fadeOut(400, function(){
        if(d === 4){
          nextElem4 = $("#inner-4 .slide-show:nth-child(1)");
          d = 1;
        }
        else{
          nextElem4 = prevElem4.next();
        }
        nextElem4.fadeIn();
        prevElem4 = nextElem4;
        d++;
      });
    }, 16500);
  });
});