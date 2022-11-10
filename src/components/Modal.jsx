import React from 'react'
import "./Modal.css"
import { ModalBackground,ModalContainer,TitleBTN ,BotaoCaiFora, Texto} from './Estilizados'
function Modal({user,setShowModal}) {
  console.log(user)
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleBTN>
          <BotaoCaiFora
            onClick={ ()=>setShowModal(false)}
          >
            Sair
          </BotaoCaiFora>
        </TitleBTN>
        <div>
          <div>
            <img src={user.picture.large} alt="" />
          </div>
          <div>
            <Texto>
              {user.name.first + ' ' + user.name.last} 
            </Texto>
            <Texto>
              {user.location.country}
            </Texto>
          </div>
        </div>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal
