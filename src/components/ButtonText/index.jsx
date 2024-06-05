import { Container } from './style';
import PropsTypes from 'prop-types';

export function ButtonText({ title, isActive = false , ...rest }) {
    return (
        <Container
            type='button'
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    );
}

ButtonText.propTypes = {
    title: PropsTypes.string,
    isActive: PropsTypes.bool,
}