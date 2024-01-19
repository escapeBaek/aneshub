//============================================================================
//한국선박운항정보 API값 불러오기
const api_key =
  "V48%2FKRAbWFZWlD3gRliAbDF%2BlEZEPZS8%2B6NbHqwS3x9CKnmxq1aQWPnKDKT7pS3NWog3jnYcNQcQSn72F6VhgQ%3D%3D";

async function operatingPort() {
  const url = `https://opendata.icpa.or.kr/OpenAPI/service/ipaFerryNavigatInfo/getDmstcNvgList?ServiceKey=${api_key}&numOfRows=1`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
    console.log(JSON.stringify(data, null, 4));
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

operatingPort();
/*
//html이 다 뜨고 해당 mjs를 실행시켜달라는 것.
document.addEventListener("DOMContentLoaded", () => {
  operatingPort();
});
*/
