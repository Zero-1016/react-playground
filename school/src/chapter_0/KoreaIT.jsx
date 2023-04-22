import React, { useEffect, useState } from "react";
import "./korea.css";

export default function KoreaIT() {
  const [taps, setTaps] = useState(taps_data);
  const [blocks, setBlocks] = useState(blocks_data);
  const [text, setText] = useState("1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오.");
  useEffect(() => setText(() => "글자가 변경되었습니다."), []);
  const selectBlock = (v) => {
    setTaps((taps) =>
      taps.map((tap) => {
        return tap.name === v.target.innerHTML
          ? { ...tap, status: "active" }
          : { ...tap, status: "none" };
      })
    );
    setBlocks((blocks) =>
      blocks.map((block) => {
        return block.name.split(" ")[0] === v.target.innerHTML
          ? { ...block, status: "block" }
          : { ...block, status: "none" };
      })
    );
  };

  return (
    <div className="content">
      <div className="disp" id="display">
        <form>
          <p>{text}</p>
        </form>
      </div>

      <p>2.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오</p>
      <ul className="tab_host">
        {taps.map((tap, i) => (
          <li
            style={{
              border: tap.status === "active" ? "2px solid red" : "1px solid black",
              color: tap.status === "active" ? "red" : "black",
            }}
            onClick={selectBlock}
            key={i}
            className="tab"
          >
            {tap.name}
          </li>
        ))}
      </ul>

      <p>3. 위의 탭 클릭시 아래의 컨텐츠중 탭과 숫자가 같은 것만 보이게 하시오.</p>
      <ul className="tab_body">
        {blocks.map((block, i) => (
          <li
            key={i}
            style={{ display: block.status === "none" ? "none" : "block" }}
            className="block"
          >
            {block.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
const taps_data = [
  { name: "탭1", status: "none" },
  { name: "탭2", status: "none" },
  { name: "탭3", status: "none" },
  { name: "탭4", status: "none" },
  { name: "탭5", status: "none" },
];
const blocks_data = [
  { name: "탭1 컨텐츠", status: "none" },
  { name: "탭2 컨텐츠", status: "none" },
  { name: "탭4 컨텐츠", status: "none" },
  { name: "탭3 컨텐츠", status: "none" },
  { name: "탭5 컨텐츠", status: "none" },
];
