import { ColorfulMessage } from "./components/ColorfulMessage";
import { useEffect, useState } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };
  // ここのif分の理解がまだあまりできていない気がしている。ので復習しよう。

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
    console.log("--useEffect--");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue"> お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^O^)</p>}
    </>
  );
};
