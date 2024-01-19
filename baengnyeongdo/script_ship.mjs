//현재 시간 및 날짜 불러오기, 내일 날짜 불러오기
var now = new Date();
var year = now.getFullYear();
var month = ("0" + (1 + now.getMonth())).slice(-2);
var date = ("0" + now.getDate()).slice(-2);
var kst = `${year}` + `${month}` + `${date}`;

//내일 날짜 구하기
var tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
var tm_date = ("0" + tomorrow.getDate()).slice(-2);
var tm = `${year}${month}${tm_date}`;

//============================================================================
//API key 및 variable 불러오기_백령도_오늘
const api_key =
  "V48%2FKRAbWFZWlD3gRliAbDF%2BlEZEPZS8%2B6NbHqwS3x9CKnmxq1aQWPnKDKT7pS3NWog3jnYcNQcQSn72F6VhgQ%3D%3D";
const portId = "SEA10030"; //백령도 항구 번호
const portTime = `${kst}`; //현재 날짜
const dataType = "json";
const dataPage = "1";
const api_key2 =
  "V48/KRAbWFZWlD3gRliAbDF+lEZEPZS8+6NbHqwS3x9CKnmxq1aQWPnKDKT7pS3NWog3jnYcNQcQSn72F6VhgQ==";

//한국선박운항정보 API값 불러오기
async function operatingShip() {
  const url = `http://apis.data.go.kr/1613000/DmstcShipNvgInfoService/getShipOpratInfoList?serviceKey=${api_key}&depPlandTime=${portTime}&depNodeId=${portId}&_type=${dataType}&pageNo=${dataPage}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(JSON.stringify(data, null, 4));

    // Get the ship information container
    //앞에서 id로 지정해둔 div에 api에서 받아온 자료를 본문으로 작성하기 위해 getElementById를 쓴다.
    const shipInfoContainer = document.getElementById("shipInfo");

    // Check if the container exists
    if (shipInfoContainer) {
      // Loop through each item and create HTML elements : forEach를 써서
      // 만약 특정 요소만 뽑아내고 싶으면 indexing을 하면 될 것으로 생각됨.
      data.response.body.items.item.forEach((item) => {
        const shipInfoElement = document.createElement("div");
        shipInfoElement.innerHTML = `
          <p>Arrival Place: ${item.arrPlaceNm}</p>
          <p>Arrival Time: ${item.arrPlandTime}</p>
          <p>Charge: ${item.charge}</p>
          <p>Departure Place: ${item.depPlaceNm}</p>
          <p>Departure Time: ${item.depPlandTime}</p>
          <p>Vehicle Name: ${item.vihicleNm}</p>
          <hr>
        `;
        // Append the ship information to the container
        shipInfoContainer.appendChild(shipInfoElement);
      });
    } else {
      console.error("Ship information container not found in the HTML.");
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

//html이 다 뜨고 해당 mjs를 실행시켜달라는 것.
document.addEventListener("DOMContentLoaded", () => {
  operatingShip();
});

//============================================================================

async function operatingPort() {
  const url = `http://apis.data.go.kr/1613000/DmstcShipNvgInfoService/getPortList?serviceKey=${api_key}&_type=json&numOfRows=100`;
  const response = await fetch(url);
  const data = await response.json();
  //console.log(JSON.stringify(data, null, 4));
}

//이렇게 까지만 해도 json 데이터를 불러올 수 있으니까 이걸로 연습해보자

operatingPort();
//============================================================================

const decodedKey = decodeURIComponent(api_key);

async function test() {
  const url = `https://opendata.icpa.or.kr/OpenAPI/service/ipaFerryNavigatInfo/getDmstcNvgList?serviceKey=${decodedKey}&numOfRows=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/xml")) {
    const xmlString = await response.text();

    console.log("XML Result:\n", xmlString);
  } else {
    console.log("Received non-XML response. Expected XML.");
  }
}

test();

/*
async function test() {
  const url = `https://opendata.icpa.or.kr/OpenAPI/service/ipaFerryNavigatInfo/getDmstcNvgList?serviceKey=${api_key2}&numOfRows=1`;
  const response = await fetch(url);
  const data = await response.xml();
  console.log(JSON.stringify(data, null, 4));
}

test();
*/
