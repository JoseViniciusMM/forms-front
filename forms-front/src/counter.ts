export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const app = document.querySelector<HTMLDivElement>('#app')!
const btnAddInput = document.querySelector<HTMLButtonElement>('.btn-add')!
const idCampo = document.querySelector<HTMLInputElement>('.quest-input')!
const tipoCampo = document.querySelector<HTMLSelectElement>('.type-select')!
const labelCampo = document.querySelector<HTMLInputElement>('.quest-input')!

btnAddInput.addEventListener('click', () => {
  addImput(idCampo.value, tipoCampo.value, labelCampo.value)
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

function addImput(id: string, tipo: string, label: string) {
  const Campo: Campo = { id, tipo, label }
  formulario.campos.push(Campo)
  
}

function renderCampos() {
  app.innerHTML = formulario.campos.map(campo => `
    <div>
    <label for="${campo.id}">${campo.label}</label>
    <input type="${campo.tipo}" id="${campo.id}">
    </div>
`
  ).join('');
}
