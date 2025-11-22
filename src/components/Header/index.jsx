import { Container, Navigation, HeaderLink, Options, Profile, LinkContainer } from "./styles";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react";

export function Header() {
    const navigate = useNavigate();
    const { userInfo, logout } = useUser();
    const { pathname } = useResolvedPath();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <Container>


            <Navigation>
                <div>
                    <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                    <hr></hr>
                    <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
                </div>
            </Navigation>


            <Options>
                <Profile>
                    <div>
                        <UserCircleIcon size={24} color="#fff" />
                        <p>olá, <span>{userInfo?.name}</span></p>
                        <button onClick={handleLogout}>Sair</button>
                    </div>
                </Profile>

                <LinkContainer onClick={() => navigate("/carrinho")}>
                    <ShoppingCartIcon size={24} color="#fff" />
                    <span>Carrinho</span>
                </LinkContainer>
            </Options>

        </Container>
    );
}
