import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소
import Join from "./component/Join";
import Main from "./component/Main";
import MyCount from "./component/MyCount";

import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정1
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 페이지 이동을 위한 설정 2. 전체 요소를
    // BrowserRouter 로 감싸기.
    // 구성요소는 Routes -> Route로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index -> 주소에서 : /) 페이지를 App 또는 Main.js로 해도 됨 */}
        <Route path="main" element={<Main />} />
        {/* 주소: http://localhost:3002/join  -> 해당 페이지 안내 :  element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />
        {/* 추가, 3장에서 연습했던, MyComp라는 컴포넌트 페이지 이동에 추가해보기 */}
        <Route path="mycount" element={<MyCount />} />
      </Routes>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* antd 튜토리얼 샘플 가져오기 테스트 */}
          <div style={{ padding: "0 24px" }}>
            <h1>antd version: {version}</h1>
            <Space>
              <DatePicker />
              <Button type="primary">Primary Button</Button>
            </Space>
          </div>

          <Join />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
