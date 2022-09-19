export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} alt="" onClick={props.onClickFoto} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onClick={props.onClickName}/>
        </span>
      </div>
    </div>
  );
}
