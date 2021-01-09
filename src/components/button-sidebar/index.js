import {
    Container,
} from './styles/button-sidebar';

function ButtonSidebar({ iconName, children }) {
    return (
        <Container>
            <svg>
                <use xlinkHref={`icons/symbol-defs.svg#icon-${iconName}`}></use>
            </svg>
            {children}
        </Container>
    );
}

export default ButtonSidebar;