import { Backgound, Container, Content, Footer } from "./styles"
import WhiteLogo from "../../assets/white-logo.svg"
import { FaWhatsapp } from "react-icons/fa"

export const Home = () => {


    return (
        <Container>
            <Backgound />
            <Content>
                <img src={WhiteLogo} alt='' style={{width: "300px", height: '300px'}}/>
                <h2>Em breve...</h2>
            </Content>
            <Footer>
                <a href="https://wa.me/message/X7WQMSGR5HPEC1" target="_blank" rel="noreferrer">
                    <FaWhatsapp color="#fff" size='40px'/>
                    <p>Entre em contato</p>
                </a>
            </Footer>
        </Container>
    )
}