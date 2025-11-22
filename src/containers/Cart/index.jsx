
import Logo from '../../assets/logo.png'
import { Container, Banner, Title, Content } from "./styles";

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburger" />
            </Banner>
            <Title>Checout - Pedido</Title>
            <Content>
                {/*<CartItens /> */}
                {/* <CaRTResume /> */}
            </Content>

        </Container>
    )
}