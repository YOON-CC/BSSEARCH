//고등학교 공공 데이터 //

var url = 'https://api.odcloud.kr/api/15050724/v1/uddi:1c79c18a-ef4e-40a7-8b42-df1f94f15513_201711161619?page=1&perPage=143&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'

// 지도를 생성합니다    
//var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
//var geocoder = new kakao.maps.services.Geocoder();

//지도에 고등학교 공공데이터의 학교도로명 주소와 좌표에 따라 마커로 표시 
function loadDoc3() {
    var req = new XMLHttpRequest();
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req.onreadystatechange = function() {
         // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
        if (this.readyState == 4 && this.status == 200) {
            var i;
            var xmlDoc = req.responseXML;

            var members= [];
              //학교도로명 주소 받아오기
            var member = xmlDoc.getElementsByName("학교도로명주소"); 

            // const name = document.getElementById('keyword').value;    
            for (i = 0; i < member.length; i++) { 
                members[i] = member[i].firstChild.data; 
                if(name==member[i].firstChild.data){
                    geocoder.addressSearch(name , function(result, status) {
                        
                        // 정상적으로 검색이 완료됐으면 
                         if (status === kakao.maps.services.Status.OK) {
                        // 위, 경도에 따라 표시 
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x); 
                            map.setCenter(coords);
                        }
                    
                    });  
                }
                 // 주소로 좌표를 검색합니다
                geocoder.addressSearch(members[i] , function(result, status) {

                    // 정상적으로 검색이 완료됐으면 
                     if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                        var imageSrc = './img/붕어빵.png', // 마커이미지의 주소입니다    
                        imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
                        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                          
                        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                        markerPosition = coords; // 마커가 표시될 위치입니다

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            //map: map,
                            position: coords,
                             image: markerImage // 마커이미지 설정 
                        });
                        

                         //그린푸드존 생성
                        var circle = new kakao.maps.Circle({
                            center : new kakao.maps.LatLng(result[0].y, result[0].x),  // 원의 중심좌표 입니다 
                            radius: 200, // 미터 단위의 원의 반지름입니다 
                            strokeWeight: 1, // 선의 두께입니다 
                            strokeColor: '#39DE2A', // 선의 색깔입니다
                            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                            strokeStyle: 'solid', // 선의 스타일 입니다
                            fillColor: '#A2FF99', // 채우기 색깔입니다
                            fillOpacity: 0  // 채우기 불투명도 입니다   
                        });
                        marker.setMap(map); // 필요없는 부분
                        circle.setMap(map);

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        // var infowindow = new kakao.maps.InfoWindow({
                        //     content: '<div style="width:150px;text-align:center;padding:6px 0;"></div>'
                        // });
                        // infowindow.open(map, marker);
                        clusterer.addMarker(marker, false);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        //map.setCenter(coords);
                    } 
                });   
            }
        }
    };//get 은 method type
    //url의 정보 받아오기
    req.open("GET", url, true);
    req.send();
}
loadDoc3();
