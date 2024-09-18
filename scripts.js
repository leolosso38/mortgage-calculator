function calcularinteres(capital, porcent, year) {
const newyear=year * 12
return capital * (porcent / 100) * newyear;
}

function repayment(amount, interestRate, term) {
// Tasa de interés anual convertida a mensual
const monthlyRate = interestRate / 100 / 12;

// Número total de pagos (meses)
const n = term * 12;

// Cálculo del pago mensual
return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

}

////////////////////////////////////////////
const button = document.getElementById('confirm');

button.addEventListener('click', function() {

const image = document.getElementById('result-image');
/* constantes para el calculo interest only*/
const year = parseFloat(document.getElementById('year').value);
const porcent = parseFloat(document.getElementById('porcent').value);
const capital = parseFloat(document.getElementById('capital').value);

const interes = calcularinteres(capital, porcent, year);
const interesMensual = interes / (year * 12);

/*constantes para el calculo rapayment*/
const amount = capital
const interestRate = porcent
const term = year
const monthlyRepayment = repayment(amount, interestRate, term);

const resultMonth = document.getElementById('result-month');
const result = document.getElementById('result-year');
const resultContainer = document.getElementById('container-result');
const resultText = document.getElementById('result-text');
const errorText = document.getElementById('error-text');


// Verifico si algún botón de tipo radio está seleccionado
const isRepayment = document.getElementById('repayment').checked;
const isInterestOnly = document.getElementById('interest-only').checked;

//contantes para los mensajes de error cuando los campos estan vacios
const capitalError = document.getElementById('capital-error');
const yearError = document.getElementById('year-error');
const porcentError = document.getElementById('porcent-error');
const interestError=document.getElementById('Interest-error');
const repaymentError=document.getElementById('repayment-error');


if (isNaN(year) || year <= 0){ 
yearError.textContent = 'this field required';


}
if (isNaN(porcent) || porcent <= 0) {
porcentError.textContent = 'this field required';


}
if (isNaN(capital) || capital <= 0) {
capitalError.textContent = 'this field required';


}

if (!isRepayment && !isInterestOnly) {
interestError.textContent = 'this field required'
repaymentError.textContent = 'this field required'
errorText.textContent = 'Por favor, seleccione un tipo de hipoteca.';
errorText.style.color = 'red';
image.style.display = 'none';
resultContainer.style.display = 'none';
errorText.style.display = 'block';
interestError.style.display='block';
repaymentError.style.display='block';

return;
}

if (isInterestOnly) {
// Mostrar resultados para Interest Only
resultMonth.innerHTML = `
    <p>Your monthly interest:</p>
    <p><span class="amount">$${interesMensual.toFixed(2)}</span></p>
`;
result.innerHTML = `
    <p>Total interest you'll repay over the term:</p>
    <p><span class="amount">$${interes.toFixed(2)}</span></p>
`;
result.style.color = 'white';
resultMonth.style.color = 'white';
image.style.display = 'none';
errorText.style.display = 'none';
resultContainer.style.display = 'block';
resultText.style.display = 'block';
capitalError.style.display = 'none';
yearError.style.display = 'none';
porcentError.style.display = 'none';
interestError.style.display='none';
repaymentError.style.display='none';

} else if (isRepayment==true  ) {



// Mostrar el resultado de Repayment

resultMonth.innerHTML = `
    <p>Monthly repayment (Repayment):</p>
    <p><span class="amount">$${monthlyRepayment.toFixed(2)}</span></p>
`;
resultMonth.style.color = 'white';
image.style.display = 'none';
errorText.style.display = 'none';
resultContainer.style.display = 'block';
resultText.style.display = 'block';
capitalError.style.display = 'none';
yearError.style.display = 'none';
porcentError.style.display = 'none';
interestError.style.display='none';
repaymentError.style.display='none';
}
});
