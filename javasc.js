const a = document.getElementById('a')
const b = document.getElementById('b')

function SUM() {
  const valor1 = parseFloat(a.value)
  const valor2 = parseFloat(b.value)
  const soma = valor1 + valor2
  document.getElementById('op').innerText = soma
}

const btnSum = document.getElementById('sum')
btnSum.addEventListener('click', SUM)
