/*
    배열의 요소 수 만큼 카드 생성

    path : 라우팅이 될 경로
    imagePath : 카드에 표시될 이미지(또는 색상)
    title : 카드 이름(제목)
    character : 특징(설명문) : 카드 밑에 들어갈 내용
    detail : 상세 페이지 들어가면 보여줄 내용(커스텀 요구)
*/

export const contents = [{
    path: "/kt",
    imagePath: "images/kt.jpg",
    title: "KT 위즈",
    character: "1위 : 113전 67승 4무 42패",
    director: "감독 : 이강철",
    detail: "/src/tDetail/kt.html"
},{
    path: "/samsung",
    imagePath: "images/samsung.jpg",
    title: "삼성 라이온즈",
    character: "2위 : 118전 62승 8무 48패",
    director: "감독 : 허삼영",
    detail: "https://www.samsunglions.com/index.asp"
},{
    path: "/lg",
    imagePath: "images/lg.jpg",
    title: "LG 트윈스",
    character: "3위 : 110전 58승 4무 48패",
    director: "감독 : 류지현",
    detail: "http://www.lgtwins.com/"
},{
    path: "/doosan",
    imagePath: "images/doosan.jpg",
    title: "두산 베어스",
    character: "4위 : 111전 55승 5무 51패",
    director: "감독 : 김태형",
    detail: "http://www.doosanbears.com/"
},{
    path: "/ssg_lenders",
    imagePath: "images/ssg_logo.png",
    title: "SSG Renders",
    character: "5위 : 117전 55승 8무 54패",
    director: "감독 : 김원형",
    detail: "http://www.ssglanders.com/"
},{
    path: "/kiwoom",
    imagePath: "images/kiwoom.jpg",
    title: "키움 히어로즈",
    character: "6위 : 117전 57승 4무 56패",
    director: "감독 : 홍원기",
    detail: "http://www.heroesbaseball.co.kr/"
},{
    path: "/nc_dinos",
    imagePath: "images/nc_dinos.png",
    title: "NC Dinos",
    character: "7위 : 111전 53승 4무 54패",
    director: "감독 : 이동욱",
    detail: "http://www.ncdinos.com/"
},{
    path: "/lotte",
    imagePath: "images/lotte.jpg",
    title: "롯데 자이언츠",
    character: "8위 : 115전 52승 3무 60패",
    director: "감독 : 래리 서튼",
    detail: "http://www.giantsclub.com/"
},{
    path: "/kia",
    imagePath: "images/kia.jpg",
    title: "KIA 타이거즈",
    character: "9위 : 110전 42승 6무 62패",
    director: "감독 : 맷 윌리엄스",
    detail: "http://www.kiatigers.co.kr/"
},{
    path: "/hanhaw",
    imagePath: "images/hanhaw.jpg",
    title: "한화 이글스",
    character: "10위 : 118전 42승 8무 68패",
    director: "감독 : 카를로스 수베로",
    detail: "http://www.hanwhaeagles.co.kr/"
}]