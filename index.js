const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

window.addEventListener('scroll',()=>{

  let navbar = document.getElementById("header");
  console.log("hello")
  
  
  if (window.pageYOffset >= 150) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");
  }
})
