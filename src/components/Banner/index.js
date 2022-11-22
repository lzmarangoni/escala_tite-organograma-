import "./Banner.css";

export const Banner = (props)=>{
    return(
        <div className="banner">
            <img src="https://conteudo.cbf.com.br/cdn/imagens/logos/selecao-brasileira/logo-topo.png?v=20221122" />
            
            <h1>{props.title}</h1>
            
            
        </div>
    )
}
export default Banner