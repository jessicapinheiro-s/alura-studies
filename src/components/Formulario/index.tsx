import React from "react";
import Botao from "../Button";
import './style.scss';


class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className="formulario">
                <div>
                    <label htmlFor="tarefa">Tarefa</label>
                </div>
                <div>
                    <input 
                    type="Text" 
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required/>
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                </div>
                <div>
                    <input type="Time"
                    name="tarefa"
                    step="1"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required 
                    min="00:00:00"
                    max="01:30:00"/>
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;