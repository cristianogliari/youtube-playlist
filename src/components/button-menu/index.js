import {
    Container,
} from './styles/button-menu';

function ButtonMenu({ iconName }) {
    return (
        <Container>
            <svg>
                <use xlinkHref={`icons/symbol-defs.svg#icon-${iconName}`}></use>
            </svg>
        </Container>
    );
};

export default ButtonMenu;