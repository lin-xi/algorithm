function step(arr, i: number = -1, j: number = -1) {
    let dom = document.querySelector(".process");
    let htmls = arr.map((ele, idx) => {
        let clas = (idx == i || idx == j) ? "array-item active" : "array-item";
        return `<span class="${clas}">${ele}</span>`
    });
    dom.innerHTML += `<div class="log">${htmls.join("")}</div>`;
    document.querySelector(".exchange").innerHTML = "交换次数" + document.querySelectorAll(".log").length;
}

export { step };