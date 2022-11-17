import axios from 'axios';
import {useState,useEffect} from 'react';
import Dados from './components/Dados'
import {Fundo} from './components/Estilizados'
import './App.css'
import Filtros from './components/Filtros';
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=284")
      .then(res => setUsers(res.data.results))
      .catch(err => console.log("erro em pegar os usuarios" ,err))
  },[])
  const [dadosDoInput,setDadosDoInput] = useState({})

  function SalvarDados(dados){
    setDadosDoInput(dados)
    // console.log("Dados da função SalvarDados: " + dados);
  }
  return (
   <>
   <Fundo>
    <Filtros
      EnvioEstados={SalvarDados}
    />

    <Dados 
      dadosDoInput={dadosDoInput}
      users={users}
      />
      </Fundo>
   </>
  );
}
export default App;
// git config --global user.name "juliovianadev"
// git config --global user.email "juliovianadev@GMAIL.COM"
// git add .
// git commit -m "criando o filtros e mandando dados dos inputs"
// git push <Link do Repositório>