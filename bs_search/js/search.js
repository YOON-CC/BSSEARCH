
// ★★★★★★url1 은 초등학교 __ url2 중학교 ___url3 은 고등학교의 데이터 xml ★★★★★★★★

var url1 = 'https://api.odcloud.kr/api/15050723/v1/uddi:2f90a9a1-4565-4ec2-b30c-f1b35f5a38e1_201711161617?page=1&perPage=172&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'
var url2 = 'https://api.odcloud.kr/api/15050725/v1/uddi:ec11a275-2563-4874-9d96-9a1f307a3849_201711161620?page=1&perPage=304&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'
var url3 = 'https://api.odcloud.kr/api/15050724/v1/uddi:1c79c18a-ef4e-40a7-8b42-df1f94f15513_201711161619?page=1&perPage=143&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'


// 학교 검색기능 구현 초등학교 중학교 고등학교 의 데이터 마커들을 검색이 가능하도록 구현 

//중 학교 검색
function se1() {
// XMLHttpRequest에서 데이터를 받아옴 , 새 요청 객체 생성  
    var req = new XMLHttpRequest();
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 데이터를 불러오는 함수를 호출
    req.onreadystatechange = function() {
        // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
// ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출 
        if (this.readyState == 4 && this.status == 200) {
            let i;
            var xmlDoc = req.responseXML;
            // responseXML 은 검색된 HTML 또는 XML 을 포함하는 문서 반환해서 읽기 전용 값 받아옴 
            var members= [];
            // xml 데이터에서 학교 도로명주소의 값 받아옴
            var member = xmlDoc.getElementsByName("학교도로명주소");     

            //@@@@@@@@@@@@ 검색  주소를 검색하면
            const name = document.getElementById('keyword').value;
        //  getElementbyid는 id 속성이 지정된 문자열과 일치하는 요소를 나타내는 Element 객체를 반환합니다
            for (i = 0; i < member.length; i++) { 
                members[i] = member[i].firstChild.data;
                // 첫번째 자식 노드를 요소 노드로 변환 
                // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환
                if(name==member[i].firstChild.data){
                        geocoder.addressSearch(name , function(result, status) {
                        
                        // 정상적으로 검색이 완료됐으면 
                         if (status === kakao.maps.services.Status.OK) {
                            // kakaomap 에 마커 출력 
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 위, 경도
                            map.setCenter(coords);

                        } 
                    
                });  
                }
               //@@@@@@@@@@@@  

            }//반복문
           

        }
    };
    //url1 의 정보 받아오기 
    req.open("GET", url1, true);
    req.send();
}



//초등학교 검색
function se2() {
   // XMLHttpRequest에서 데이터를 받아옴 , 새 요청 객체 생성  
    var req = new XMLHttpRequest();
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 데이터를 불러오는 함수를 호출
    req.onreadystatechange = function() {
        // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
// ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출 
        if (this.readyState == 4 && this.status == 200) {
            let i;
            var xmlDoc = req.responseXML;
 // responseXML 은 검색된 HTML 또는 XML 을 포함하는 문서 반환해서 읽기 전용 값 받아옴 
            var members= [];
             // xml 데이터에서 학교 도로명주소의 값 받아옴
            var member = xmlDoc.getElementsByName("학교도로명주소");     

            //@@@@@@@@@@@@ 검색 주소를 검색하면 
            const name = document.getElementById('keyword').value;
            //  getElementbyid는 id 속성이 지정된 문자열과 일치하는 요소를 나타내는 Element 객체를 반환합니다
            for (i = 0; i < member.length; i++) { 
                members[i] = member[i].firstChild.data; 
                // 첫번째 자식 노드를 요소 노드로 변환 
                // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환

                if(name==member[i].firstChild.data){
                        geocoder.addressSearch(name , function(result, status) {
                        
                        // 정상적으로 검색이 완료됐으면 
                         if (status === kakao.maps.services.Status.OK) {
                             // kakaomap 에 마커 출력
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 위, 경도
                            map.setCenter(coords);

                        } 
                    
                });  
                }
               //@@@@@@@@@@@@  

            }//반복문
           

        }
    };  //url2 의 정보 받아오기
    req.open("GET", url2, true);
    req.send();
}

// 고등학교 검색
function se3() {
     // XMLHttpRequest에서 데이터를 받아옴 , 새 요청 객체 생성  
    var req = new XMLHttpRequest();
      // onreadystatechange는 서버에서 응답이 도착하면 학교의 데이터를 불러오는 함수를 호출
    req.onreadystatechange = function() {
         // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
// ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출 
        if (this.readyState == 4 && this.status == 200) {
            let i;
            var xmlDoc = req.responseXML;
// responseXML 은 검색된 HTML 또는 XML 을 포함하는 문서 반환해서 읽기 전용 값 받아옴 
            var members= [];
             // xml 데이터에서 학교 도로명주소의 값 받아옴
            var member = xmlDoc.getElementsByName("학교도로명주소");     

              //@@@@@@@@@@@@ 검색 주소를 검색하면 
            const name = document.getElementById('keyword').value;
              //  getElementbyid는 id 속성이 지정된 문자열과 일치하는 요소를 나타내는 Element 객체를 반환합니다
            for (i = 0; i < member.length; i++) { 
                members[i] = member[i].firstChild.data; 
                        // 첫번째 자식 노드를 요소 노드로 변환 
                // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환


                if(name==member[i].firstChild.data){
                        geocoder.addressSearch(name , function(result, status) {
                        
                        // 정상적으로 검색이 완료됐으면 
                         if (status === kakao.maps.services.Status.OK) {
                                     // kakaomap 에 마커 출력
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 위, 경도
                            map.setCenter(coords);

                        } 
                    
                });  
                }
               //@@@@@@@@@@@@  

            }//반복문
           

        }
    };//url3 의 정보 받아오기
    req.open("GET", url3, true);
    req.send();
}