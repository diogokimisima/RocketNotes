import { Container } from "./style";
import { Tag } from "../Tag"
import PropTypes from 'prop-types'

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    );
}

Note.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired
        }))
    }).isRequired
};