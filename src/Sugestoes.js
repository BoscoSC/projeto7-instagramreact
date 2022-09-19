function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagemPerfilSugerido} alt="" />{" "}
        <div class="texto">
          <div class="nome">{props.nomePerfilUsuario}</div>{" "}
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const sugestoes = [
    {
      imagemPerfilSugerido: "assets/img/bad.vibes.memes.svg",
      nomePerfilUsuario: "bad.vibes.memes",
    },
    {
      imagemPerfilSugerido: "assets/img/chibirdart.svg",
      nomePerfilUsuario: "chibirdart",
    },
    {
      imagemPerfilSugerido: "assets/img/razoesparaacreditar.svg",
      nomePerfilUsuario: "razoesparaacreditar",
    },
    {
      imagemPerfilSugerido: "assets/img/adorable_animals.svg",
      nomePerfilUsuario: "adorable_animals",
    },
    {
      imagemPerfilSugerido: "assets/img/smallcutecats.svg",
      nomePerfilUsuario: "smallcutecats",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map(item => (
        <Sugestao
          imagemPerfilSugerido={item.imagemPerfilSugerido}
          nomePerfilUsuario={item.nomePerfilUsuario}
        />
      ))}

    </div>
  );
}
