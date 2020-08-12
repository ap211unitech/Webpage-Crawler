let links = document.links;
let fetchbtn = document.getElementById("fetchbtn");
let list = document.getElementById("fetchlist");

fetchbtn.addEventListener("click", () => {
    list.innerHTML = "";
    Array.from(links).forEach(elm => {
        elm.style.color = "purple";
    })
    let inputval = document.getElementById("fetch").value;
    document.getElementById("fetch").value = "";
    Array.from(links).forEach(element => {
        if (element.innerText.includes(inputval) && inputval != "") {
            console.log(inputval)
            element.style.color = "red";
            list.innerHTML += `<li><a href=${element.href}>${element.innerText}</a></li>`;
            console.log(list)
        }
    });
});

