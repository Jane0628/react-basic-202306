import React from 'react'
import FoodItem from './FoodItem';
import SayHello from '../../SayHello';

const FoodList = () => {

  // fetch를 통해 서버에서 음식 목록을 json으로 받아오겠죠?
  const food = {
    id: 327432,
    foodList: [
      {
        fName: '짜장면',
        price: 6000,
        id: 'chinese'
      },
      {
        fName: '해물파전',
        price: 12000,
        id: 'korean'
      },
      {
        fName: '가츠동',
        price: 8000,
        id: 'japanese'
      },
      {
        fName: '김치찌개',
        price: 5000,
        id: 'korean'
      },
      {
        fName: '탕수육',
        price: 20000,
        id: 'chinese'
      }
    ]
  }

  return (
    <ul>
      <SayHello>
        <a href='https://www.naver.com'>네이버 링크</a>
      </SayHello>
      <SayHello>
        <a href='https://www.google.com'>구글 링크</a>
      </SayHello>

      {
        /*
          <FoodItem foodId='chinese' foodName='짜장면' foodPrice={6000} />
          <FoodItem foodId='korean' foodName='해물파전' foodPrice={12000} />
          <FoodItem foodId='japanese' foodName='가츠동' foodPrice={8000} />
        */

        food.foodList.map(f => <FoodItem foodName={f.fName} foodPrice={f.price} foodId={f.id} />)

      }
    </ul>
  );
}

export default FoodList;