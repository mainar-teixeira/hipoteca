const botão = document.querySelector("#resultado");

botão.addEventListener("click", () => {
  const input = document.querySelectorAll(".a");
  const erro = document.querySelectorAll(".erro");

  const icons = ['icon', 'icon2', 'icon3'];

  const icon = document.querySelectorAll(icons.map(i => `.${i}`).join(', '));

  const cifrao = document.querySelectorAll('.cifrao');

  const value = document.querySelector('.value');
  const year = document.querySelectorAll('.year');

  const final = document.querySelector('.final');

  if (input[0].value === "") {
    erro[0].style.opacity = "1";
    icon[0].style.backgroundColor = "rgb(217, 51, 39)";
    cifrao[0].style.color = "rgb(255, 255, 255)";
    value.style.borderColor = 'rgb(217, 51, 39)';
  } else  {
    erro[0].style.opacity = "0";
    icon[0].style.backgroundColor = "";
    cifrao[0].style.color = "";
    value.style.borderColor = '';
  }

  if (input[1].value === "") {
    erro[1].style.opacity = "1";
    icon[1].style.backgroundColor = "rgb(217, 51, 39)";
    cifrao[1].style.color = "rgb(255, 255, 255)";
    year[0].style.borderColor = 'rgb(217, 51, 39)';
  } else  {
    erro[1].style.opacity = "0";
    icon[1].style.backgroundColor = "";
    cifrao[1].style.color = "";
    year[0].style.borderColor = '';
  }

  if (input[2].value === "") {
    erro[2].style.opacity = "1";
    icon[2].style.backgroundColor = "rgb(217, 51, 39)";
    cifrao[2].style.color = "rgb(255, 255, 255)";
    year[1].style.borderColor = 'rgb(217, 51, 39)';
  } else  {
    erro[2].style.opacity = "0";
    icon[2].style.backgroundColor = "";
    cifrao[2].style.color = "";
    year[1].style.borderColor = '';
  }

  const choice = document.querySelectorAll('.alinhar input');

  var repayment = choice[0].checked;
  var interestOnly = choice[1].checked;

  if (!repayment && !interestOnly) {
    erro[3].style.opacity = '1';
  } else {
    erro[3].style.opacity = '0';
  }

    const cal1 = parseFloat(input[0].value);
    const cal2 = parseFloat(input[1].value) * 12;
    const cal3 = parseFloat(input[2].value) / 12;

   const monthlyInterest = cal3 / 100;             // Convertendo para decimal
let monthlyPayment = 0;

if (repayment) {
  monthlyPayment = cal1 * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -cal2));
} else if (interestOnly) {
  monthlyPayment = cal1 * monthlyInterest;
}

final.textContent = `£${monthlyPayment.toFixed(2)}`;

   
});


