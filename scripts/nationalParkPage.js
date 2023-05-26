"use strict";

const parkTableBody = document.getElementById("national-park-table-body");
const stateDropDownList = document.getElementById("stateDropDown");
const typeDropDownList = document.getElementById("typeDropDown");
const stateButton = document.getElementById("stateLocationButton");
const parkButton = document.getElementById("parkTypeButton");

function buildParkRow(tbody, thePark) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = thePark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = thePark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = thePark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = thePark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = thePark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = thePark.Phone;

  let cell7 = row.insertCell(6);
  cell7.innerText = thePark.Visit;
}

function loadParksByStateTable() {
    clearTable();
  let mySelectedState = stateDropDownList.value;
  let filteredListByState = filterParksByState(mySelectedState);
  for (const park of filteredListByState) {
    buildParkRow(parkTableBody, park);
  }
}


function loadStateDropDownList() {
  for (const state of locationsArray) {
    let option = new Option(state, state);
    stateDropDownList.appendChild(option);
  }
}


function loadTypeDropDownList() {
  for (const type of parkTypesArray) {
    let option = new Option(type, type);
    typeDropDownList.appendChild(option);
  }
}



function filterParksByState(state) {
  let filteredList = nationalParksArray.filter(function (park) {
    return park.State == state;
  });
  return filteredList;
}

function clearTable() {
    parkTableBody.innerHTML = "";
}

function filterParksByType (parkType) {
    let filteredList = nationalParksArray.filter(function (park) {
        return park.LocationName.includes(parkType);
      });
      return filteredList;
}

function loadParksByParkTypeTable() {
    clearTable();
  let mySelectedType = typeDropDownList.value;
  let filteredListByType = filterParksByType(mySelectedType);
  for (const park of filteredListByType) {
    buildParkRow(parkTableBody, park);
  }
}

function checkButton() {
    let selectedButtonOpt = document.querySelector(`input[name="buttonChoices"]:checked`).value;
    if (selectedButtonOpt== 1) {
        loadStateDropDownList(); 
    }
    if (selectedButtonOpt== 2) {
        loadTypeDropDownList();
    }
}
checkButton();
