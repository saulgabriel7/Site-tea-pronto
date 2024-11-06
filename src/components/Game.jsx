import seta from "../assets/seta-baixo.svg"
import maos from "../assets/maos.svg"
import instagram from "../assets/insta.svg"
import TikTok from "../assets/tiktok.svg"
import Twitter from "../assets/x.svg"


export  function Game() {
  return (
    <div class="comprovacoes">
        <div className="tec">
            <p>Um Mundo Mais Conectado para Crianças Autistas</p>
            <h3> Conheça nosso jogo!</h3>
            <img src={seta} alt="" />
        </div>

        <div className="conteudo" id="conteudo">
            <div className="quadro">
                <div className="desc-1">
                    <h3>Autores</h3> <br />
                    <p>O TeaGame foi desenvolvido por:</p> <br />
                </div>

                <div className="desc-2">
                    <p>Saul Gabriel</p>
                </div>
                <div className="desc-2">
                    <p>Esther</p>
                </div>
                <div className="desc-2">
                    <p>Davi Dahora</p>
                </div>
                <div className="desc-2">
                    <p>Tainá Santos</p>
                </div>

                <div className="redes-sociais">
                    <img src={instagram} alt="" />
                    <img src={TikTok} alt="" />
                    <img src={Twitter} alt="" />
          </div>
            </div> 

            <div className="textos">
                <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0XUholThH0M"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                </div>
                <div className="texto-1">
                    <h3>Sobre o Jogo:</h3>
                    <h4>Desenvolvimento:</h4>
                    <p>O jogo foi desenvolvido utilizando a plataforma GDevelop 5, que permite criar jogos interativos de maneira visual. Este projeto foi construído com o objetivo de proporcionar uma experiência divertida para os jogadores, utilizando ferramentas e mecânicas disponíveis no GDevelop.</p>

                    <h4>Funcionamento:</h4>
                    <p>O jogo é um clássico de plataforma, onde o jogador enfrenta desafios ao longo de 4 fases distintas, cada uma com seus obstáculos variados. O objetivo é coletar os quebra cabeças para derrotar o vilão. O jogador tem acesso a um inventário, onde pode gerenciar itens coletados para auxiliar em sua jornada, como a poção que mata o vilão por 10s, e cura vida, aumentando a interatividade e o envolvimento com o jogo.</p>
                </div>
            </div>
        </div>


        <div className="maos">
            <img src={maos} alt="" />
        </div>

    </div>

  )
}