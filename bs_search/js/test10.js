/*
★★★★★★★★★★★★★★★★★
동구   --> 부산 지도 둘러보기에 학교의 갯수 수치 출력 
★★★★★★★★★★★★★★★★★
*/


// ★★★★★★url1 은 초등학교 __ url2 중학교 ___url3 은 고등학교의 데이터 xml ★★★★★★★★
url1 = 'https://api.odcloud.kr/api/15050725/v1/uddi:ec11a275-2563-4874-9d96-9a1f307a3849_201711161620?page=1&perPage=304&&serviceKey=BwZrjNlsTI82PmsTbumm%2F6OAPvyzv2nVBvKeK1yPbYh1PAk6h09XMOlO8l89N%2Bh7HpOSgvbAm%2Br5M68G9Q6y4g%3D%3D&returnType=XML'
url2 = 'https://api.odcloud.kr/api/15050723/v1/uddi:2f90a9a1-4565-4ec2-b30c-f1b35f5a38e1_201711161617?page=1&perPage=172&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'
url3 = 'https://api.odcloud.kr/api/15050724/v1/uddi:1c79c18a-ef4e-40a7-8b42-df1f94f15513_201711161619?page=1&perPage=143&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'

// XMLHttpRequest에서 데이터를 받아옴 , 새 요청 객체 생성  
var req1 = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var req3 = new XMLHttpRequest();

var members10 = "";

function list10() { // 총합계★
    //동구 초등학교
     // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
              // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
           
            //xml 파일의 학교(명), 도로명주소 자치구 의 데이터 받아오기 
            var member1 = xmlDoc.getElementsByName("학교");
            var where1 = xmlDoc.getElementsByName("학교도로명주소");
            var condition1 = xmlDoc.getElementsByName("자치구");
            

            for (i = 0; i < member1.length; i++) {  // 58개이다. 즉, 배열에는 57까지`
                //동구의 데이터 받아오기
                // 리스트에 학교명 그밑에줄에 ▶ 도로명주소 으로 출력
                if (condition1[i].firstChild.data == "동구"){
                    if (i != 0) { members10 += "<br>"; }
                    if (i != 0) { members10 += "<br>"; }
                    members10 += member1[i].firstChild.data;   
                    members10 += "<br>▶"; 
                    members10 += where1[i].firstChild.data;  
                }  
                         // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환 

            }// 동구의 학교 명와 주소 데이터를 list10에 저장
            document.getElementById("list10").innerHTML = members10; //동구 초등학교★
        }
    };
    //동구 중학교
     // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
              // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
           
            //xml 파일의 학교(명), 도로명주소 자치구 의 데이터 받아오기 
            var member2 = xmlDoc.getElementsByName("학교");
            var where2 = xmlDoc.getElementsByName("학교도로명주소");
            var condition2 = xmlDoc.getElementsByName("자치구");
            

            for (i = 0; i < member2.length; i++) {  // 58개이다. 즉, 배열에는 57까지`
                //동구의 데이터 받아오기
                // 리스트에 학교명 그밑에줄에 ▶ 도로명주소 으로 출력
                if (condition2[i].firstChild.data == "동구"){
                    if (i != 0) { members10 += "<br>"; }
                    if (i != 0) { members10 += "<br>"; }
                    members10 += member2[i].firstChild.data;   
                    members10 += "<br>▶"; 
                    members10 += where2[i].firstChild.data;  
                } 
                        // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환 

            }// 동구의 학교 명와 주소 데이터를 list10에 저장
            document.getElementById("list10").innerHTML = members10; //동구 중학교★
        }
    };
    //동구 고등학교
     // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
              // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
           
            //xml 파일의 학교(명), 도로명주소 자치구 의 데이터 받아오기 
            var member3 = xmlDoc.getElementsByName("학교");
            var where3 = xmlDoc.getElementsByName("학교도로명주소");
            var condition3 = xmlDoc.getElementsByName("자치구");
            

            for (i = 0; i < member3.length; i++) {  // 58개이다. 즉, 배열에는 57까지`
                //동구의 데이터 받아오기
                // 리스트에 학교명 그밑에줄에 ▶ 도로명주소 으로 출력
                if (condition3[i].firstChild.data == "동구"){
                    if (i != 0) { members10 += "<br>"; }
                    if (i != 0) { members10 += "<br>"; }
                    members10 += member3[i].firstChild.data;   
                    members10 += "<br>▶"; 
                    members10 += where3[i].firstChild.data;  
                } 
                        // firstchild 속성은 선택한 요소의 첫번째 자식 노드로 변환하는데
                // 선택한 노드에 자식이 없으면 NULL 으로 반환 

            }// 동구의 학교 명와 주소 데이터를 list10에 저장
            document.getElementById("list10").innerHTML = members10; //동구 교등학교★
        }
    };
}

//get 은 method type
 //url1,2,3, 의 정보 받아오기
req1.open("GET", url1, true);
req2.open("GET", url2, true);
req3.open("GET", url3, true);

req1.send();
req2.send();
req3.send();