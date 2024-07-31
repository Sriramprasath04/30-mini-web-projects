const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const data = new Date();
const month = data.getMonth(); 
monthEl.innerText = data.toLocaleString("en",{
    month:"long"
});

dayEl.innerText = data.toLocaleString("en",{
    weekday:"long"
});

dateEl.innerText = data.getDate();
yearEl.innerText = data.getFullYear();l