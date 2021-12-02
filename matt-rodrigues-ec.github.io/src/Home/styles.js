import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    background-color: black;
    color: orange;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

img{
    width: 100px;
    border: solid rgb(0, 85, 0) 5px;
    border-radius: 50%;
    justify-self: center;
    margin: 1rem;
}

h1{
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: black;
    padding: 1rem;
    border-radius: 30px;
    justify-self: center;
}

p{
    color: white;
    background-color: black;
    padding: 1rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-radius: 30px;
    justify-self: center;
}

button{
    color: white;
    background-color: transparent;
    border: solid rgb(0, 85, 0) 5px;
    border-radius: 30px;
    margin: 0.5rem;
    padding: 1rem;
    font-size: x-large;
    :hover{
        background-color: rgb(0, 85, 0);
        transition: 1s;
    }
}
`