// const colors = [
//   "#ffffff",
//   "#2196f3",
//   "#4caf50",
//   "#ff9800",
//   "#009688",
//   "#795548",
// ];

// const gri = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// console.log(gri(0, 10));

// const start = document.querySelector(".start");
// const stop = document.querySelector(".stop");
// const body = document.querySelector("body");
// let promise;
// const changeColor = () => {
//   promise = new Promise((resolve) => {
//     const setI = setInterval(() => {
//       body.style.backgroundColor = colors[gri(0, 5)];
//     }, 250);
//     resolve(setI);
//   });
// };

// stop.addEventListener("click", () => {
//   promise.then((interval) => {
//     setTimeout(() => {
//       clearInterval(interval);
//     }, 0);
//   });
// });

// start.addEventListener("click", () => {
//   changeColor();
//   start.disabled = true;
// });

// class CountTimer {
//   constructor(selector, targetDate) {
//     this.selector = selector;
//     this.targetDate = new Date(targetDate);
//     this.timer = this.timer.bind(this);
//   }

//   timer() {
//     const days = document.querySelector('span[data-value="days"]');
//     const hours = document.querySelector('span[data-value="hours"]');
//     const mins = document.querySelector('span[data-value="mins"]');
//     const secs = document.querySelector('span[data-value="secs"]');

//     const currentDate = Date.now();

//     this.time = this.targetDate - currentDate;
//     const daysMath = Math.floor(this.time / (1000 * 60 * 60 * 24));

//     const hoursMath = Math.floor(
//       (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );

//     const minsMath = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
//     const secsMath = Math.floor((this.time % (1000 * 60)) / 1000);
//     console.log(daysMath, hoursMath, minsMath, secsMath);

//     days.textContent = daysMath;
//     hours.textContent = hoursMath;
//     mins.textContent = minsMath;
//     secs.textContent = secsMath;
//   }

//   start() {
//     setInterval(this.timer, 1000);
//   }
// }

// const countTimer = new CountTimer("#timer-1", "2020 December 31 23:59");
// countTimer.timer();

// console.log(Date.now());
// countTimer.start();

const delay = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

delay(1345).then((time) => {
  console.log(`Resolved after ${time}ms`);
});
