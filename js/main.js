function signup() {
		document.getElementById('login').style.display="none";
		document.getElementById('title').innerHTML ='signup Here';
		document.getElementById('signup').style.display="block";
	}

function login() {
		document.getElementById('signup').style.display="none";
		document.getElementById('title').innerHTML ='Login Here';
		document.getElementById('login').style.display="block";
	}

window.onscroll = function() {
	scrollFunction();
	NavStick();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function NavStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}