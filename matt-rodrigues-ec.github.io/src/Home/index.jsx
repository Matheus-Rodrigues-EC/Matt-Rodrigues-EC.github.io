import React from 'react';

import { Container } from './styles';
import Avatar from '../images/Avatar.jpg';
import BackGround from '../images/background.gif';

function Home() {
  return (
      <Container style={{ backgroundImage: `url(${BackGround})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat:'no-repeat' }}>
            <img src={Avatar} alt={'Imagem de Matheus Rodrigues'} />
            <h1>Matheus Rodrigues</h1>
            <p>Desenvolvedor | Front-End | Back-End | Quixadá-CE, Brasil</p>
            <button onClick={() => {window.location.replace('https://www.linkedin.com/in/matheus-rodrigues-ec/');}}>LinkedIn</button>
            <button onClick={() => {window.location.replace('https://github.com/Matt-Rodrigues-EC')}}>GitHub</button>
            <button onClick={() => {window.location.replace('https://api.whatsapp.com/send/?phone=%2B5585992699074&text&app_absent=0')}}>Whatsapp</button>
      </Container>
  );
}

export default Home;