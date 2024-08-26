
import styled from "styled-components";
import icon from './icon.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 40px 130px 40px;
  font-size: 20px;
  height: 146px;
  align-items: center;
`
const Img = styled.img`
    width: 153px;
    height: 146px;
`

const Header = () => {
    return (
        <Wrapper>
            <div>Каталог</div>
            <div>Условия и доставка</div>
            <Img src={icon.src} />
            <div>Сотрудничество</div>
            <div>Связаться с нами</div>
        </Wrapper>
    )
}
export default Header