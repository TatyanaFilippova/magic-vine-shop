import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;

const Filters = () => {
  return (
    <Wrapper>
      <Title>Фильтры</Title>
    </Wrapper>
  );
};

export default Filters;
