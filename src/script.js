const mensal = new Array(12);
mensal[0] = "Janeiro";
mensal[1] = "Fevereiro";
mensal[2] = "Março";
mensal[3] = "Abril";
mensal[4] = "Maio";
mensal[5] = "Junho";
mensal[6] = "Julho";
mensal[7] = "Agosto";
mensal[8] = "Setembro";
mensal[9] = "Outubro";
mensal[10] = "Novembro";
mensal[11] = "Dezembro";

const diaSemana = new Array(7);
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda";
diaSemana[2] = "Terça";
diaSemana[3] = "Quarta";
diaSemana[4] = "Quinta";
diaSemana[5] = "Sexta";
diaSemana[6] = "Sábado";


function Show() {
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const textDia = document.getElementById("day").value; 
    const textMes = document.getElementById("month").value; 
    const textAno = document.getElementById("year").value; 
    const textMesNasc = document.getElementById("month-nasc").value; 
    const textWeekNasc = document.getElementById("day-week-nasc").value; 
    const textSigno = document.getElementById("sign").value;
    const textIdade = document.getElementById("age").value;

    if (isNaN(textDia)) {
        window.alert("Digite somente números!");
        document.getElementById("day").value="Inválido";
    }

    else if (isNaN(textMes)) {
        window.alert("Digite somente números!");
        document.getElementById("month").value="Inválido";
    }

    else if (isNaN(textAno)) {
        window.alert("Digite somente números!");
        document.getElementById("year").value="Inválido";
    }

    else if(((day >= 20) && (month == 01)) || ((day <= 18) && (month == 02))) {
        document.getElementById("sign").value="Aquário";
    }

    else if(((day >= 19) && (month == 02)) || ((day <= 20) && (month == 03))) {
        document.getElementById("sign").value="Peixes";
    }





    /*date.setDate =
    date.setMonth = 
    date.setFullYear = */

    //mensal++;//
    //diaSemana++;//
    
}


