let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

	if(theme.getAttribute("href") == "style.css"){
		theme.href = "darkmode.css";
	} else{
		theme.href = "style.css";
	}
}




const toggleBtn = document.querySelector(".knopka");
toggleBtn.addEventListener("click",() => toggleBtn.classList.toggle("active"));
toggleBtn.addEventListener("click",() => toggleBtn.classList.toggle("black"));