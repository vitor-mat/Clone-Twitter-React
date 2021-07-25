import styled from 'styled-components';

import backgroundAsideImg from "../../assets/images/background_aside_home_page.png"

import { mainColor, white } from "../../styles/colors"

export const Container = styled.div`
    width: 100%:
    height: 100vh;

    display: flex;
`

export const Aside = styled.aside`
    width: 50%;
    height: 100vh;

    background-image: url(${backgroundAsideImg});

    display: flex;
    justify-content: center;
    align-items: center;

    #twitter-icon-svg-aside-home-page{
        width: 400px;
        fill: white;
    }
`

export const Section = styled.section`
    width: 50%;
    min-width: 700px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 20px;

    padding-left: 50px;

    #twitter-icon-svg-section-home-page{
        width: 50px;
        fill: ${mainColor}
    }

    h1{
        margin: 20px 0;
    }

    h3{
        margin: 10px 0; 
    }

    button{
        width: 380px;
        height: 50px;
        font-weight: bolder;
        border-radius: 48px;
        font-size: 16px;
        cursor: pointer;
    }

    #btn-sing-in{
        background: ${mainColor};
        color: ${white};
        border: ${white};
    }

    #btn-enter{
        backgorund: transparent;
        color: ${mainColor};
        border: .5px solid ${mainColor};
    }
`