import { FiPlus, FiX } from "react-icons/fi"
import PropTypes from 'prop-types';

import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
            type="button"
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    );
}

NoteItem.propTypes = {
    isNew: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func,
};

NoteItem.defaultProps = {
    isNew: false,
    value: '',
    onClick: () => {},
};