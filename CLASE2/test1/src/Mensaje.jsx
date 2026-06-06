function Mensaje(props){
    return (
        <div style={{backgroundColor: "black", padding: "20px", borderRadius: "10px", marginBottom: "20px"}}>   
            <h2>{props.texto}</h2>
            <p>{props.descripcion}</p>
        </div>
        
    );

}

export default Mensaje;