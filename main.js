let button=document.getElementsByClassName('myButtonToUp');
button.addEventListener('click',()=>{
 button.getAttribute("href").innerText="./index.html";
 


})
document.querySelector(".image1").addEventListener('click',()=>{
document.querySelector(".nameProgramme1").style.visibility = "hidden";



})

document.getElementsByClassName('letter-image').addEventListener('mouseover',()=>{
  document.getElementsByClassName('myEmail').style.color="red";

})
document.getElementsByClassName('hoverMenue').addEventListener('mouseover',()=>{
    document.getElementsByClassName('hoverMenue').classList = "nav-link active text-white opacity-50 hoverMenue" ; 
})

// 
(function(){
  var addEvent = function(object, type, callback) {
      if (object == null || typeof(object) == 'undefined') return;
      if (object.addEventListener) {
          object.addEventListener(type, callback, false);
      } else if (object.attachEvent) {
          object.attachEvent("on" + type, callback);
      } else {
          object["on"+type] = callback;
      }
  };
  function detectMouseMove() {
    // Initial container width
    var containerWidth = $('.container').outerWidth();
    document.addEventListener('mousemove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });

    })
  }
  detectMouseMove();
  
  
  function detectTouch() {
    // Initial container width
    var containerWidth = $('.container').outerWidth();
    document.addEventListener('mousemove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });
    })
  }
  detectMouseMove();
  
  function touchMove(){
    // Initial container width
    var containerWidth = $('.container').outerWidth();
    document.addEventListener('touchmove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });

    })
  }
  
  touchMove();
  
  function detectInput(inputType){
    // Detect container width after resizing
    addEvent(window, "resize", function(event) {
      var containerWidth = $('.container').outerWidth();
      $(document).bind(inputType, function(e){
        $('.hover').css({
           left:  e.pageX
        });
        $('.left-side').css({
          left: e.pageX + 75
        });
        var rightSideLeft = containerWidth - e.pageX;
        $('.right-side').css({
          right: rightSideLeft
        });
      });
    });
  }
  
  detectInput('mousemove');
  detectInput('touchmove');
  
});


