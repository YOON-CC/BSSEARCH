// map.html에 들어갈 js
// main_text
var main_text = document.querySelector(".main_text");

// 데이터를 담을 배열
var data_list = {}; //show_data의 정보들이 들어갈 배열
var map_list = {}; //m 이미지 정보들이 들어갈 배열

// 배열에 데이터 삽입
for (var i = 1; i <= 16; i++) {
	data_list[i] = document.querySelector(".show_data"+i);

	//map_list.img : 이미지의 정보들 삽입
	//map_list.text : 구가 쓰여있는 정보를 삽입
	map_list[i] = {img:document.getElementById("m"+i),text:document.querySelector("#CD"+i)};
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 데이터 삭제 함수(초기화 함수)
function del_data(){
	for(var i = 1; i<=16;i++){
		// 데이터들을 초기화
		data_list[i].style.display = "none";

		//지도 이미지를 초기화
		map_list[i].img.innerHTML = '<img src="img/map/'+i+'.png">';
		// 텍스트 배경 초기화
		map_list[i].text.style.background = 'rgba(0, 117, 184, 0.5)';
	}
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 기장군 변수
// querSelelctor로 기장군에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m1 = document.querySelector(".m1"); 
// 박스로 기장군 되어있는 글씨 클릭시 데이터를 화면에 출력 
var click_text1 = document.querySelector(".show_data1");

	// 지도 클릭 이벤트
	m1.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text1.style.display = "block";

		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경 
		map_list[1].img.innerHTML = '<img src="img/map/1a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[1].text.style.background = 'rgba(255, 186, 0)';
	}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 금정구 변수
// querSelelctor로 금정구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m2 = document.querySelector(".m2");
// 박스로 금정구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text2 = document.querySelector(".show_data2");

// 지도 클릭 이벤트

	m2.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text2.style.display = "block";


		//  클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[2].img.innerHTML = '<img src="img/map/2a.png">';
		//  클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[2].text.style.background = 'rgba(255, 186, 0)';
	}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 해운대구 변수
// querSelelctor로 해운대구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m3 = document.querySelector(".m3");
// 박스로 해운대구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text3 = document.querySelector(".show_data3");

// 지도 클릭 이벤트

	m3.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text3.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[3].img.innerHTML = '<img src="img/map/3a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[3].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 동래구 변수
// querSelelctor로 동래구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m4 = document.querySelector(".m4");
// 박스로 동래구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text4 = document.querySelector(".show_data4");

// 지도 클릭 이벤트

	m4.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text4.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[4].img.innerHTML = '<img src="img/map/4a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[4].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 연제구 변수
// querSelelctor로 연제구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m5 = document.querySelector(".m5");
// 박스로 연제구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text5 = document.querySelector(".show_data5");

// 지도 클릭 이벤트

	m5.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text5.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[5].img.innerHTML = '<img src="img/map/5a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[5].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 수영구 변수
// querSelelctor로 수영구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m6 = document.querySelector(".m6");
// 박스로 수영구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text6 = document.querySelector(".show_data6");

// 지도 클릭 이벤트

	m6.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text6.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[6].img.innerHTML = '<img src="img/map/6a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[6].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 북구 변수
// querSelelctor로 북구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m7 = document.querySelector(".m7");
// 박스로 북구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text7 = document.querySelector(".show_data7");

// 지도 클릭 이벤트

	m7.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text7.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[7].img.innerHTML = '<img src="img/map/7a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[7].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 진구 변수
// querSelelctor로 진구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m8 = document.querySelector(".m8");
// 박스로 진구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text8 = document.querySelector(".show_data8");

// 지도 클릭 이벤트

	m8.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text8.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[8].img.innerHTML = '<img src="img/map/8a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[8].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 남구
// querSelelctor로 남구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m9 = document.querySelector(".m9");
// 박스로 남구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text9 = document.querySelector(".show_data9");

// 지도 클릭 이벤트

	m9.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text9.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[9].img.innerHTML = '<img src="img/map/9a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[9].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 동구
// querSelelctor로 동구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m10 = document.querySelector(".m10");
// 박스로 동구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text10 = document.querySelector(".show_data10");

// 지도 클릭 이벤트

	m10.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text10.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[10].img.innerHTML = '<img src="img/map/10a.png">';
		//  클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[10].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 서구
// querSelelctor로 서구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m11 = document.querySelector(".m11");
// 박스로 서구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text11 = document.querySelector(".show_data11");

// 지도 클릭 이벤트

	m11.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text11.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[11].img.innerHTML = '<img src="img/map/11a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[11].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 중구
// querSelelctor로 중구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m12 = document.querySelector(".m12");
// 박스로 중구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text12 = document.querySelector(".show_data12");

// 지도 클릭 이벤트

	m12.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text12.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[12].img.innerHTML = '<img src="img/map/12a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[12].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 영도구
// querSelelctor로 영도구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m13 = document.querySelector(".m13");
// 박스로 영도구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text13 = document.querySelector(".show_data13");

// 지도 클릭 이벤트

	m13.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text13.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[13].img.innerHTML = '<img src="img/map/13a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[13].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 사상구
// querSelelctor로 사상구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m14 = document.querySelector(".m14");
// 박스로 사상구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text14 = document.querySelector(".show_data14");

// 지도 클릭 이벤트

	m14.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text14.style.display = "block";


		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[14].img.innerHTML = '<img src="img/map/14a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[14].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 사하구
// querSelelctor로 사하구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m15 = document.querySelector(".m15");
// 박스로 사하구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text15 = document.querySelector(".show_data15");

// 지도 클릭 이벤트

	m15.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text15.style.display = "block";

		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[15].img.innerHTML = '<img src="img/map/15a.png">';
		// 클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경
		map_list[15].text.style.background = 'rgba(255, 186, 0)';
	}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 강서구
// querSelelctor로 강서구에 일치하는 학교 명와 학교 주소의 문서의 element 변환
var m16 = document.querySelector(".m16");
// 박스로 강서구 되어있는 글씨 클릭시 데이터를 화면에 출력
var click_text16 = document.querySelector(".show_data16");

// 지도 클릭 이벤트

	m16.onclick = function(){
		// 클릭시 기존 css none
		del_data();
		main_text.style.display = "none";
		click_text16.style.display = "block";

		// 클릭시 지도에서 클릭한 구의 이미지를 색상이 있는 이미지로 변경
		map_list[16].img.innerHTML = '<img src="img/map/16a.png">';
		//클릭시 학교와 주소가 나오는 텍스트 박스의 테두리 기존 text background색상 변경v
		map_list[16].text.style.background = 'rgba(255, 186, 0)';
	}