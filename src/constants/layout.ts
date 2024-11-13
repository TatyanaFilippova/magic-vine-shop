import { css } from "styled-components";
import { media } from "./media";

export const layout = css`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    width: 100%;
    padding: 0 20px;
  }
`;

export const button = css`
  background: #526468;
  font-size: 20px;
  width: 300px;
  color: white;
  align-items: center;
  margin-bottom: 50px;
  height: 60px;
  margin-top: 10px;

  ${media.phone} {
    font-size: 15px;
    width: 250px;
    margin-bottom: 40px;
    margin-top: 10px;
  }
`;

export const layoutFull = css`
  width: 100%;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    width: 100%;
    padding: 0;
  }
  ${media.phone} {
    width: 100%;
    padding: 0;
  }
`;
