import {
    Container,
    Content,
} from './styles/home';

import {
    SearchBar,
    SideBar,
    PlaylistThumbnail,
} from '../../components';

function Home() {
    return (
        <Container>
            <SearchBar />
            <SideBar />
            <Content>
                <PlaylistThumbnail />
                <PlaylistThumbnail />
                <PlaylistThumbnail />
            </Content>
        </Container>
    );
}

export default Home;