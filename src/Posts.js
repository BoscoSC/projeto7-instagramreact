import { useState } from 'react';

function Post({ imagemUsuario, nomeUsuario, imagemPost}) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [qtddCurtidas, setQtddCurtidas] = useState(101523);

  function curtir() {
    if (!curtido) {
      setQtddCurtidas(qtddCurtidas + 1);
    } else {
      setQtddCurtidas(qtddCurtidas - 1);
    }

    setCurtido(!curtido);
  }

  function salvar() {
    setSalvo(!salvo);
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={imagemUsuario} alt="" />
          {nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={imagemPost} alt="" />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
            {curtido ? <ion-icon name="heart" style={{color: 'red'}} onClick={curtir}></ion-icon> : <ion-icon name="heart-outline" onClick={curtir}></ion-icon>}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvo ? <ion-icon name="bookmark" onClick={salvar}></ion-icon> : <ion-icon name="bookmark-outline" onClick={salvar}></ion-icon>}
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt="" />
          <div class="texto">
            Curtido por <strong>respondeai</strong> e{" "}
            <strong>outras {qtddCurtidas.toLocaleString('pt-BR')} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const post = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      nomeUsuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nomeUsuario: "barked",
      imagemPost: "assets/img/dog.svg",
    },
  ];
  return (
    <div class="posts">
      {post.map(item => (
        <Post nomeUsuario={item.nomeUsuario} imagemPost={item.imagemPost} imagemUsuario={item.imagemUsuario}/>
      ))}
    </div>
  );
}
