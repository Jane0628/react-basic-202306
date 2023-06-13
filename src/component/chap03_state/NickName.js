import React, { useState } from 'react'

const NickName = () => {

  // useState는 배열을 리턴하는데, 0번에는 상태변수값, 1번에는 상태변수값을 변경할 수 있는 setter함수를 제공한다.
  // useState의 리턴 타입이 배열이기 때문에 구조 분해 할당을 통해 쉽게 이름을 지어서 사용 가능하다.
  // (상태변수값, set상태변수값)으로 짓는 것이 관례이다.
  const [nickName, setNickname] = useState('김철수');
  // console.log('result : ', result);

  // let nickName = '김철수';

  const changeNickname = e => {
    console.log('changeNickname called!!!');
    // nickName = '척척박사';
    setNickname('척척박사'); // useState의 setter를 호출해서 상태변수의 값 변경.
    console.log('nickname : ', nickName);
  }

  return (
    <>
      <h1>Hello~~~ {nickName}</h1>
      <button className='btn' onClick={changeNickname}>버튼</button>
      <button className='btn' onClick={() => setNickname('척척석사')}>버튼2</button>
    </>
  )
}

export default NickName