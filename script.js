const expandables = document.querySelectorAll('.project-list');
const numberTags = document.querySelectorAll('.heading-number');
const projectPageImage = document.querySelector('.area.projects .landing-image')
const projectLabels = document.querySelectorAll('.project-details')
const resumePanels = document.querySelectorAll('.resume-capsule')
const resumeLabels = document.querySelectorAll('.resume-description')
const navButtons = document.querySelectorAll('.navigation .nav-btn')
const webPages = document.querySelectorAll('.area')
const skillBtn = document.querySelectorAll('.fw-btn')
const mobileNavToggle = document.querySelector('.toggle-btn')
const mobileNav = document.querySelector('.mobile-view-nav')
const mobileBtns = document.querySelectorAll('.mob-nav')

const removeActivePanels = () => {
    expandables.forEach((panel) => {
        panel.classList.remove('active');
    });
};

const panelCheck = (panelId, anyActive) => {
    projectLabels.forEach((label) => {
        label.classList.remove('project-active')
        if (anyActive) {
            if (label.classList.contains(panelId)) {
                label.classList.add('project-active');
            }
        } else {
            label.classList.remove('project-active');
        }
    });
};



const clearActivePages = () => {
    webPages.forEach((page) => {
        page.classList.remove('active')
    })
}


const removeActiveButton = () => {
    navButtons.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
    mobileBtns.forEach((btn) => {
        btn.classList.remove('active')
    })
}


mobileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        clearActivePages()
        removeActiveButton()

        btn.classList.add('active')

        webPages.forEach((page) => {
            if (page.classList.contains(btn.value)){
                page.classList.add('active')
            }
        })
    })
})

mobileNavToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
    mobileNavToggle.classList.toggle('active')
})

skillBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        clearActivePages()
        removeActiveButton()
        
        webPages.forEach((page)=> {
            if (page.classList.contains('skills')){
                page.classList.add('active')
            }
        })

        navButtons.forEach((btn) => {
            if (btn.id === 'skills')
                btn.classList.add('active-btn')
        })
    })
})


navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        var btnId = btn.id; 

        clearActivePages()
        removeActiveButton()

        btn.classList.toggle('active-btn')
        //toggle the right class 

        webPages.forEach((page) => {
            if (page.classList.contains(btnId)){
                page.classList.add('active')
            }
        })
        
    })
})



// Onclick toggle class slider 
expandables.forEach((panel) => {
    panel.addEventListener('click', () => {
        const isActive = panel.classList.contains('active');
        const panelId = panel.id; 
        
        // Remove 'active' class from all panels
        removeActivePanels();
        // If the clicked panel was not already active, activate it
        if (!isActive) {
            panel.classList.add('active');
        }

        // Check if any panel is active
        let anyActive = Array.from(expandables).some(panel => panel.classList.contains('active'));


        // Update numberTags based on anyActive
        numberTags.forEach((tag) => {
            if (anyActive) {
                tag.classList.add('inactive');
                projectPageImage.classList.add('opacity-mute')
            } else {
                tag.classList.remove('inactive');
                projectPageImage.classList.remove('opacity-mute')
            }
        });
        panelCheck(panelId, anyActive); 
    });
});


//resume drop-down menu 
resumePanels.forEach(panel => {
    panel.addEventListener('click', ()=> {
        const panelId = panel.id; 
        
        //dropdown menu 
        resumeLabels.forEach((label) => {
            if (label.classList.contains(panelId)){
                label.classList.toggle('active')
            }
        })
    })
})