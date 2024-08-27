import { media } from "@/constants/media";
import styled from "styled-components";

const Title = styled.div`
    font-size: 80px;
    margin-bottom: 27px;

    ${media.tablet}{
        text-align: center;
        font-size: 60px;

}
    ${media.phone}{
        font-size:40px;
}

`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    ${media.phone}{
    text-align: center;
}
`
const Description = styled.div`
    font-size: 20px;
    text-align: center;
   
    ${media.phone}{
    font-size:15px;
}
`
const Button = styled.button`
    background-color: #526468;
    color: #FFFFFF;
    margin-top: 45px;
    font-size: 20px;
    width: 250px;
    height: 50px;
    border: none;
    
    ${media.phone}{
    font-size:15px;
    margin-top: 35px;
    width: 200px;
    height: 40px;
}
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