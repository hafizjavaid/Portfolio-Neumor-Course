const styleToggler = document.querySelector(".style_toggler");

styleToggler.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle("open");
})


window.addEventListener("scroll", () => {
    if (document.querySelector(".style_switcher").classList.contains("open")) {
        
        document.querySelector(".style_switcher").classList.remove("open")
    }
})

const styles = document.querySelectorAll(".alternate");

function setActiveStyle(color)
{
    styles.forEach(style => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "true")
            
        }
    })
}

const dayNight = document.querySelector('.day_night');

window.addEventListener("load", () => {
    
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
        
    }
})

dayNight.addEventListener("click", () => {
    
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})