import './index.less'
import { bubbleSort } from "./algorithm/bubbleSort"
import { selectionSort } from "./algorithm/selectionSort"
import { insertSort } from "./algorithm/insertSort"
import { shellSort } from "./algorithm/shellSort"
import { mergeSort } from "./algorithm/mergeSort"

let source = [];
const NUM = 6;

document.querySelector('#menu').addEventListener('click', (e) => {
  let tar: any = e.target;
  let href = tar.getAttribute('href');
  document.querySelector(".algo").innerHTML = tar.innerHTML;
  document.querySelector(".process").innerHTML = "";

  let copy = source.slice(0);
  const start = Date.now();
  switch (href) {
    case "bubbleSort":
      displayResult(...bubbleSort(copy), start);
      break;
    case "selectionSort":
      displayResult(...selectionSort(copy), start);
      break;
    case "insertSort":
      displayResult(...insertSort(copy), start);
      break;
    case "shellSort":
      displayResult(...shellSort(copy), start);
      break;
    case "mergeSort":
      displayResult(...mergeSort(copy), start);
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

function displayResult(arr, count, start) {
  const dom = document.querySelector(".output");
  const htmls = arr.map(ele => {
    return `<span class="array-item">${ele}</span>`
  });
  const delta = console.timeEnd("algotime");
  dom.innerHTML = htmls.join("") + `<h3>循环次数：${count}</h3>` + `<h3>耗时：${Date.now() - start}</h3>`
}

function init() {
  generateSourceData();
}

init();