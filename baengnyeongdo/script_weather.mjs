//==============================================================================
//현재 시간 및 날짜 불러오기
var now = new Date();
var year = now.getFullYear();
var month = ("0" + (1 + now.getMonth())).slice(-2);
var date = ("0" + now.getDate()).slice(-2);
var kst = `${year}` + `${month}` + `${date}`;
var hours = ("0" + now.getHours()).slice(-2);
var minutes = ("0" + now.getMinutes()).slice(-2);
var currentTime = `${hours}${minutes}`;

//==============================================================================
//API key 및 variable 불러오기_백령도_오늘
const api_key =
  "V48%2FKRAbWFZWlD3gRliAbDF%2BlEZEPZS8%2B6NbHqwS3x9CKnmxq1aQWPnKDKT7pS3NWog3jnYcNQcQSn72F6VhgQ%3D%3D";
const pageNo = "1"; //페이지 수
const nx = "21"; //x좌표 : 백령도 용기포항 x좌표
const ny = "135"; //y좌표 : 백령도 용기포항 y좌표
const base_date = `${kst}`; //현재 날짜
const base_time = `${currentTime}`; //기준 시간 06시로
const dataType = "json"; //데이터 타입

const numOfRows = "1000"; //페이지당 row 수

//==============================================================================
// PTY 값에 따르 기상 현황 구분
function mapPTYDescription(code) {
  switch (code) {
    case "0":
      return "없음";
    case "1":
      return "비";
    case "2":
      return "비/눈";
    case "3":
      return "눈";
    case "5":
      return "빗방울";
    case "6":
      return "빗방울눈날림";
    case "7":
      return "눈날림";
    default:
      return "알 수 없음";
  }
}

//==============================================================================
//API 함수 부분!!
//기상청 초단기예보 API값 불러오기
async function ultraShortWeather() {
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey=${api_key}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=${dataType}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(JSON.stringify(data, null, 4)); //데이터 분석 위해 표기로 확인

    const ultrashortWeatherInfoContainer = document.getElementById(
      "ultrashortWeatherInfo"
    );

    if (ultrashortWeatherInfoContainer) {
      const displayOrder = [
        "PTY",
        "T1H",
        "RN1",
        "REH",
        "UUU",
        "VVV",
        "VEC",
        "WSD",
      ];

      data.response.body.items.item.forEach((item) => {
        const ultrashortWeatherInfoElement = document.createElement("div");

        displayOrder.forEach((category) => {
          if (item.category === category) {
            switch (category) {
              case "T1H":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>기온 : ${item.obsrValue} &#x2103</p>
                `;
                break;

              case "RN1":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>1시간 강수량 : ${item.obsrValue} mm</p>
                  `;
                break;

              case "UUU":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>동서바람성분 : ${item.obsrValue} m/s</p>
                  `;
                break;

              case "VVV":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>남북바람성분 : ${item.obsrValue} m/s</p>
                  `;
                break;

              case "REH":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>습도 : ${item.obsrValue} %</p>
                  `;
                break;

              case "PTY":
                const ptyDescription = mapPTYDescription(item.obsrValue);
                ultrashortWeatherInfoElement.innerHTML = `
                <p>강수형태 : ${ptyDescription}</p>
              `;
                break;

              case "VEC":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>풍향 : ${item.obsrValue} deg</p>
                `;
                break;

              case "WSD":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>풍속 : ${item.obsrValue} m/s</p>
                `;
                break;

              default:
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>${item.category}: ${item.obsrValue}</p>
                `;
                break;
            }
          }
        });

        ultrashortWeatherInfoContainer.appendChild(
          ultrashortWeatherInfoElement
        );
      });
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ultraShortWeather();
});
//==============================================================================
//해양정보 서비스 : 해황예보도 variable들
var dataTypeOcean = "fcIndexOfShip";
var serviceKeyOcean = "wldhxng34hkddbsgm81lwldhxng34hkddbsgm81l==";
var typeOcean = "PORT";
var resultTypeOcean = "json";

//==============================================================================
//해양정보 서비스 : 해황예보도 API=> 시간 좀 걸릴 수도 있으니까 내일 해보자
async function oceanForecast() {
  const url = `http://www.khoa.go.kr/api/oceangrid/DataType/search.do?DataType=${dataTypeOcean}&ServiceKey=${serviceKeyOcean}&type=${typeOcean}&ResultType=${resultTypeOcean}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 4)); //데이터 분석 위해 표기로 확인
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  oceanForecast();
});

/*
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 4)); //데이터 분석 위해 표기로 확인

    const ultrashortWeatherInfoContainer = document.getElementById(
      "ultrashortWeatherInfo"
    );

    if (ultrashortWeatherInfoContainer) {
      const displayOrder = [
        "PTY",
        "T1H",
        "RN1",
        "REH",
        "UUU",
        "VVV",
        "VEC",
        "WSD",
      ];

      data.response.body.items.item.forEach((item) => {
        const ultrashortWeatherInfoElement = document.createElement("div");

        displayOrder.forEach((category) => {
          if (item.category === category) {
            switch (category) {
              case "T1H":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>기온 : ${item.obsrValue} &#x2103</p>
                `;
                break;

              case "RN1":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>1시간 강수량 : ${item.obsrValue} mm</p>
                  `;
                break;

              case "UUU":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>동서바람성분 : ${item.obsrValue} m/s</p>
                  `;
                break;

              case "VVV":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>남북바람성분 : ${item.obsrValue} m/s</p>
                  `;
                break;

              case "REH":
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>습도 : ${item.obsrValue} %</p>
                  `;
                break;

              case "PTY":
                const ptyDescription = mapPTYDescription(item.obsrValue);
                ultrashortWeatherInfoElement.innerHTML = `
                <p>강수형태 : ${ptyDescription}</p>
              `;
                break;

              case "VEC":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>풍향 : ${item.obsrValue} deg</p>
                `;
                break;

              case "WSD":
                ultrashortWeatherInfoElement.innerHTML = `
                <p>풍속 : ${item.obsrValue} m/s</p>
                `;
                break;

              default:
                ultrashortWeatherInfoElement.innerHTML = `
                  <p>${item.category}: ${item.obsrValue}</p>
                `;
                break;
            }
          }
        });

        ultrashortWeatherInfoContainer.appendChild(
          ultrashortWeatherInfoElement
        );
      });
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

ultraShortWeather();
*/
