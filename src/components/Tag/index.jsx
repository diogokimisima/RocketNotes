import { Container } from './styles';
import PropsType from "prop-types";

export function Tag({ title }) {
    return (
        <Container>
            {title}
        </Container>
    )
}

Tag.propTypes = {
    title: PropsType.string.isRequired
} 