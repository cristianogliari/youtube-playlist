import { 
    Container,
    LeftMenu,
    Logo,
    SearchBox,
    RightMenu,
    Avatar,
 } from './styles/search-bar';

 import ButtonMenu from '../button-menu';

 function SearchBar() {
     return (
        <Container>
            <LeftMenu>
                <li>
                    <ButtonMenu iconName="menu" />
                </li>
                <Logo>
                    <svg>
                        <use xlinkHref='icons/symbol-defs.svg#icon-play'></use>
                    </svg>
                    <span>YouTube</span>
                </Logo>
            </LeftMenu>
            <SearchBox>
                <input
                    type="text"
                    placeholder="Pesquisar" />
                <button>
                    <svg>
                        <use xlinkHref='icons/symbol-defs.svg#icon-search'></use>
                    </svg>
                </button>
            </SearchBox>
            <RightMenu>
                <li>
                    <ButtonMenu iconName="dots-three-vertical" />
                </li>
                <li>
                    <Avatar />
                </li>
            </RightMenu>
        </Container>
     );
 }

export default SearchBar;