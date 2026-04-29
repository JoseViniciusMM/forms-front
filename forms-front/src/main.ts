const app = document.querySelector<HTMLDivElement>('#app')!
const btnAddInput = document.querySelector<HTMLButtonElement>('.btn-add')!

const idCampo = document.querySelector<HTMLInputElement>('.id-input')!
const tipoCampo = document.querySelector<HTMLSelectElement>('.type-select')!
const labelCampo = document.querySelector<HTMLInputElement>('.label-input')!

btnAddInput.addEventListener('click', (e) => {
  e.preventDefault();
  addInput(idCampo.value, tipoCampo.value, labelCampo.value);
})

interface Campo {
  id: string;
  tipo: string;
  label: string;
}

interface Formulario {
  campos: Campo[];
}

const formulario: Formulario = {
  campos: []
}

function addInput(id: string, tipo: string, label: string) {
  const novoCampo: Campo = { id, tipo, label }
  formulario.campos.push(novoCampo)
  
  renderCampos()
}

function renderCampos() {
  app.innerHTML = formulario.campos.map(campo => `
    <div>
      <label for="${campo.id}">${campo.label}</label>
      <input type="${campo.tipo}" id="${campo.id}">
    </div>
  `).join('');
}