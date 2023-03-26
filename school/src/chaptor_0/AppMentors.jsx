import React, { useReducer, useState } from "react";
import PersonReducer from "./reducer/Person-reducer";
export default function AppMentors() {
  //   const [user, setUser] = useState(input_data);
  const [user, dispatch] = useReducer(PersonReducer, input_data);

  const addAge = () => {
    const age = prompt("추억할 시절을 알려주세요");
    const food = prompt("좋아했던 음식을 알려주세요");
    dispatch({ type: "added", age, food });
  };
  const modifyFood = () => {
    const age = prompt("추억할 시절을 알려주세요");
    const new_food = prompt("좋아했던 음식을 알려주세요");
    dispatch({ type: "updated", age, new_food });
  };
  const deleteAge = () => {
    const age = prompt("추억할 시절을 알려주세요");
    dispatch({ type: "deleted", age });
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
          <button onClick={addAge}>나이별 음식 추가하기</button>
          <button onClick={modifyFood}>나이별 음식 수정하기</button>
          <button onClick={deleteAge}>나이별 음식 삭제하기</button>
        </div>
      </div>
    </>
  );
}

const input_data = {
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
