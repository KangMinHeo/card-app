import styled from 'styled-components'
/* 목록 */
export const Menu = styled.div`
  top: 0px;
  width: 100%; height: 80px;
  font-size: 18px;
  color: #FFFFFF;
  display: flex; 
  justify-content: center;
  align-items: center;  
`

/* 카드를 모아두는 공간 */
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%; margin: 0 auto;

  @media all and (max-width: 1500px){
    width: 80%;
  }
  @media all and (max-width: 1000px){
    width: 100%;
  }
`
/* 카드 */
export const Item = styled.div`
  cursor: pointer;
  width: 15%; height: 300px;
  margin: 2%;
  border-radius: 20px;
  color: #FFFFFF;
  background-color: #393939;
  overflow: hidden;
  }
  @media all and (max-width: 800px){
    width: 46%;
  }
  @media all and (max-width: 500px){
    width: 98%;
  }

  &:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
/* 이미지 */
export const Image = styled.div`
  height: 200px; 
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: contain;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
/* 프로토 타입용 임시 */
export const Temp = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`