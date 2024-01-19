var test_key =
  "V48%2FKRAbWFZWlD3gRliAbDF%2BlEZEPZS8%2B6NbHqwS3x9CKnmxq1aQWPnKDKT7pS3NWog3jnYcNQcQSn72F6VhgQ%3D%3D";
var row_port = "10";
var page_port = "1";
var type_port = "json";
var pos_port = "109";
var time_port = "202312110600";

//API 불러오기
async function operatingShip() {
  const url = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst?serviceKey=${test_key}&pageNo=${page_port}&numOfRows=${row_port}&dataType=${type_port}&stnld=${pos_port}&tmFc=${time_port}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 4));

    /*
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
    */
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

//html이 다 뜨고 해당 mjs를 실행시켜달라는 것.
document.addEventListener("DOMContentLoaded", () => {
  operatingShip();
});
