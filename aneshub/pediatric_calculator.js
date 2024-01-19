var pedCalcIntu = function () {
  /*공통 요소 입력*/
  var wt = document.querySelector("#weight").value;
  var ag = document.querySelector("#age").value;
  var ht = document.querySelector("#height").value;

  /*Etube ID 결과 도출*/
  var resultIdCuff = parseFloat(ag) / 4 + 3.5;
  document.querySelector("#ettIdCuff").value = resultIdCuff;

  var resultIdUnCuff = parseFloat(ag) / 4 + 4;
  document.querySelector("#ettIdUncuff").value = resultIdUnCuff;

  var resultDepth = parseFloat(ag) / 2 + 12;
  document.querySelector("#ettDepth").value = resultDepth;
};

var pedCalcDrug = function () {};

