import styled from 'styled-components';

import logoSectionImg from "../../assets/images/background_aside_home_page.png"

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

    @media(max-width: 600px){
        grid-template-rows: 700px 600px 160px;
    }
`

export const Aside = styled.aside`
    grid-area: a;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    #background-aside-div{
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        z-index: -1;

        img{
            width: 100%;
            height: 100%;
        }
    }

    #icon-aside-div{
        
        width: 400px;
        height: 400px;

        z-index: 2;

        padding: 20px;

        #twitter-icon-svg-aside-home-page{
            fill: white;
            max-width: 380px;
        }
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
    align-items: center;
    
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
        justify-content: center;
        padding-left: 0px;

        width: 100%;
        min-width: 0;

        #buttons-section-div, #text-section-div{
            width: 80%;

            margin: 0 auto;
            padding: 5px;
        }    

        #buttons-section-div{
            flex-direction: row;
            button{
                width: 230px;
            }
        }
    }

    @media(max-width: 500px){
        #buttons-section-div{
            flex-direction: column;
            button{
                width: 100%;
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