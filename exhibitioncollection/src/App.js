import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import Create from './components/Create/Create';

const object = [
  {
    idx : 0,
    img : "images/img1.png",
    userImg : "images/user1.svg",
    name : "Goods",
    subName : " : 인플루언서의 로그를 통한 가치소비 플랫폼",
    category : "UX/UI",
    term : "2020.03 ~ 2020.10",
    madeBy : "Jin Kim",
    active : "OB",
    detail : "인플루언서의 로그를 통한 가치소비 플랫폼 Goods입니다."
  },
  {
    idx : 1,
    img : "images/img2.png",
    userImg : "images/user2.png",
    name : "AiDer",
    subName : " (High-Rise Emergency Mobility System)",
    category : "Mobility/UX/UI",
    term : "2020.01 ~ 2020.11",
    madeBy : "John Ahn",
    active : "YB",
    detail : "AiDer는 2030년 스마트 시티를 배경으로한 5층 이상의 고층 건물에 상주하는 구급 모빌리티 서비스입니다. AiDer는 고층 건물에서 발생한 심정지 환자의 생존율이 저층보다 2배 이상 낮다는 문제점을 해결하기 위해 기획하게 되었습니다. AiDer의 응급 시스템 구축을 위해 구조과정에서 발생하는 다양한 이해관계자를 대상으로 인터뷰를 진행하여, 환자 및 보호자, 구조대원의 니즈를 반영한 솔루션을 제안합니다. AiDer의 배경인 2030년 스마트 시티에서는 고층 건물 내 응급환자 발생 시 홈IoT 서비스를 통해 응급환자 발생을 인지합니다. 홈 IoT는 건물 외벽에서 승하강 하는 AiDer의 EV(Elevator) 모빌리티를 호출하는 동시에 병원과의 원격진료를 시작합니다. 응급 환자를 태운 EV 모빌리티가 주행 모빌리티에 도킹 되면, 병원까지 최적의 이동 경로를 파악하여 신속하고 안전한 이동 경험을 제공합니다. 모빌리티 내 AI 및 시뮬레이션 가이드를 통해 환자의 상태를 쉽게 파악하고 실시간으로 의료진과 소통하며 신속한 응급처치를 돕습니다. 병원 도착 전 환자의 정보를 파악한 병원은 환자 도착 시 신속한 처치를 시작합니다."
  },
  {
    idx : 2,
    img : "images/img3.png",
    userImg : "images/user3.svg",
    name : "Bliss",
    subName : " X Surf",
    category : "Automotive Design/UX/UI",
    term : "2020.02 ~ 2020.04",
    madeBy : "Shin Kim",
    active : "YB",
    detail : "블리스는 다양한 영역(여행, 문화, 비즈니스)에서 프리미엄 서비스를 제공하는 벤틀리 소유의 새로운 브랜드입니다. 어느 여행지를 가던 당신에게 연결되는 극대화된 VIP 서비스를 끊임없이 제공합니다. 벤틀리의 미래 컨셉 자동차 서비스와 함께라면, 사용자는 어디서든지 어느 경험이던 최고의 서비스를 경험할 수 있습니다. 블리스는 벤틀리와 함게 다양한 산업과 연결되기를 원하고 다양한 산업과 함께 성장하기를 기대하고 있습니다."
  },
  {
    idx : 3,
    img : "images/img4.png",
    userImg : "images/user3.svg",
    name : "Kurly's House",
    subName : " : Market Kurly 비상설 공간 디자인",
    category : "UX/UI",
    term : "2020.02 ~ 2020.08",
    madeBy : "Kurly",
    active : "OB",
    detail : "늘 우리 집으로만 오던 마켓컬리에서 고객이 직접 컬리네 집으로 찾아가는 Brand Reverse Experience를 공간에서 느낄 수 있도록 합니다. 앱에서 체험할 수 없었던 브랜드 이미지와 가치를 방문하는 사람들에게 전달합니다."
  }
]

function App() {

  return (
    <Router>
      <Header></Header>
        <Switch>
          {/* <Route exact path='/' component={Home}></Route> */}
          <Route exact path='/' render={(props)=>(<Home props={props} object={object} ></Home>)}></Route>
          <Route exact path='/create' render={(props)=>(<Create props={props} />)}></Route>
          <Route exact path='/:id' render={(props)=>(<Detail props={props}/>)}></Route>
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
    </Router>
  );
}

export default App;
