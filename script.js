const startBtn = document.getElementById("start");
const endBtn = document.getElementById("end");

const timeInput = document.getElementById("time");
const formats = document.querySelectorAll("#formats");
const counter = document.getElementById("counter");

const ringtone = new Audio('ringtone.mp3')

function checkFormat(format) {
  if (format === "Seconds") {
    return 1000;
  } else if (format === "Minutes") {
    return 60000;
  } else if (format === "Hours") {
    return 3.6e6;
  }
}


let interval;
startBtn.addEventListener("click", () => {
  if (timeInput.value == 0 || timeInput.value === "") {
    console.log("Error!! cannot have it empty or 0");
  } else {
    formats.forEach((format) => {
      let parseTime = parseInt(timeInput.value, 10);

      counter.textContent = `${parseTime} ${format.value}`;

      interval = setInterval(() => {

        parseTime--;

        counter.textContent = `${parseTime} ${format.value}`;

        console.log(parseTime);

        if (parseTime === 0) {
          clearInterval(interval);
          ringtone.loop = true
          ringtone.play()
        }

      }, checkFormat(format.value));

      timeInput.value = "";
    });
  }
});
endBtn.addEventListener("click", () => {
  counter.innerText = "";
  clearInterval(interval);
  ringtone.pause();
});
