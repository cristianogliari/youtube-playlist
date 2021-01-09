import {
    Container,
} from './styles/side-bar';

import ButtonSidebar from '../button-sidebar';

function SideBar() {
    return (
        <Container>
            <ul>
                <ButtonSidebar iconName="home">Início</ButtonSidebar>
                <ButtonSidebar iconName="fire">Em alta</ButtonSidebar>

            </ul>
        </Container>
    );
}

export default SideBar;