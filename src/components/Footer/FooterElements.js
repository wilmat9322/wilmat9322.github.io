import styled from 'styled-components'
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';

export const FooterSec = styled.footer`
    background-color: #000;
    padding-top: 50px;
    bottom: 0;
`

export const FooterWrap = styled.div`
    padding: 18px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 10px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0 0 0px;
        padding: 0px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    transition: ease-out 0.30s;

    &:hover {
    color: #F05454;
    cursor: pointer;
	
}
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center; 
    margin-bottom: 16px;
    font-weight: bold;
    transition: ease-out 0.30s;
    &:hover {
    color: #F05454;
}
@media screen and (max-width: 820px) {
        margin-bottom: 0px;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-top: 40px;
    margin-bottom: 6px;
    @media screen and (max-width: 820px) {
        margin-top: 20px;
        margin-bottom: 0px;
    }
`

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    width: 130px;
    transition: ease-out 0.30s;
    @media screen and (max-width: 820px) {
        margin-top: 10px;
        margin-bottom: 0px;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 2rem;
    &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease;
    color: #F05454;
}
`