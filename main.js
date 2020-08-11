let links = document.getElementsByTagName("a");
let fetchbtn = document.getElementById("fetchbtn");

fetchbtn.addEventListener("click", () => {
    let inputval = document.getElementById("fetch").value;
    if (inputval) {
        for (const val of links) {
            if (val.innerText.includes(inputval)) {
                val.style.color = "red";
            }
        }
    }
})

