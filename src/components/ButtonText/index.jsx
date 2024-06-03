import { Container } from './style';
import PropsTypes from 'prop-types';

export function ButtonText({ title, ...rest }) {
    return (
        <Container
            type='button'
            {...rest}
        >
            {title}
        </Container>
    );
}

ButtonText.propTypes = {
    title: PropsTypes.string.isRequired,
}