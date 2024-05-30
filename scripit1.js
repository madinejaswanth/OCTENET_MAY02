
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});


function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === "") {
        alert("Please enter a task!");
    } else {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputValue));
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";
    }
}
