/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React, { useState } from "react";
import { LottieItem } from "./LottieItem";
import angry from "./animationData/angry.json";
import smile from "./animationData/smile.json";
import jump from "./animationData/jump.json";
import BackgroundRed from "./images/BackgroundRed.png";
import BackgroundAngry from "./images/BackgroundAngry.jpg";

export const Animation = () => {
  const [isJump, setIsJump] = useState(true);
  const [isAngry, setIsAngry] = useState(false);
  const [isSmile, setIsSmile] = useState(false);

  const handleClickJump = () => {
    setIsJump(true);
    setIsAngry(false);
    setIsSmile(false);
  };
  const handleClickAngry = () => {
    setIsAngry(true);
    setIsJump(false);
    setIsSmile(false);
  };
  const handleClickSmile = () => {
    setIsSmile(true);
    setIsAngry(false);
    setIsJump(false);
  };
  return (
    <>
      <div css={[backgroundImage(isAngry)]}>
        <div css={container}>
          <div css={serif}>Qiitanに話しかけよう！</div>
          <div css={stage}>
            {isJump && <LottieItem animation={jump} loop={true} />}
            {isSmile && <LottieItem animation={smile} loop={false} />}
            {isAngry && <LottieItem animation={angry} loop={false} />}
          </div>

          <button onClick={handleClickJump} css={button}>
            ジャンプして！
          </button>
          <button onClick={handleClickSmile} css={button}>
            笑って！
          </button>
          <button onClick={handleClickAngry} css={button}>
            怒った…？
          </button>
        </div>
      </div>
    </>
  );
};

const scroll = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

const backgroundImage = (isAngry: boolean) => css`
  ${isAngry
    ? `
    background: url(${BackgroundAngry}) no-repeat top center/100%;
  `
    : `
    background: url(${BackgroundRed}) repeat-x center center/100vw;
  `}
  animation: ${isAngry || scroll} 60s linear infinite;
  height: 812px;
  margin: auto;
  position: relative;
  width: 375px;
`;

const serif = css`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: bold;
  margin: auto;
  padding: 24px 16px;
  position: sticky;
  text-align: center;
  top: 16px;

  &::before {
    border: 15px solid transparent;
    border-top: 15px solid #fff;
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 100%;
  }
`;
const container = css`
  margin: auto;
  padding: 24px 16px;
`;
const stage = css`
  height: 375px;
  margin-top: 24px;
`;

const button = css`
  background: #fff;
  margin-top: 8px;
  border: 1px solid #b81c22;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  width: 100%;
  &:hover {
    background: #b81c22;
    color: #d7c447;
  }
`;
