"use strict";

const user = {
  name: "지형",
  age: 23,
  favorites: [
    {
      class: "초등학생",
      drama: "태왕사신기",
      food: "왕뚜껑",
    },
    {
      class: "중학생",
      drama: "동이",
      food: "팔도비빔면",
    },
  ],
};

let user1 = { name: "지형" };
let info = { age: 30, gender: "male" };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

let user2 = {
  ...user1,
  ...info,
  age: 23,
  skills: [...fe, ...lang],
};

user1.skills = [...fe, ...lang];

console.log(...fe, ...lang);
console.log(user2);

console.log(...info);
// let info = { age: 30, gender: "male" };
// TypeError: Found non-callable @@iterator
