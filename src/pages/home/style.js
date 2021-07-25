import styled from 'styled-components';

import backgroundAsideImg from "../../assets/images/background_aside_home_page.png"

import { mainColor, white } from "../../styles/colors"

export const Container = styled.div`
    width: 100%:
    height: 100vh;

    display: grid;
    grid-template-columns: auto 790px;
    grid-template-rows: 93vh 7vh;
`

export const Aside = styled.aside`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    width: 100%;
    height: 100%;

    background-image: url(${backgroundAsideImg});

    display: flex;
    justify-content: center;
    align-items: center;

    #twitter-icon-svg-aside-home-page{
        width: 380px;
        fill: white;
    }
`

export const Section = styled.section`
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    width: 100%;
    min-width: 700px;
    height: 100%;

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

export const Footer = styled.footer`
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    nav{
        width: 100%;


        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;


        gap: 15px;

        padding: 12px 16px;

        a{
            cursor: pointer;
        }

        a, span{
            font-size: 12px;
        }

        a:hover{
            text-decoration: underline;
        }
    }
`