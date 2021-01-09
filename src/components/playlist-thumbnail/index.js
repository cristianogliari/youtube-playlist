import {
    Container,
    Details,
    Avatar,
    Description, 
} from './styles/playlist-thumbnail';

import placeholder from '../../assets/images/thumbnail-placeholder.png'

import textCropper from '../../utils/textCropper';

function PlaylistThumbnail() {
    return (
        <Container>
            <img src={placeholder} alt="thumbnail" />
            <Details>
                <Avatar>&nbsp;</Avatar>
                <Description>
                    <h3>{textCropper('Master Lock 875-975 Decoded WITHOUT ANY TOOL', 44)}</h3>
                    <p>LockPickingLawyer</p>
                </Description>               
            </Details>
        </Container>
    );
}

export default PlaylistThumbnail;