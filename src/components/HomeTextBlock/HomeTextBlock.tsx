import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 30px;
  width: 800px;
  padding-top: 30px;
`;

const HomeTextBlock = () => {
  return (
    <Wrapper>
      <Text>
        Каждая корзинка изготавливается вручную мастерами, которые делают акцент
        на высоком качестве и уникальности каждого изделия.
      </Text>
      <Text>
        Мы используем только экологически чистые материалы, чтобы вы могли
        наслаждаться красотой и безопасностью наших продуктов.
      </Text>
      ;
    </Wrapper>
  );
};

export default HomeTextBlock;
