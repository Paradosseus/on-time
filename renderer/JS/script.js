import timezones from "./timezones.js";
let time = document.getElementById("time");
let userTime = document.getElementById("user-time");
let dropdown = document.getElementById("dropdown");
const currentTime = luxon.DateTime.now();
const timezoneOffsets = [];
let timezoneContainer = document.getElementById("timezone-container");

userTime.innerHTML = showUserTime();

document.addEventListener("DOMContentLoaded", function () {
  timezones.forEach((timezone) => {
    const offset = currentTime.setZone(timezone).toFormat("Z");
    timezoneOffsets.push({ timezone, offset });
  });

  timezoneOffsets.sort((a, b) => a.offset - b.offset);

  timezoneOffsets.forEach((timezoneOffset) => {
    let option = document.createElement("option");
    option.textContent = `${timezoneOffset.timezone} GMT ${timezoneOffset.offset}:00`;
    option.setAttribute("value", `${timezoneOffset.timezone}`);

    dropdown.appendChild(option);
  });
  const form = document.getElementById("timezoneForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedTimezone = dropdown.value;

    addTimezone(selectedTimezone);
  });
});

function showUserTime() {
  const userTime = currentTime.toFormat("HH:mm:ss");
  return userTime;
}

function addTimezone(timezone) {
  let addedTimezone = document.createElement("li");
  const addedTimezoneValue = currentTime.setZone(timezone).toFormat("HH:mm:ss");
  addedTimezone.textContent = `${timezone}: ${addedTimezoneValue}`;

  timezoneContainer.appendChild(addedTimezone);
}

// function updateTime() {
//   const currentTime = luxon.DateTime.now().toFormat("HH:mm:ss");

//   userTime.innerHTML = currentTime;
// }

// updateTime();
// setInterval(updateTime, 1000);

// document.addEventListener("DOMContentLoaded", function () {
//   timezones.forEach((timezone) => {
//     let option = document.createElement("option");
//     let offset = luxon.DateTime.now().setZone(timezone).toFormat("ZZ");
//     option.textContent = `${timezone} GMT ${offset}`;
//     dropdown.appendChild(option);
//   });
// });
