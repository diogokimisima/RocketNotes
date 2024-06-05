import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

import profileUndefined from "../../assets/profile.undefined.png"

export function Header() {
    const { user, signOut } = useAuth();

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={user.avatar || profileUndefined }
                    alt={`Foto de ${user.name}`}
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
