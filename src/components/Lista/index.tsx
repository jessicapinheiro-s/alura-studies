import React from "react";
import './style.scss';

function Lista(){
    const tarefas = [
        {
          "Tarefa":"React",
          "Tempo":"01:00:00"
        },
        {
          "Tarefa":"JavaScript",
          "Tempo":"03:00:00"
        }
      ]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul className="lista">
            {
                tarefas.map(
                    (item,index) => (
                        <li key={index} className="lista-item">
                            <h3>{item.Tarefa}</h3>
                            <span>{item.Tempo}</span>
                        </li>
                    )
                )
            }
            </ul>
        </aside>
    )
}


export default Lista;