import React, { useState } from 'react';

export default function AppMentors() {
    const [user, setUser] = useState({
        name: '지형',
        age: 23,
        favorites: [
            {
                class: '초등학생',
                food: '라면',
            },
            {
                class: '중학생',
                food: '육회',
            },
        ],
    });

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
                    <button
                        onClick={() => {
                            const age = prompt('추억할 시절을 알려주세요');
                            const food = prompt('좋아했던 음식을 알려주세요');
                            setUser((user) => ({
                                ...user,
                                favorites: [...user.favorites, { class: age, food }],
                            }));
                        }}
                    >
                        나이별 음식 추가하기
                    </button>
                    <button
                        onClick={() => {
                            const age = prompt('추억할 시절을 알려주세요');
                            const food = prompt('좋아했던 음식을 알려주세요');
                            setUser((user) => ({
                                // state 불변성
                                ...user,
                                favorites: [
                                    ...user.favorites.map((favorite) =>
                                        favorite.class === age ? { ...favorite, food } : favorite
                                    ),
                                ],
                            }));
                        }}
                    >
                        나이별 음식 수정하기
                    </button>
                    <button
                        onClick={() => {
                            const age = prompt('추억할 시절을 알려주세요');

                            setUser((user) => ({
                                ...user,
                                favorites: [...user.favorites.filter((favorite) => favorite.class !== age)],
                            }));
                        }}
                    >
                        나이별 음식 삭제하기
                    </button>
                </div>
            </div>
        </>
    );
}
