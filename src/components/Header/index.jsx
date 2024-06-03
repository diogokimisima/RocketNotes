import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/diogokimisima.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Diogo kimisima</strong>
                </div>
            </Profile>
        </Container>
    )
}