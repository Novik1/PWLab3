"use strict";

// ADD YOUR CODE HERE

var listid = 1;
var checkid = 1;

function addLi()
            {
				var txtVal = document.getElementById('txtVal').value;
				var txtNode = document.createTextNode(txtVal);
				var priority = document.getElementById("priority");
				var strpriority = priority.options[priority.selectedIndex].text;
				var prNode = document.createTextNode(strpriority);
				var img = document.getElementById('output');
				
				var ul = document.getElementById("list1");
				var newLi = document.createElement("li");
				newLi.id = "li" + listid;
				var textbox = document.createElement("label");
				textbox.className = "lilabel";
				var check = document.createElement("input");
				check.type = "checkbox";
				check.id = checkid;
				check.addEventListener("click", function(){moveLi(check.id);});
				var btn = document.createElement("button");
				var btnvalue = document.createTextNode("-");
				btn.appendChild(btnvalue);
				btn.addEventListener("click", function(){removeLi(check.id);});
				var textpar = document.createElement("p");
				var prioritypar = document.createElement("p");
				prioritypar.classList.add("priority");
				
				
				prioritypar.appendChild(prNode);
				textpar.appendChild(txtNode);
				textbox.appendChild(check);
				textbox.appendChild(textpar);
				newLi.appendChild(textbox);
				if (img.src != "" ){
					var newimg = document.createElement("img");
					newimg.src = img.src;
					newimg.className = "savedimg";
					newLi.appendChild(newimg);
					document.getElementById('output').removeAttribute('src');
				}
				newLi.appendChild(prioritypar);
				newLi.appendChild(btn);
				ul.appendChild(newLi);
				listid++;
				checkid++;
            }
			
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function moveLi(id){
	
	var checkBox = document.getElementById(id);
	var listitem = document.getElementById("li" + id)
	
	if (checkBox.checked == true){
		var ul = document.getElementById("list2");
		ul.appendChild(listitem);
	} else if (checkBox.checked == false){
		var ul = document.getElementById("list1");
		ul.appendChild(listitem);
	}
}

function removeLi(id){
	
	var checkBox = document.getElementById(id);
	var listitem = document.getElementById("li" + id)
	
	if (checkBox.checked == true){
		var ul = document.getElementById("list2");
		ul.removeChild(listitem);
	} else if (checkBox.checked == false){
		var ul = document.getElementById("list1");
		ul.removeChild(listitem);
	}
}

function filter(){
	
	var i;
	var filter = document.getElementById("filter");
	var strfilter = filter.value;
	
	var ul1 = document.getElementById("list1");
	var ul2 = document.getElementById("list2");
	
	var li1 = ul1.getElementsByClassName("priority");
	var li2 = ul2.getElementsByClassName("priority");
	
	for (i = 0; i < li1.length; i++) {
		var txtValue = li1[i].innerHTML;
		var parentli1 = li1[i].parentNode;
		if (txtValue == strfilter) {
		  parentli1.style.display = "";
		} else if (strfilter == ""){
		  parentli1.style.display = "";
		} else {
		  parentli1.style.display = "none";
		}
	}
	
	for (i = 0; i < li2.length; i++) {
		var txtValue = li2[i].innerHTML;
		var parentli2 = li2[i].parentNode;
		if (txtValue == strfilter) {
		  parentli2.style.display = "";
		} else if (strfilter == ""){
		  parentli2.style.display = "";
		} else {
		  parentli2.style.display = "none";
		}
	}
 }
			


















