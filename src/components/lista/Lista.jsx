import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return(
        <section className="layout_grid">
            <div className="listagem">

            <h1>{props.tituloLista}</h1>
            <hr/>
            <div className="tabela">
                <table>
                    {/* cabeçalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="table_cabecalho">
                            {/* th => table head */}
                            <th>Nome</th>
                            <th style={{display:props.visibilidade}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">xxxxxxx</td>
                            <td data-cell="Gênero" style={{display:props.visibilidade}}>Ação</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta"/></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira"/></td>
                        </tr>
                
                    </tbody>
                </table>
            </div>
            </div>
        </section>
    )
}

export default Lista;