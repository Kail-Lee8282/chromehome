const clock = document.querySelector("#clock");
const idDate = document.querySelector("#date");

function getClock() {
  const date = new Date();
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
  idDate.innerText = `${date.toDateString()}`;
}

getClock();
setInterval(getClock, 1000);
