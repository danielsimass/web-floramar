import styled from "styled-components"
import beachImg from "../../images/beach.png"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0%;
    margin: 0%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

`
export const Backgound = styled.div`
    z-index: -10;
    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 0%;
    margin: 0%;
    
    background-image: url(${beachImg});
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%) saturate(0%) sepia(0.8) hue-rotate(7deg) saturate(180%) brightness(43%);
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 50px;

    font-family: Belgika40;
    font-size: 2rem;
    color: #fff;
    text-align: center;
`
export const Footer = styled.div`
    a {
        background: transparent;
        border-style: none;
        gap:1rem;
        display: flex;
        align-items: center;

        font-family: Belgika40;
        font-size: 1rem;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
    }
`