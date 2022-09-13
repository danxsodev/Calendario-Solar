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

    const textDia = parseInt(document.getElementById("day").value); 
    const textMes = parseInt(document.getElementById("month").value); 
    const textAno = parseInt(document.getElementById("year").value); 
    const textMesNasc = document.getElementById("month-nasc").value; 
    const textWeekNasc = document.getElementById("day-week-nasc").value;
    const textIdade = document.getElementById("age").value;

    if (isNaN(textDia) || (textDia=="") || (textDia==0)) {
        window.alert("Digite somente números!");
        document.getElementById("day").value="Inválido";
    }

    else if (isNaN(textMes) || (textMes=="") || (textMes==0)) {
        window.alert("Digite somente números!");
        document.getElementById("month").value="Inválido";
    }

    else if (isNaN(textAno) || (textAno=="") || (textAno==0)) {
        window.alert("Digite somente números!");
        document.getElementById("year").value="Inválido";
    }

    else if(((textDia >= 20) && (textMes == 01)) || ((textDia <= 18) && (textMes == 02))) {
        document.getElementById("sign").value="Aquário";
    }

    else if(((textDia >= 19) && (textMes == 02)) || ((textDia <= 20) && (textMes == 03))) {
        document.getElementById("sign").value="Peixes";
    }

    else if(((textDia >= 21) && (textMes == 03)) || ((textDia <= 19) && (textMes == 04))) {
        document.getElementById("sign").value="Aries";
    }

    else if(((textDia >= 20) && (textMes == 04)) || ((textDia <= 20) && (textMes == 05))) {
        document.getElementById("sign").value="Touro";
    }

    else if(((textDia >= 21) && (textMes == 05)) || ((textDia <= 20) && (textMes == 06))) {
        document.getElementById("sign").value="Gêmeos";
    }

    else if(((textDia >= 21) && (textMes == 06)) || ((textDia <= 22) && (textMes == 07))) {
        document.getElementById("sign").value="Câncer";
    }

    else if(((textDia >= 23) && (textMes == 07)) || ((textDia <= 22) && (textMes == 08))) {
        document.getElementById("sign").value="Leão";
    }

    else if(((textDia >= 23) && (textMes == 08)) || ((textDia <= 22) && (textMes == 09))) {
        document.getElementById("sign").value="Virgem";
    }

    else if(((textDia >= 23) && (textMes == 09)) || ((textDia <= 22) && (textMes == 10))) {
        document.getElementById("sign").value="Libra";
    }

    else if(((textDia >= 23) && (textMes == 10)) || ((textDia <= 21) && (textMes == 11))) {
        document.getElementById("sign").value="Escorpião";
    }

    else if(((textDia >= 22) && (textMes == 11)) || ((textDia <= 21) && (textMes == 12))) {
        document.getElementById("sign").value="Sargitário";
    }

    else if(((textDia >= 22) && (textMes == 12)) || ((textDia <= 19) && (textMes == 01))) {
        document.getElementById("sign").value="Capricórnio";
    }

    else {
        document.getElementById("sign").value="Indefinido";
    }

    switch (textMes) {
        case 1:
            parseInt(document.getElementById("month-nasc").value="Janeiro"); 
            mensal++;
        break;

        case 2:
            parseInt(document.getElementById("month-nasc").value="Fevereiro"); 
            mensal++;
        break;

        case 3:
            parseInt(document.getElementById("month-nasc").value="Março"); 
            mensal++;
        break;

        case 4:
            parseInt(document.getElementById("month-nasc").value="Abril"); 
            mensal++;
        break;

        case 5:
            parseInt(document.getElementById("month-nasc").value="Maio"); 
            mensal++;
        break;

        case 6:
            parseInt(document.getElementById("month-nasc").value="Junho"); 
            mensal++;
        break;

        case 7:
            parseInt(document.getElementById("month-nasc").value="Julho"); 
            mensal++;
        break;

        case 8:
            parseInt(document.getElementById("month-nasc").value="Agosto"); 
            mensal++;
        break;

        case 9:
            parseInt(document.getElementById("month-nasc").value="Setembro"); 
            mensal++;
        break;

        case 10:
            parseInt(document.getElementById("month-nasc").value="Outubro"); 
            mensal++;
        break;

        case 11:
            parseInt(document.getElementById("month-nasc").value="Novembro"); 
            mensal++;
        break;

        case 12:
            parseInt(document.getElementById("month-nasc").value="Dezembro"); 
            mensal++;
        break;

        default: 
            document.getElementById("month-nasc").value="Inválido";
            window.alert("Não pode ser vazio, zero ou caracter. Somente números entre 1 até 12!");
    }

    var idade = year - textAno;

    if (textMes > month) 
        idade--;
    
    else if ((textMes == month) && (textDia > day)) 
        idade--;
    textIdade.value=idade;

    /*var semana = new Date();
    var dia = semana.setDate();
    var mes = semana.setMonth(textMes--);
    var ano = semana.setFullYear();

    textWeekNasc.value = diaSemana[dia];*/

    /*day = date.setDate;
    year = date.setFullYear;*/

    //mensal++;//
    //diaSemana++;//
    
}


