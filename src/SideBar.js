import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import { useState } from "react";

export default function SideBar() {
  const [nome, setNome] = useState('Catana');
  const [img, setImg] = useState("assets/img/catanacomics.svg");

  function handleClick() {
    let novoNome = prompt('Escreva seu nome: ');

    setNome(novoNome);
  }

  function handleClickFoto() {
    let novaImg = prompt('Coloque o link da nova foto');

    setImg(novaImg);
  }

  return (
    <div class="sidebar">
        <Usuario nome={nome} onClickName={handleClick} img={img} onClickFoto={handleClickFoto} />
        <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
  )
}