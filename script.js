

document.addEventListener("DOMContentLoaded", function() {

    //Change the background Img in main-section
    setMainSectionImg();
    


});

setMainSectionImg = () => {
    
    let randomNumber = Math.floor(Math. random() * (5 - 1) + 1);
    let randomImg=`./Images/main-section/main-section-${randomNumber}.jpg`
    let mainSectionElement = document.getElementById("left-article")
    
    mainSectionElement.style.background = `url(${randomImg}) no-repeat center center/cover `

}





