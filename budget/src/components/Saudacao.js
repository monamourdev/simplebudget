function Saudacao({nome}){
    return(
        <>
            {nome && <p>Olá {nome}. Seja bem-vindo(a)</p>}
        </>

    )
}

export default Saudacao;