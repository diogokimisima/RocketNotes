import { Container } from "./styles";
import PropTypes from 'prop-types';

export function TextArea({ value, ...rest}) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}

TextArea.propTypes = {
    value: PropTypes.string
}