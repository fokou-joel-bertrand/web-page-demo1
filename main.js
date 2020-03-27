var y = screen.availWidth;
var x = screen.availHeight;
//var x = setTimeout(function() { alert(y); }, 2000);

var video1 = document.getElementById('video1');

//document.body.addEventListener('load', function1);
var function1 = ()=>{
 video1.style.height = 'auto';
 video1.style.width = screen.availWidth+'px';
 document.getElementById('div1').style.width='100%';
 document.getElementById('div1').style.height='100%';
}
setTimeout(function1, 0);

$(document).ready(()=>{
 $('.registPage').hide();
  $('#register').on('click', ()=>{
   $('.class3').hide();$('.class4').hide();$('.class5').hide();$('.class6').hide();
   $('.class2').hide();$('.class7').hide();
   $('.registPage').show();
  });
});

var x = ()=>{
    document.getElementById('')
}