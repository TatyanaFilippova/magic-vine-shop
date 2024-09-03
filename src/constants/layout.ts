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
