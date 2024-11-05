import { media } from "@/constants/media";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;

  ${media.phone} {
    display: block;
    padding-top: 150px;
  }
`;

const IconFilters = () => {
  return (
    <Wrapper>
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Filter</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Filter">
            <rect
              id="Rectangle"
              fill-rule="nonzero"
              x="0"
              y="0"
              width="24"
              height="24"
            ></rect>
            <line
              x1="4"
              y1="5"
              x2="16"
              y2="5"
              id="Path"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="4"
              y1="12"
              x2="10"
              y2="12"
              id="Path"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="14"
              y1="12"
              x2="20"
              y2="12"
              id="Path"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="8"
              y1="19"
              x2="20"
              y2="19"
              id="Path"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <circle
              id="Oval"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
              cx="18"
              cy="5"
              r="2"
            ></circle>
            <circle
              id="Oval"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
              cx="12"
              cy="12"
              r="2"
            ></circle>
            <circle
              id="Oval"
              stroke="#526468"
              stroke-width="2"
              stroke-linecap="round"
              cx="6"
              cy="19"
              r="2"
            ></circle>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default IconFilters;