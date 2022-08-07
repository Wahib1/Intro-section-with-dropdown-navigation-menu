let featuresLinkEl = document.getElementById("features-link")
let companyLinkEl = document.getElementById("company-link")
let arrowFeaturesEl = document.getElementById("arrow-features")
let arrowCompanyEl = document.getElementById("arrow-company")
let featuresSubmenu = document.getElementsByClassName("features-submenu")[0]
let companySubmenu = document.getElementsByClassName("company-submenu")[0]

featuresLinkEl.addEventListener("click", ()=> {
    arrowFeaturesEl.style.transform = `rotate(${add180InArrowOne()}deg)`
    arrowFeaturesEl.style.transition = "transform 300ms"
    featuresSubmenu.classList.toggle("active-submenus")
})
companyLinkEl.addEventListener("click", ()=> {
    arrowCompanyEl.style.transform = `rotate(${add180InArrowTwo()}deg)`
    arrowCompanyEl.style.transition = "transform 300ms"
    companySubmenu.classList.toggle("active-submenus")
})

let numberForArrow1 = 0
function add180InArrowOne() {
    return numberForArrow1 += 180
}
let numberForArrow2 = 0
function add180InArrowTwo() {
    return numberForArrow2 += 180
}

let menuLogo = document.getElementsByClassName("menu-logo")[0]
let navMainWrapper = document.getElementsByClassName("nav-main-wrapper")[0]
menuLogo.addEventListener("click",()=>{
    navMainWrapper.classList.toggle("active-sideMenu")
})