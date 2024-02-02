let allProjects = document.querySelectorAll(".project");
let allBgHovers = document.querySelectorAll(".bg-hover");
let techStackIcon = document.querySelector(".tech-stack-icon");
let allTechStackCont = document.querySelectorAll(".tech-stack-cont");

for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].addEventListener("mouseenter", e => {
        if (!allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.add("bg-animation-in");
        if (allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.remove("bg-animation-out");
    })
    allProjects[i].addEventListener("mouseleave", e => {
        if (allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.remove("bg-animation-in");
        if (!allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.add("bg-animation-out");
    })
}
for (let i = 0; i < allTechStackCont.length; i++) {
    let icons = allTechStackCont[i].querySelectorAll(".icon");
    allTechStackCont[i].addEventListener("mouseenter", e => {
        icons.forEach(icon => {
            if (icon.classList.contains("icon-pop-in")) icon.classList.remove("icon-pop-in");
            if (!icon.classList.contains("icon-pop-out")) icon.classList.add("icon-pop-out");
        })
        if (allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.remove("icon-list-pop-in");
        if (!allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.add("icon-list-pop-out");
    })
    allTechStackCont[i].addEventListener("mouseleave", e => {
        icons.forEach(icon => {
            if (!icon.classList.contains("icon-pop-in")) icon.classList.add("icon-pop-in");
            if (icon.classList.contains("icon-pop-out")) icon.classList.remove("icon-pop-out");
        })
        if (!allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.add("icon-list-pop-in");
        if (allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.remove("icon-list-pop-out");
    })
}

let gitProjectLinks = ["https://github.com/kamdev66/AlgoBaba-Sheets", "https://github.com/kamdev66/AlgoBaba-SketchBoard", "https://github.com/kamdev66/AlgoBaba-eShop", "https://github.com/kamdev66/AlgoBaba-eShop", "https://github.com/kamdev66/creatrsume", "https://github.com/kamdev66/suggesto", "https://github.com/kamdev66/rapidtypoclub"];
let liveProjectLinks = ["https://65bbba8c5fab8b216a39a001--magical-daffodil-c8d26a.netlify.app/", "https://65bbba8c5fab8b216a39a001--magical-daffodil-c8d26a.netlify.app/", "https://65bbba8c5fab8b216a39a001--magical-daffodil-c8d26a.netlify.app/", "https://65bbba8c5fab8b216a39a001--magical-daffodil-c8d26a.netlify.app/", "https://65bbba8c5fab8b216a39a001--magical-daffodil-c8d26a.netlify.app/", "https://coruscating-kleicha-4a072e.netlify.app/","https://master--fluffy-narwhal-1fc06a.netlify.app/"];
let allContactLinks = ["https://github.com/kamdev66", "https://www.linkedin.com/in/kamdev66/", "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kamdevkumar666@gmail.com", "https://drive.google.com/file/d/kamdev-kumar/view?usp=sharing"];

let allGitIcons = document.querySelectorAll(".git-icon");
let allLiveIcons = document.querySelectorAll(".live-icon");
let allContactIcons = document.querySelectorAll(".contact-icon");

allGitIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = gitProjectLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})

allLiveIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = liveProjectLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})

allContactIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = allContactLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})