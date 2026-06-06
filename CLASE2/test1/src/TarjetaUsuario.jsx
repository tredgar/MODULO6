function TarjetaUsuario(props) {
  return (
    <div
      style={{
        backgroundColor: "#07002c",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>{props.nombre}</h2>
      <p>{props.edad}</p>
    </div>
  );
}

export default TarjetaUsuario;