
import styled from "styled-components";

const Title = styled.div`
    font-size: 80px;
    margin-bottom: 27px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Description = styled.div`
    font-size: 20px;
    text-align: center;
`
const Button = styled.button`
    background-color: #526468;
    color: #FFFFFF;
    margin-top: 45px;
    font-size: 20px;
    width: 250px;
    height: 50px;
    border: none;
    
`
const HomeBanner = () => {
    return (
        <Wrapper>
            <Title>Магия из бумажной лозы</Title>
            <Description>Создайте атмосферу уюта с помощью наших плетеных <br /> корзинок из бумажной лозы!</Description>
            <Button>Перейти в каталог</Button>
        </Wrapper>
    )
}


export default HomeBanner