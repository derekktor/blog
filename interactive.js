// let acc = document.getElementsByClassName("acc");

// acc[0].innerHTML = "red";

// for (var i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

function theme() {
    let body = document.getElementsByTagName("body")[0];

    body.classList.toggle("lighter");
}