import React from "react";
import Comment from "./Comment";

export default function Commentlist() {
  const users = [
    {
      id: 1,
      name: "지수",
      comment: "지수의 댓글입니다.",
      profileImg:
        "https://search.pstatic.net/common?type=n&size=150x168&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202303%2F20230327170438473.jpg",
    },
    {
      id: 2,
      name: "리사",
      comment: "리사의 댓글입니다.",
      profileImg:
        "https://search.pstatic.net/common?type=n&size=150x168&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202209%2F20220913133506551.jpg",
    },
    {
      id: 3,
      name: "로제",
      comment: "로제의 댓글입니다.",
      profileImg:
        "https://search.pstatic.net/common?type=n&size=150x168&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202209%2F20220913133442989.jpg",
    },
    {
      id: 4,
      name: "제니",
      comment: "제니의 댓글입니다.",
      profileImg:
        "https://search.pstatic.net/common?type=n&size=150x168&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202209%2F20220913133401458.jpg",
    },
  ];

  const styles = {
    ul: {
      padding: "0px",
    },
  };

  return (
    <ul style={styles.ul}>
      {users.map((user) => (
        <Comment
          key={user.id}
          name={user.name}
          comment={user.comment}
          profileImg={user.profileImg}
        ></Comment>
      ))}
    </ul>
  );
}
