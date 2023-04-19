import React, { useEffect, useState } from "react";

export default function AppChampion() {
  const [champions, setChampion] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    fetch(`data/${checked ? "character" : "character2"}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("😀 뜨끈한 데이터를 받아왔어요");
        setChampion(data);
      });
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        name="game"
        id="game"
        value={checked}
        onChange={() => setChecked((e) => !e)}
      />
      <label>Show only MMORPG 🌃</label>
      <ul>
        {champions.map((champion) => (
          <li key={champion.id}>
            <article>
              <h4>{champion.name}</h4>
              <h5>{champion.price}</h5>
              <div>
                <span>스킬목록</span>
                <div>&nbsp;</div>
                <div>{champion.skil.q}</div>
                <div>{champion.skil.w}</div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
