import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './History.css';

function HistoryPage({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  const rank= () =>{
    alert("아직 구현중에 있습니다.")
  };

  useEffect(() => {
    console.log(history);
    return () => {
    };
  }, [history]);

  return (
    <div>
      <button onClick={goHome}>홈으로</button> &emsp; <button onClick={goBack}>뒤로가기</button> &emsp; <button onClick={rank}>팀순위</button>
    </div>
  );
}

export default HistoryPage;