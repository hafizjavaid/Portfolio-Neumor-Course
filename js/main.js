
(() => {
    const aboutSection = document.querySelector(".about_section");
    const tabContainer = document.querySelector(".about_tabs");

    tabContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab_item") && 
            !e.target.classList.contains("active"))
        {
            const target = e.target.getAttribute("data-target");

            // Toggle Classes in tabs
            tabContainer.querySelector(".active").classList.remove("outer-shadow", 'active');
            e.target.classList.add("outer-shadow", 'active')

            // Toggle Classes in tabs Content

            aboutSection.querySelector(".tab_content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");

        }
    })
})();


// ------------------------ Portfolio Filter + Popup

(() => {
    
    const filterContainer = document.querySelector('.portfolio_filter'),
        itemsContainer = document.querySelector('.portfolio_items'),
        items = document.querySelectorAll(".portfolio_item"),
        popup = document.querySelector(".portfolio_popup"),
        nextBtn = document.querySelector(".pp_next"),
        prevBtn = document.querySelector(".pp_prev"),
        closeBtn = document.querySelector(".pp_close"),
        projectDetails = document.querySelector(".pp_details"),
        projectDetailsBtn = document.querySelector(".pp_project_details_btn");
    
    let itemIndex, slideIndex, screenIndex;

    // Filteration of Projects

    filterContainer.addEventListener('click', e => {
        
        if (e.target.classList.contains('filter_item')
            && !e.target.classList.contains('active')) {
            // console.log('true');

            filterContainer.querySelector(".active").classList.remove("outer-shadow", 'active')
            e.target.classList.add("outer-shadow", 'active')

            
            const target = e.target.getAttribute('data-target');
            // console.log(target);
            items.forEach(item => {
                if (target === item.getAttribute('data-type') || target == '.all') {
                    item.classList.remove('hide');
                    item.classList.add('show');
                }
                else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            })
        }
    });

    // 
    itemsContainer.addEventListener("click", e => {
        
        if (e.target.closest('.portfolio_item_inner'))
        {
            const mainItem = e.target.closest('.portfolio_item_inner').parentElement;

            // Get Index;


            // Methode - 1
             itemIndex = Array.from(mainItem.parentElement.children)
                .indexOf(mainItem);
            //  console.log(itemIndex);

            screenIndex = items[itemIndex].querySelector('.portfolio_item_img img').getAttribute('data-screenshots');
           
            screenIndex = screenIndex.split(',');
            if (screenIndex.length === 1)
            {
                nextBtn.style.display = "none"
                prevBtn.style.display = "none"
            }
            else {
                nextBtn.style.display = "block"
                prevBtn.style.display = "block"
            }
            slideIndex = 0;
            popupToggle();
           
            popSlide();
            popDetails();
        }
    })
    function popupToggle() {
        popup.classList.toggle("open");
        bodyScroll();
    }
    closeBtn.addEventListener("click", function () {
        
        popupToggle();
        if (projectDetails.classList.contains("active"))
        {
             toggleDetails();
       }
       
    })

    function popSlide() {
        const imgSrc = screenIndex[slideIndex];
        // console.log(imgSrc);
        const popImg = document.querySelector(".pp_img");
        popup.querySelector(".pp_loader").classList.add(("active"));

        popImg.src = imgSrc;
        popImg.onload = () => {
            popup.querySelector(".pp_loader").classList.remove("active");

        }

        popup.querySelector(".pp_counter").innerHTML = (slideIndex + 1) + ' of ' + screenIndex.length;
    }

     nextBtn.addEventListener("click", () => {
            // console.log(slideIndex, screenIndex);
      
            if (slideIndex === screenIndex.length - 1)
            {
                slideIndex = 0;
            }
            else
            {
                slideIndex++
         }
         popSlide();
        })
     prevBtn.addEventListener("click", () => {
            // console.log(slideIndex, screenIndex);
      
            if (slideIndex === 0)
            {
                slideIndex = screenIndex.length - 1;
            }
            else
            {
                slideIndex--
         }
         popSlide();
        })

    projectDetailsBtn.addEventListener("click", () => {
        toggleDetails();
    })
    function popDetails() {

        if (!items[itemIndex].querySelector(".portfolio_item_details"))
        {
            projectDetailsBtn.style.display = 'none'
            return;
        }
        projectDetailsBtn.style.display = 'block'

        const details = items[itemIndex].querySelector(".portfolio_item_details").innerHTML;
        popup.querySelector('.pp_project_details').innerHTML = details;

        const title = items[itemIndex].querySelector(".portfolio_item_title").innerHTML;

        popup.querySelector(".pp_title h2").innerHTML = title;
        const type = items[itemIndex].getAttribute("data-type");
        popup.querySelector('.pp_project_cat').innerHTML = type;

    }
    function toggleDetails() {
        
        if (projectDetails.classList.contains("active"))
        {

         projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
             projectDetails.classList.remove("active");
            projectDetails.style.maxHeight = 0 + 'px';
            
        } else
        {
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetails.classList.add("active");
            projectDetails.style.maxHeight = projectDetails.scrollHeight + 'px';
            popup.scrollTo(0, projectDetails.offsetTop);
        }

      }
})();

function bodyScroll() {
    document.body.classList.toggle('stop');
}

// ----------------------- Team SLider

(() => {
    const sliderContainer = document.querySelector(".test_slider_container"),
        slides = document.querySelectorAll(".test_item"),
        slideWidth = sliderContainer.offsetWidth,
        prevBtn = document.querySelector(".test_slider_nav .prev"),
        nextBtn = document.querySelector(".test_slider_nav .next");
    
    let slideIndex = 0;

    slides.forEach(slide => {
        slide.style.width = slideWidth + 'px';
    })
    sliderContainer.style.width = (slideWidth * slides.length) + "px";

    nextBtn.addEventListener("click", () => {
        if (slideIndex === slides.length - 1)
        {
            slideIndex = 0;
        }
        else
        {
            slideIndex++
        }
        console.log(slides);
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + 'px';
    })
    prevBtn.addEventListener("click", () => {
        if (slideIndex === 0)
        {
            slideIndex = slides.length - 1;
        }
        else
        {
            slideIndex--
        }
     
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + 'px';
    })

    
})();

// ______________- Sections
(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => {
        if (!sec.classList.contains("active"))
        {
            sec.classList.add("hide");
        }
    })
})();
// ______________- Sections


// -------------- Navbar
(() => {

    const menuBtn = document.querySelector(".menu_btn"),
        navMenu = document.querySelector(".nav_menu"),
        closeBtn = document.querySelector(".close_btn");
    menuBtn.addEventListener("click", showNav);
    closeBtn.addEventListener("click", hideNav);

    function showNav() {
        navMenu.classList.toggle("open");
        bodyScroll();
    }

    function hideNav() {
        navMenu.classList.remove("open")
        anim();
        bodyScroll();
    }
    function anim() {
        document.querySelector(".fade_out_effect").classList.add("active");
        setTimeout(() => {
            document.querySelector('.fade_out_effect').classList.remove('active');

        }, 300);
    }

    document.addEventListener("click", e => {
        if (e.target.classList.contains('link_item'))
        {
            // console.log(e.target.hash);

            if (e.target.hash !== "")
            {
                e.preventDefault();
                const hash = e.target.hash;

                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.add("hide");

                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow")
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow")
                
                if (navMenu.classList.contains("open"))
                {
                     e.target.classList.add("active", "inner-shadow");
                    e.target.classList.remove("outer-shadow", "hover-in-shadow");

                    hideNav();
                }
               
            }
        }
    })
})();
// -------------- Navbar