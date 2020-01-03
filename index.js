const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const pointer = document.querySelector(".point");

const getTime = () => {
  const now = new Date();
  const theSecond = now.getSeconds();
  const secondToDeg = (theSecond / 60) * 360 + 90;
  console.log(secondToDeg);
  if (secondToDeg === 90) {
    seconds.style.transition = "none";
  }
  if (secondToDeg === 96) {
    seconds.style.transition = "all 0.1s";
    seconds.style.transitionTimingFunction =
      "cubic-bezier(0.07, 2.46, 0.25, 1)";
  }
  seconds.style.transform = `rotate(${secondToDeg}deg)`;

  const theMinute = now.getMinutes();
  const minuteToDeg = (theMinute / 60) * 360 + 90;
  minutes.style.transform = `rotate(${minuteToDeg}deg)`;

  const theHour = now.getHours();
  const hourToDeg = (theHour / 12) * 360 + 90;
  hours.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(getTime, 1000);
getTime();
