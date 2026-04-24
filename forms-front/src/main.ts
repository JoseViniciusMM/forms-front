import './style.css'
import { v4 as uuidv4 } from 'uuid' 

const questContainer = document.querySelector<HTMLDivElement>("#quest");
const btnAdd = document.querySelector<HTMLButtonElement>(".btn-add");

interface Questao {
  id: string;
  pergunta: string;
  tipo: string;
}

let listaQuestoes: Questao[] = [];

function imprimirQuestoes() {
  if (questContainer) {
    questContainer.innerHTML = listaQuestoes.map(q => `
      <div class="questoes" data-id="${q.id}">
        <div class="qt">
            <input type="text" class="quest-input" value="${q.pergunta}" readonly>
            <div class="select-wrapper">
                <select class="type-select" disabled>
                    <option>${q.tipo}</option>
                </select>
            </div>
        </div>
      </div>
    `).join('');
  }
}


function addNewQuestion() {
    const inputPergunta = document.querySelector<HTMLInputElement>(".quest-input");
    const selectTipo = document.querySelector<HTMLSelectElement>(".type-select");

    if (inputPergunta && inputPergunta.value.trim() !== "") {
        const novaQuestao: Questao = {
            id: uuidv4(),
            pergunta: inputPergunta.value,
            tipo: selectTipo?.options[selectTipo.selectedIndex].text || "Texto"
        };

        listaQuestoes.push(novaQuestao);
        imprimirQuestoes();

        inputPergunta.value = "";
    }
}

btnAdd?.addEventListener('click', (e) => {
    e.preventDefault();
    addNewQuestion();
});
