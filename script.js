// Create a "close" button
var listItem = document.getElementsByTagName("li");
var i;
for (i = 0; i < listItem.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7 Delete \u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem[i].appendChild(span);
}

// Click on a close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);

// Create a new list item
function myFunc() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You don't type anything!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7 Delete \u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}