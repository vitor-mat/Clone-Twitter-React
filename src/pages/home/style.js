import styled from 'styled-components';

import backgroundAsideImg from "../../assets/images/background_aside_home_page.png"

export const Aside = styled.aside`
    width: 50%;
    height: 100vh;

    background-image: url(${backgroundAsideImg});

    display: flex;
    justify-content: center;
    align-items: center;

    .twitter-icon-svg-home-page{
        width: 400px;
        fill: white;
    }
`