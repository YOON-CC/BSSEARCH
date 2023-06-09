

// ★★★★★★url1 은 초등학교 __ url2 중학교 ___url3 은 고등학교의 데이터 xml ★★★★★★★★

url1 = 'https://api.odcloud.kr/api/15050723/v1/uddi:2f90a9a1-4565-4ec2-b30c-f1b35f5a38e1_201711161617?page=1&perPage=172&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'
url2 = 'https://api.odcloud.kr/api/15050725/v1/uddi:ec11a275-2563-4874-9d96-9a1f307a3849_201711161620?page=1&perPage=304&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'
url3 = 'https://api.odcloud.kr/api/15050724/v1/uddi:1c79c18a-ef4e-40a7-8b42-df1f94f15513_201711161619?page=1&perPage=143&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'

// XMLHttpRequest에서 데이터를 받아옴 , 새 요청 객체 생성  
var req1 = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var req3 = new XMLHttpRequest();

//get 은 method type
 //url1,2,3, 의 정보 받아오기
req1.open("GET", url1, true);
req2.open("GET", url2, true);
req3.open("GET", url3, true);

req1.send();
req2.send();
req3.send();

    //지역에 따른 변수
    n1 = 0 // 기장군
    n2 = 0 // 부산광역시 금정구
    n3 = 0 // 해운대구
    n4 = 0 // 동래구
    n5 = 0 // 연제구
    n6 = 0 // 수영구
    n7 = 0 // 부산광역시 북구
    n8 = 0 // 부산진구
    n9 = 0 // 남구
    n10 = 0 // 동구
    n11 = 0 // 서구
    n12 = 0 // 부산광역시 중구
    n13 = 0 // 영도구
    n14 = 0 // 사상구
    n15 = 0 // 사하구
    n16 = 0 // 강서구

function call1() { // 총합계

    //지역구 별 중학교 갯수
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req1.onreadystatechange = function() {
        // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            
            var member = xmlDoc.getElementsByName("자치구");

            for( i = 0; i < member.length; i++) {
                if (member[i].firstChild.data == "기장군"){
                    n1+=1;
                }
                if (member[i].firstChild.data == "금정구"){
                    n2+=1;
                }
                if (member[i].firstChild.data == "해운대구"){
                    n3+=1;
                }
                if (member[i].firstChild.data == "동래구"){
                    n4+=1;
                }
                if (member[i].firstChild.data == "연제구"){
                    n5+=1;
                }
                if (member[i].firstChild.data == "수영구"){
                    n6+=1;
                }
                if (member[i].firstChild.data == "북구"){
                    n7+=1;
                }
                if (member[i].firstChild.data == "부산진구"){
                    n8+=1;
                }
                if (member[i].firstChild.data == "남구"){
                    n9+=1;
                }
                if (member[i].firstChild.data == "동구"){
                    n10+=1;
                }
                if (member[i].firstChild.data == "서구"){
                    n11+=1;
                }
                if (member[i].firstChild.data == "중구"){
                    n12+=1;
                }
                if (member[i].firstChild.data == "영도구"){
                    n13+=1;
                }
                if (member[i].firstChild.data == "사상구"){
                    n14+=1;
                }
                if (member[i].firstChild.data == "사하구"){
                    n15+=1;
                }
                if (member[i].firstChild.data == "강서구"){
                    n16+=1;
                }
            }          
        }
    };
}

function call2() { // 총합계
    call1();
    //지역구 별 초등학교 갯수
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req2.onreadystatechange = function() {
// status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
           
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            
            var member = xmlDoc.getElementsByName("자치구");

            for( i = 0; i < member.length; i++) {
                if (member[i].firstChild.data == "기장군"){
                    n1+=1;
                }
                if (member[i].firstChild.data == "금정구"){
                    n2+=1;
                }
                if (member[i].firstChild.data == "해운대구"){
                    n3+=1;
                }
                if (member[i].firstChild.data == "동래구"){
                    n4+=1;
                }
                if (member[i].firstChild.data == "연제구"){
                    n5+=1;
                }
                if (member[i].firstChild.data == "수영구"){
                    n6+=1;
                }
                if (member[i].firstChild.data == "북구"){
                    n7+=1;
                }
                if (member[i].firstChild.data == "부산진구"){
                    n8+=1;
                }
                if (member[i].firstChild.data == "남구"){
                    n9+=1;
                }
                if (member[i].firstChild.data == "동구"){
                    n10+=1;
                }
                if (member[i].firstChild.data == "서구"){
                    n11+=1;
                }
                if (member[i].firstChild.data == "중구"){
                    n12+=1;
                }
                if (member[i].firstChild.data == "영도구"){
                    n13+=1;
                }
                if (member[i].firstChild.data == "사상구"){
                    n14+=1;
                }
                if (member[i].firstChild.data == "사하구"){
                    n15+=1;
                }
                if (member[i].firstChild.data == "강서구"){
                    n16+=1;
                }
            }
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
            //@@@@@@@@@@@@@@@@@@@@@@최종  ID@@@@@@@@@@@@@@@@@@@@@@@//
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
            document.getElementById("n1").innerHTML = n1; // 기장군
            document.getElementById("n2").innerHTML = n2; // 부산광역시 금정구
            document.getElementById("n3").innerHTML = n3; // 해운대구
            document.getElementById("n4").innerHTML = n4; // 동래구
            document.getElementById("n5").innerHTML = n5; // 연제구
            document.getElementById("n6").innerHTML = n6; // 수영구
            document.getElementById("n7").innerHTML = n7; // 부산광역시 북구
            document.getElementById("n8").innerHTML = n8; // 부산진구
            document.getElementById("n9").innerHTML = n9; // 남구
            document.getElementById("n10").innerHTML = n10; // 동구
            document.getElementById("n11").innerHTML = n11; // 서구
            document.getElementById("n12").innerHTML = n12; // 부산광역시 중구
            document.getElementById("n13").innerHTML = n13; //영도구
            document.getElementById("n14").innerHTML = n14; //사상구
            document.getElementById("n15").innerHTML = n15; //사상구
            document.getElementById("n16").innerHTML = n16; //강서구
        }
    };
}

function call3() { // 총합계
    call2();
    //지역구 별 고등학교 의 갯수
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req3.onreadystatechange = function() {
// status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
        
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            
            var member = xmlDoc.getElementsByName("자치구");

            for( i = 0; i < member.length; i++) {
                if (member[i].firstChild.data == "기장군"){
                    n1+=1;
                }
                if (member[i].firstChild.data == "금정구"){
                    n2+=1;
                }
                if (member[i].firstChild.data == "해운대구"){
                    n3+=1;
                }
                if (member[i].firstChild.data == "동래구"){
                    n4+=1;
                }
                if (member[i].firstChild.data == "연제구"){
                    n5+=1;
                }
                if (member[i].firstChild.data == "수영구"){
                    n6+=1;
                }
                if (member[i].firstChild.data == "북구"){
                    n7+=1;
                }
                if (member[i].firstChild.data == "부산진구"){
                    n8+=1;
                }
                if (member[i].firstChild.data == "남구"){
                    n9+=1;
                }
                if (member[i].firstChild.data == "동구"){
                    n10+=1;
                }
                if (member[i].firstChild.data == "서구"){
                    n11+=1;
                }
                if (member[i].firstChild.data == "중구"){
                    n12+=1;
                }
                if (member[i].firstChild.data == "영도구"){
                    n13+=1;
                }
                if (member[i].firstChild.data == "사상구"){
                    n14+=1;
                }
                if (member[i].firstChild.data == "사하구"){
                    n15+=1;
                }
                if (member[i].firstChild.data == "강서구"){
                    n16+=1;
                }
            }
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
            //@@@@@@@@@@@@@@@@@@@@@@최종  ID@@@@@@@@@@@@@@@@@@@@@@@//
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
            document.getElementById("n1").innerHTML = n1; // 기장군
            document.getElementById("n2").innerHTML = n2; // 부산광역시 금정구
            document.getElementById("n3").innerHTML = n3; // 해운대구
            document.getElementById("n4").innerHTML = n4; // 동래구
            document.getElementById("n5").innerHTML = n5; // 연제구
            document.getElementById("n6").innerHTML = n6; // 수영구
            document.getElementById("n7").innerHTML = n7; // 부산광역시 북구
            document.getElementById("n8").innerHTML = n8; // 부산진구
            document.getElementById("n9").innerHTML = n9; // 남구
            document.getElementById("n10").innerHTML = n10; // 동구
            document.getElementById("n11").innerHTML = n11; // 서구
            document.getElementById("n12").innerHTML = n12; // 부산광역시 중구
            document.getElementById("n13").innerHTML = n13; //영도구
            document.getElementById("n14").innerHTML = n14; //사상구
            document.getElementById("n15").innerHTML = n15; //사상구
            document.getElementById("n16").innerHTML = n16; //강서구
        }
    };
}



