// 중학교 공공 데이터 //

var url = 'https://api.odcloud.kr/api/15050723/v1/uddi:2f90a9a1-4565-4ec2-b30c-f1b35f5a38e1_201711161617?page=1&perPage=172&serviceKey=Ytn9dJBiexAXvOnP0cipTp3w%2B%2BnDsh489I0%2F%2BFgyGsKPTAOQRZAWQLinPx3RI9DbDpA3v5WNusq1T42ja7dYrA%3D%3D&returnType=XML'


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.181191, 129.074533), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

//@@
var a = [];

var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 5 // 클러스터 할 최소 지도 레벨 
});
//지도에 중학교 공공데이터의 학교도로명 주소와 좌표에 따라 마커로 표시 
function loadDoc1() {
    var req = new XMLHttpRequest();
    // onreadystatechange는 서버에서 응답이 도착하면 학교의 xml 데이터를 불러오는 함수를 호출
    req.onreadystatechange = function() {
         // status 를 이벤트로 전달하고 주소가 입력이 되면 동작을 기술하는 함수 
            // ready=4인 경우 현재 응답이 완전히 도착 후 처리, 프로퍼티값이 변경될 때 마다 호출  
        if (this.readyState == 4 && this.status == 200) {
            let i;
            var xmlDoc = req.responseXML;

            var members= [];
            //학교도로명 주소 받아오기 
            var member = xmlDoc.getElementsByName("학교도로명주소");     

            //@@@@@@@@@@@@ 검색 
            // const name = document.getElementById('keyword').value;
            for (i = 0; i < member.length; i++) { 
                members[i] = member[i].firstChild.data; 


                // if(name==member[i].firstChild.data){
                //         geocoder.addressSearch(name , function(result, status) {
                        
                //         // 정상적으로 검색이 완료됐으면 
                //          if (status === kakao.maps.services.Status.OK) {

                //             var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 위, 경도
                //             map.setCenter(coords);

                //         } 
                    
                // });  
                // }
               //@@@@@@@@@@@@
                geocoder.addressSearch(members[i] , function(result, status) {
                    
                    
                    

                    
                    // 정상적으로 검색이 완료됐으면 
                     if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 위, 경도
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

                        //a.push(marker);
                        //console.log(a[i]);

                        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        // 마커 클러스터러를 생성합니다 


                        //console.log(a)
                        clusterer.addMarker(marker, false);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                       // map.setCenter(coords);
                    } 
                    
                });  

            }//반복문
           

        }
    };
    req.open("GET", url, true);
    req.send();
}


loadDoc1();
// 로드


var overlayOn = false, // 지도 위에 로드뷰 오버레이가 추가된 상태를 가지고 있을 변수
    container = document.getElementById('container'), // 지도와 로드뷰를 감싸고 있는 div 입니다
    rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div 입니다


// 로드뷰 객체를 생성합니다 
var rv = new kakao.maps.Roadview(rvContainer); 

// 좌표로부터 로드뷰 파노라마 ID를 가져올 로드뷰 클라이언트 객체를 생성합니다 
var rvClient = new kakao.maps.RoadviewClient(); 

// 로드뷰에 좌표가 바뀌었을 때 발생하는 이벤트를 등록합니다 
kakao.maps.event.addListener(rv, 'position_changed', function() {

    // 현재 로드뷰의 위치 좌표를 얻어옵니다 
    var rvPosition = rv.getPosition();

    // 지도의 중심을 현재 로드뷰의 위치로 설정합니다
    map.setCenter(rvPosition);

    // 지도 위에 로드뷰 도로 오버레이가 추가된 상태이면
    if(overlayOn) {
        // 마커의 위치를 현재 로드뷰의 위치로 설정합니다
        marker.setPosition(rvPosition);
    }
});

// 마커 이미지를 생성합니다
var markImage = new kakao.maps.MarkerImage(
    'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
    new kakao.maps.Size(26, 46),
    {
        // 스프라이트 이미지를 사용합니다.
        // 스프라이트 이미지 전체의 크기를 지정하고
        spriteSize: new kakao.maps.Size(1666, 168),
        // 사용하고 싶은 영역의 좌상단 좌표를 입력합니다.
        // background-position으로 지정하는 값이며 부호는 반대입니다.
        spriteOrigin: new kakao.maps.Point(705, 114),
        offset: new kakao.maps.Point(13, 46)
    }
);

// 드래그가 가능한 마커를 생성합니다
var marker = new kakao.maps.Marker({
    image : markImage,
    position: mapContainer,
    draggable: true
});

// 마커에 dragend 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'dragend', function(mouseEvent) {

    // 현재 마커가 놓인 자리의 좌표입니다 
    var position = marker.getPosition();

    // 마커가 놓인 위치를 기준으로 로드뷰를 설정합니다
    toggleRoadview(position);
});

//지도에 클릭 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    
    // 지도 위에 로드뷰 도로 오버레이가 추가된 상태가 아니면 클릭이벤트를 무시합니다 
    if(!overlayOn) {
        return;
    }

    // 클릭한 위치의 좌표입니다 
    var position = mouseEvent.latLng;

    // 마커를 클릭한 위치로 옮깁니다
    marker.setPosition(position);

    // 클락한 위치를 기준으로 로드뷰를 설정합니다
    toggleRoadview(position);
});

// 전달받은 좌표(position)에 가까운 로드뷰의 파노라마 ID를 추출하여
// 로드뷰를 설정하는 함수입니다
function toggleRoadview(position){
    rvClient.getNearestPanoId(position, 50, function(panoId) {
        // 파노라마 ID가 null 이면 로드뷰를 숨깁니다
        if (panoId === null) {
            toggleMapWrapper(true, position);
        } else {
         toggleMapWrapper(false, position);

            // panoId로 로드뷰를 설정합니다
            rv.setPanoId(panoId, position);
        }
    });
}

// 지도를 감싸고 있는 div의 크기를 조정하는 함수입니다
function toggleMapWrapper(active, position) {
    if (active) {

        // 지도를 감싸고 있는 div의 너비가 100%가 되도록 class를 변경합니다 
        container.className = '';

        // 지도의 크기가 변경되었기 때문에 relayout 함수를 호출합니다
        map.relayout();

        // 지도의 너비가 변경될 때 지도중심을 입력받은 위치(position)로 설정합니다
        map.setCenter(position);
    } else {

        // 지도만 보여지고 있는 상태이면 지도의 너비가 50%가 되도록 class를 변경하여
        // 로드뷰가 함께 표시되게 합니다
        if (container.className.indexOf('view_roadview') === -1) {
            container.className = 'view_roadview';

            // 지도의 크기가 변경되었기 때문에 relayout 함수를 호출합니다
            map.relayout();

            // 지도의 너비가 변경될 때 지도중심을 입력받은 위치(position)로 설정합니다
            map.setCenter(position);
        }
    }
}

// 지도 위의 로드뷰 도로 오버레이를 추가,제거하는 함수입니다
function toggleOverlay(active) {
    if (active) {
        overlayOn = true;

        // 지도 위에 로드뷰 도로 오버레이를 추가합니다
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

        // 지도 위에 마커를 표시합니다
        marker.setMap(map);

        // 마커의 위치를 지도 중심으로 설정합니다 
        marker.setPosition(map.getCenter());

        // 로드뷰의 위치를 지도 중심으로 설정합니다
        toggleRoadview(map.getCenter());
    } else {
        overlayOn = false;

        // 지도 위의 로드뷰 도로 오버레이를 제거합니다
        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

        // 지도 위의 마커를 제거합니다
        marker.setMap(null);
    }
}

// 지도 위의 로드뷰 버튼을 눌렀을 때 호출되는 함수입니다
function setRoadviewRoad() {
    var control = document.getElementById('roadviewControl');

    // 버튼이 눌린 상태가 아니면
    if (control.className.indexOf('active') === -1) {
        control.className = 'active';

        // 로드뷰 도로 오버레이가 보이게 합니다
        toggleOverlay(true);
    } else {
        control.className = '';

        // 로드뷰 도로 오버레이를 제거합니다
        toggleOverlay(false);
    }
}

// 로드뷰에서 X버튼을 눌렀을 때 로드뷰를 지도 뒤로 숨기는 함수입니다
function closeRoadview() {
    var position = marker.getPosition();
    toggleMapWrapper(true, position);
}



