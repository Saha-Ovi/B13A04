let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
const totalJob1 = document.getElementById("total-job1");
const totalJob2 = document.getElementById("total-job2");

let allTotal = document.getElementById("allCount");
let interviewTotal = document.getElementById("interviewCount");
let rejectedTotal = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const mainContainer = document.querySelector("main");
const allCardsSection = document.getElementById("allCards");
const filterSection = document.getElementById("filtered-section");
const noJobSection = document.getElementById("no-job");

function calculation() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  allTotal.innerText = total.innerText;
  interviewTotal.innerText = interviewCount.innerText;
  rejectedTotal.innerText = rejectedCount.innerText;
  totalJob1.innerText = total.innerText;
  totalJob2.innerText=total.innerText;
}
calculation();


function toggleStyle(id) {
  // add all the button
  allFilterBtn.classList.add("bg-base-100", "text-gray-500");
  interviewFilterBtn.classList.add("bg-base-100", "text-gray-500");
  rejectedFilterBtn.classList.add("bg-base-100", "text-gray-500");

  // remove all the button
  allFilterBtn.classList.remove("btn-info", "text-white");
  interviewFilterBtn.classList.remove("btn-info", "text-white");
  rejectedFilterBtn.classList.remove("btn-info", "text-white");
  // specific btn
  selected = document.getElementById(id);

  currentStatus = id;
  // console.log(currentStatus);

  selected.classList.remove("bg-base-100", "text-gray-500");
  selected.classList.add("btn-info");

}