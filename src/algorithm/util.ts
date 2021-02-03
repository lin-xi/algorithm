function step(arr) {
    let dom = document.querySelector(".process");
    let htmls = arr.map(ele => {
        return `<span class="array-item">${ele}</span>`
    });
    dom.innerHTML += `<div class="log">${htmls.join("")}</div>`;
    document.querySelector(".exchange").innerHTML = "交换次数" + document.querySelectorAll(".log").length;
}

export { step };