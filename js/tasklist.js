var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValue1 = document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
     var s = document.createTextNode(inputValue1);
  li.appendChild(t);
  
  if (inputValue1== 1){
 li.style.backgroundColor = "#8cf458";
 
 
  }
  else if (inputValue1==2){
   li.style.backgroundColor = "#faed52";
    
  }
  else if (inputValue1==3){
     li.style.backgroundColor = "#ff5c5c";
  
  }
 if(inputValue1 <1){
 
  alert("Only numbers between 1-3!!");
  }
   if(inputValue1 >3){
 
  alert("Only numbers between 1-3!!");
  }
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}