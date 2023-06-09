/* Javascript 샘플 코드 */

// 공공 데이터 xml 파일로 받아오는 부분 kids cafe 공공데이터를 사용해서 파싱해본 코드입니다.
// xml 을 json 으로 변환하기 위해 사용했던 코드입니다
var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/6260000/BusanKidsCafeInfoService/getKidsCafeInfo'; /*URL*/
// api 의 query 매개 변수는 URL에서 ? 뒤에 나오는 선택적 키-값 쌍으로 정의, 즉 URL 의 확장 
// 서비스 키를 받아오고 
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'2NvytlCjWCcXr7%2BBfC9IW1BZEbx1wbycKPVjCqKD6IzhUckFD7y%2Bo%2FZG0lcQi3TQOSa6naV6HlhggCV5WL7rkA%3D%3D'; /*Service Key*/
// 줄의 갯수
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// 표시 되는 페이지 수 
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// 불러온 파일을 json 파일로 변환하기 
queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json'); /**/
// url 와 쿼리로 받아들인 변수들을 받아오기 
xhr.open('GET', url + queryParams);

    // onreadystatechange는 서버에서 응답이 도착하면 학교의 데이터를 불러오는 함수를 호출
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};
 // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
// ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출 

xhr.send('');