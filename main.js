function fillprogressbar(sec) {
    
    //GETTING THE PROGRESSBAR FROM HTML
    const progressbar = document.querySelector('.progressbar');
    progressbar.style.transition = `${sec}s linear width`;
    progressbar.style.width="100%";
   
   
}