import './index.less'
import { bubbleSort } from "./algorithm/bubbleSort"
import { selectionSort } from "./algorithm/selectionSort"

let source = [];
const NUM = 6;

document.querySelector('#menu').addEventListener('click', (e) => {
  let tar: any = e.target;
  let href = tar.getAttribute('href');
  console.log("算法：", href);
  document.querySelector(".process").innerHTML = "";

  let copy = source.slice(0);
  switch (href) {
    case "bubbleSort":
      displayResult(...bubbleSort(copy));
      break;
    case "selectionSort":
      displayResult(...selectionSort(copy));
      break;
  }

});

function generateSourceData() {
  for (let i = 0; i < NUM; i++) {
    source.push(Math.round(Math.random() * 1000));
  }
  displayArray(source, document.querySelector(".source"), false)
}

function displayArray(arr, dom, append) {
  let htmls = arr.map(ele => {
    return `<span class="array-item">${ele}</span>`
  });
  if (append) {
    dom.innerHTML += htmls.join("");
  } else {
    dom.innerHTML = htmls.join("");
  }
}

function displayResult(arr, count) {
  let dom = document.querySelector(".output");
  let htmls = arr.map(ele => {
    return `<span class="array-item">${ele}</span>`
  });
  dom.innerHTML = htmls.join("") + `<div>循环次数：${count}</div>`
}

function init() {
  generateSourceData();
}

init();