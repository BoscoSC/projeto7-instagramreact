function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagemStorie} alt=""/> {/* "assets/img/9gag.svg" */}
      </div>
      <div class="usuario">{props.nomeStorieUsuario}</div> {/* 9gag */}
    </div>
  );
}

export default function Stories() {
  const stories = [
    {
      imagemStorie:"assets/img/9gag.svg",
      nomeStorieUsuario:"9gag"
    },
    {
      imagemStorie:"assets/img/meowed.svg",
      nomeStorieUsuario:"meowed"
    },
    {
      imagemStorie:"assets/img/barked.svg",
      nomeStorieUsuario:"barked"
    },
    {
      imagemStorie:"assets/img/nathanwpylestrangeplanet.svg",
      nomeStorieUsuario:"nathanwpylestrangeplanet"
    },
    {
      imagemStorie:"assets/img/wawawicomics.svg",
      nomeStorieUsuario:"wawawicomics"
    },
    {
      imagemStorie:"assets/img/respondeai.svg",
      nomeStorieUsuario:"respondeai"
    },
    {
      imagemStorie:"assets/img/filomoderna.svg",
      nomeStorieUsuario:"filomoderna"
    },
    {
      imagemStorie:"assets/img/memeriagourmet.svg",
      nomeStorieUsuario:"memeriagourmet"
    }
  ];

  return (
    <div class="stories">
      {stories.map(item => (
        <Storie imagemStorie={item.imagemStorie} nomeStorieUsuario={item.nomeStorieUsuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
