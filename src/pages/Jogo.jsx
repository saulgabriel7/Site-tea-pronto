import { HeaderContainer, FooterContainer, GameContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Game} from "../components/Game"
import { Footer } from "../components/Footer"

export  function Jogo() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <GameContainer>
        <Game/>
    </GameContainer>


    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}
