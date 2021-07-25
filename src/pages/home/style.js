import styled from 'styled-components';

import backgroundAsideImg from "../../assets/images/background_aside_home_page.png"

import { mainColor, white } from "../../styles/colors"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas:
      'a s'
      'f f';
    grid-template-rows: 93vh 7vh;
    grid-template-columns: auto 800px;

    @media(max-width: 1000px){
        display: grid;
        grid-template-areas:
          's'
          'a'
          'f';
        grid-template-rows: 700px 600px 100px;
        grid-template-columns: 100%;

        overflow-y: auto;
    }
`

export const Aside = styled.aside`

    width: 100%;
    height: 100%;

    grid-area: a;

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

    width: 100%;
    min-width: 700px;
    height: 100%;
    
    grid-area: s;

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

    #buttons-section-div, #text-section-div{
        width: 100%;
    }

    #buttons-section-div{
        display: flex;
        flex-direction: column;
        
        gap: 20px;

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
    }

    @media(max-width: 1000px){
        align-items: center;
        padding-left: 0px;

        width: 90%;

        #buttons-section-div, #text-section-div{
            max-width: 480px;
        }    

        #buttons-section-div{
            flex-direction: row;
            button{
                width: 230px;
            }
        }
    }
`
    
export const Footer = styled.footer`
    grid-area: f;

    nav{

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;


        gap: 15px;

        padding: 12px 16px;

        a{
            cursor: pointer;
            text-decoration: none;
        }

        a, span{
            font-size: 12px;
        }

        a:hover{
            text-decoration: underline;
        }
    }
`