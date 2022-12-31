/* ================== typing animation =================== */
// var typed = new Typed(".typing", {
//     Strings: ["","Web Developer","Poster Designer"],
//     typespeed: 100,
//     Backspeed: 60,
//     loop: true
// })
/* ================== Aside =================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalnavList = navList.length;
for (let i = 0; i < totalnavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalnavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}
