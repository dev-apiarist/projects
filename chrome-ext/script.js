let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//start
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> 
      <a href='${leads[i]}' target='_blank'> ${leads[i]}</a> 
      </li>`;
  }
  //use backticks for multi-line & ${} for js
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
  console.log(tabs);
});
