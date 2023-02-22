import React from "react";

export default function AppMentors() {
  const User = {
    name: "지형",
    age: 23,
    gender: "male",
    favorite: [
      {
        age: 13,
        food: "라면",
      },
      {
        age: 23,
        food: "육회",
      },
    ],
  };
  return (
    <>
      <div>
        <div>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
          <ul>{user.gender}</ul>
          {User.favorite.map((favorite, index) => {
            <li key={index}>
              {favorite.age} {favorite.food}
            </li>;
          })}
          <button>멘토의 이름을 바꾸기</button>
        </div>
      </div>
    </>
  );
}
