import React, { useReducer, useState } from "react";
import FoodReducer from "./reducer/FoodReducer.js";
export default function AppFood() {
  //   const [user, Setuser] = useState(data);
  const [user, dispatch] = useReducer(FoodReducer, data);
  const addFood = () => {
    const new_age = prompt("추억할 때를 입력해주세요");
    const new_food = prompt("좋아했던 음식을 입력해주세요");
    dispatch({ type: "added", new_age, new_food });
  };
  const updateFood = () => {
    const new_age = prompt("추억할 때를 입력해주세요");
    const new_food = prompt("좋아했던 음식을 입력해주세요");
    dispatch({ type: "updated", new_age, new_food });
  };

  const deleteFood = () => {
    const delete_age = prompt("추억할 때를 입력해주세요");
    dispatch({ type: "deleted", delete_age });
  };
  return (
    <>
      <div>
        <div>
          <h1>{user.name}</h1>
          <p>나이 : {user.age}</p>
          <ul>
            그때의 추억을 회상하며.
            {user.favorites.map((favorite, index) => (
              <li key={index}>
                {favorite.class}때 좋아했던 음식은 {favorite.food}
              </li>
            ))}
          </ul>
          <button onClick={addFood}>나이별 음식 추가하기</button>
          <button onClick={updateFood}>나이별 음식 수정하기</button>
          <button onClick={deleteFood}>나이별 음식 삭제하기</button>
        </div>
      </div>
    </>
  );
}

const data = {
  name: "지형",
  age: 23,
  favorites: [
    {
      class: "초등학생",
      food: "라면",
    },
    {
      class: "중학생",
      food: "육회",
    },
  ],
};
