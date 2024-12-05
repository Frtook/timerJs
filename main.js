window.onload = function () {
  let countTime = setInterval(() => {
    let eventTime = new Date("Dec 11 , 2024 23:59:59").getTime();
    let dataNow = Date.now();
    let diffTime = eventTime - dataNow;
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let scoend = Math.floor((diffTime % (1000 * 60)) / 1000);
    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minuts").textContent =
      minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".second").textContent =
      scoend < 10 ? `0${scoend}` : scoend;
    if (diffTime < 0) {
      clearInterval(countTime);
    }
  }, 1000);
};
