import { Container } from './styles';
import PropsType from "prop-types";

export function Tag({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}

Tag.propTypes = {
    title: PropsType.string.isRequired
} 