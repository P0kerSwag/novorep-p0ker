import styled from "styled-components";

export const Fundo = styled.div`
  background-color: #1D1C40;
`;

export const Quadro = styled.div`
 background-color: #072BF2;
 width:350px;
 margin-bottom:25px;
 height: 400px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 border-radius:25px;
`;

export const Foto = styled.img`
  width: 200px;
  height: 200px;
  border-radius:50%;
`;

export const TextoPerfil = styled.p`
  font-size: 2rem;
  color: #fff;
`;

export const Galeria = styled.div`
  padding-top:25px;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align:center;
`;


export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blueviolet;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: blue;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const TitleBTN = styled.div`
  display: flex;  
  justify-content: end;
`;

export const BotaoCaiFora = styled.button`
  background-color: aqua;
  color: black;
  width: 50px;
  font-size:16px;
  height: 50px;
  border-radius:50%;
`;

export const Texto = styled.p`
  color: white;
`;
// git config --global user.name "juliovianadev"
// git config --global user.email "juliovianadev@gmail.com"
// git init 
// git add .
// git commit -m "criando os quadros"
// git push <link do repositorio>