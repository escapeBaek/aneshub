const { JSDOM } = import("jsdom");
const dom = new JSDOM();
global.document = dom.window.document;

const remainBaekTime = document.querySelector("#remain-time_baek");

function diffDayBaek() {
  const baekOutTime = new Date("2024-04-26");
  const todayTime = new Date();

  const diff = baekOutTime - todayTime;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  remainBaekTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDayBaek();
setInterval(diffDayBaek, 1000);

//---------------------------------------------------

const remainMilTime = document.querySelector("#remain-time_mil");

function diffDayMil() {
  const milOutTime = new Date("2026-04-26");
  const todayTime = new Date();

  const diffM = milOutTime - todayTime;

  const diffDayM = Math.floor(diffM / (1000 * 60 * 60 * 24));
  const diffHourM = Math.floor((diffM / (1000 * 60 * 60)) % 24);
  const diffMinM = Math.floor((diffM / (1000 * 60)) % 60);
  const diffSecM = Math.floor((diffM / 1000) % 60);

  remainMilTime.innerText = `${diffDayM}일 ${diffHourM}시간 ${diffMinM}분 ${diffSecM}초`;
}

diffDayMil();
setInterval(diffDayMil, 1000);
