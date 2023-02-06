const btn = document.querySelector(".btn");

function changeIcon() {
    const beforeActive = btn.querySelector(".active");
    const afterActive = btn.querySelector(".hidden");

    beforeActive.classList.remove("active");
    afterActive.classList.remove("hidden");

    beforeActive.classList.add("hidden");
    afterActive.classList.add("active");
    
}

btn.addEventListener("click",() => {
    btn.style.boxShadow = "none";
    changeIcon();
    setTimeout(() => {
        btn.style.boxShadow = "0px 3px 2px #00A4FF";
    }, 80);    
});