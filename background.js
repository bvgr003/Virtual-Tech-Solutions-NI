document.addEventListener("scroll", function () {
    const fadeElement = document.body;
    const scrollTop = window.scrollY; 
    const docHeight = document.documentElement.scrollHeight; 
    const winHeight = window.innerHeight; 
    const fadeHeight = docHeight - winHeight; 
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1); 

    fadeElement.style.background = `
        linear-gradient(
            rgba(23, 38, 38, 1) ${fadeProgress * 33}%, /* DarkSlateGray (darker) */
            rgba(64, 64, 64, 1) ${fadeProgress * 33 + 34}%, /* Dark Grey */
            rgba(235, 235, 235, 1) ${fadeProgress * 33 + 67}% /* Light Grey instead of pure white */
        )
    `;
});

