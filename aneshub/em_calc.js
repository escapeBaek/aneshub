/* BASED ON SNUH EM DRUG CALCULATOR AND TXA CALCULATOR*/
// 240117 코드 변경하면서 input box의 text를 number로 바꾸면서 더 이상 parseFloat을 사용하지 않는 방향으로 변경. parseFloat는 text를 numeric으로 변경 시켜주는 방법이다.

function doseCalc() {
  /*여러 약에 대한 dose rate calculation을 하나의 function으로 해결*/

  /*공통 요소 입력*/
  let wt = document.querySelector(".js-weight").value;

  //===============================================
  /*NEP/EPI variable 입력*/
  let dnep = document.querySelector(".js-nep-conc").value;
  let drnep = document.querySelector(".js-nep-doserate").value;

  /*NEP/EPI 결과 도출*/
  let resultNEP = (drnep * wt * 60) / dnep;
  document.querySelector(".js-nep-result").textContent = resultNEP + "ml/hr";

  //===============================================
  /*DOPA/DOBU variable 입력*/
  let ddopa = document.querySelector(".js-dopa-conc").value;
  let drdopa = document.querySelector(".js-dopa-doserate").value;

  /*DOPA/DOBU 결과 도출*/
  let resultDOPA = (drdopa * wt * 60) / (ddopa * 1000);
  document.querySelector(".js-dopa-result").textContent = resultDOPA + "ml/hr";

  //===============================================
  /*NTG/SNP variable 입력*/
  let dntg = document.querySelector(".js-ntg-conc").value;
  let drntg = document.querySelector(".js-ntg-doserate").value;

  /*NTG/SNP 결과 도출*/
  let resultNTG = (drntg * wt * 60) / (dntg * 1000);
  document.querySelector(".js-ntg-result").textContent = resultNTG + "ml/hr";

  //===============================================
  /*VASOPRESSIN variable 입력*/
  let vasoConc = document.querySelector(".js-vaso-conc").value;
  let vasoDoserate1 = document.querySelector(".js-vaso-doserate1").value;
  let vasoDoserate2 = document.querySelector(".js-vaso-doserate2").value;

  /*VASOPRESSIN 결과 도출*/
  let vasoResult1 = (vasoDoserate1 * 60) / vasoConc;
  document.querySelector(".js-vaso-result1").textContent =
    vasoResult1 + "ml/hr";

  let vasoResult2 = (vasoDoserate2 * wt) / vasoConc;
  document.querySelector(".js-vaso-result2").textContent =
    vasoResult2 + "ml/hr";

  //===============================================
  /*PROPOFOL C.I. variable 입력*/
  let ppfConc = document.querySelector(".js-ppf-conc").value;

  /*PROPOFOL C.I. 결과 도출*/
  let ppfResult1 = (wt * 6) / ppfConc;
  document.querySelector(".js-ppf-result1").textContent =
    "Min infusion : " + ppfResult1 + "ml/hr";

  let ppfResult2 = ppfResult1 * 2;
  document.querySelector(".js-ppf-result2").textContent =
    "Max infusion : " + ppfResult2 + "ml/hr";

  //===============================================
  /*SUFTN C.I. variable 입력*/
  let suftnConc = document.querySelector(".js-suftn-conc").value;

  /*SUFTN C.I. 결과 도출*/
  let suftnResult1 = (wt * 0.5) / suftnConc;
  document.querySelector(".js-suftn-result1").textContent =
    "Min infusion : " + suftnResult1 + "ml/hr";

  let suftnResult2 = (wt * 1.5) / suftnConc;
  document.querySelector(".js-suftn-result2").textContent =
    "Max infusion : " + suftnResult2 + "ml/hr";

  //===============================================
  /*RemiFTN C.I. variable 입력*/
  let rftnConc = document.querySelector(".js-rftn-conc").value;

  /*RemiFTN C.I. 결과 도출*/
  let rftnResult1 = (wt * 0.1) / rftnConc;
  document.querySelector(".js-rftn-result1").textContent =
    "Min infusion : " + rftnResult1 + "ml/hr";

  let rftnResult2 = rftnResult1 * 10;
  document.querySelector(".js-rftn-result2").textContent =
    "Max infusion : " + rftnResult2 + "ml/hr";

  //===============================================
  /*TXA C.I. variable 입력*/
  let txaConc = document.querySelector(".js-txa-conc").value;

  /*RemiFTN C.I. 결과 도출*/
  let txaResult1 = (wt * 10 * 3) / txaConc;
  document.querySelector(".js-txa-loading").textContent =
    "Loading(for 20min) : " + txaResult1 + "ml/hr";

  let txaResult2 = (wt * 1) / txaConc;
  document.querySelector(".js-txa-conti").textContent =
    "Continuous : " + txaResult2 + "ml/hr";
  //===============================================
}

// Add event listener to the button
document.querySelector(".js-calculate").addEventListener("click", doseCalc);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

button.style.backgroundColor = "#F8F0E5";
