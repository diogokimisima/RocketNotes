import { Container } from './style';
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