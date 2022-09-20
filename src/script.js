const mensal = new Array();
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

const diaSemana = new Array();
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda";
diaSemana[2] = "Terça";
diaSemana[3] = "Quarta";
diaSemana[4] = "Quinta";
diaSemana[5] = "Sexta";
diaSemana[6] = "Sábado";

function Show() {
    
   //data do sistema
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth();
   var year = date.getFullYear();

   var textDia = document.getElementById("day").value; 
   var textMes = document.getElementById("month").value; 
   var textAno = document.getElementById("year").value; 
   var textMesNasc = document.getElementById("month-nasc"); 
   var textWeekNasc = document.getElementById("day-week-nasc");
   var textSigno = document.getElementById("sign");
   var textIdade = document.getElementById("age");

   if (isNaN(textDia) || (textDia=="") || (textDia==0)) {
      window.alert("Digite somente números no campo dia!");
      document.getElementById("day").value="Inválido";
   }

   else if (isNaN(textMes) || (textMes=="") || (textMes==0)) {
      window.alert("Digite somente números no campo mês!");
      document.getElementById("month").value="Inválido";
   }

   else if (isNaN(textAno) || (textAno=="") || (textAno==0)) {
      window.alert("Digite somente números no campo ano!");
      document.getElementById("year").value="Inválido";
   }
 
   else if (textAno.length != 4) {
      window.alert("Digite somente 4 números no campo ano!");
      document.getElementById("year").value="Inválido";
   }

   else {
      //transformando os valores strings das inputs em inteiros
      textDia = parseInt(textDia); 
      textMes = parseInt(textMes); 
      textAno = parseInt(textAno); 
       
      if(((textDia >= 20) && (textMes == 01)) || ((textDia <= 18) && (textMes == 02))) {
         textSigno.value="Aquário";
      }

      else if(((textDia >= 19) && (textMes == 02)) || ((textDia <= 20) && (textMes == 03))) {
         textSigno.value="Peixes";
      }

      else if(((textDia >= 21) && (textMes == 03)) || ((textDia <= 19) && (textMes == 04))) {
         textSigno.value="Aries";
      }

      else if(((textDia >= 20) && (textMes == 04)) || ((textDia <= 20) && (textMes == 05))) {
         textSigno.value="Touro";
      }

      else if(((textDia >= 21) && (textMes == 05)) || ((textDia <= 20) && (textMes == 06))) {
         textSigno.value="Gêmeos";
      }

      else if(((textDia >= 21) && (textMes == 06)) || ((textDia <= 22) && (textMes == 07))) {
         textSigno.value="Câncer";
      }

      else if(((textDia >= 23) && (textMes == 07)) || ((textDia <= 22) && (textMes == 08))) {
         textSigno.value="Leão";
      }

      else if(((textDia >= 23) && (textMes == 08)) || ((textDia <= 22) && (textMes == 09))) {
         textSigno.value="Virgem";
      }

      else if(((textDia >= 23) && (textMes == 09)) || ((textDia <= 22) && (textMes == 10))) {
         textSigno.value="Libra";
      }

      else if(((textDia >= 23) && (textMes == 10)) || ((textDia <= 21) && (textMes == 11))) {
         textSigno.value="Escorpião";
      }

      else if(((textDia >= 22) && (textMes == 11)) || ((textDia <= 21) && (textMes == 12))) {
         textSigno.value="Sargitário";
      }

      else if(((textDia >= 22) && (textMes == 12)) || ((textDia <= 19) && (textMes == 01))) {
         textSigno.value="Capricórnio";
      }

      else {
         textSigno.value="Indefinido";
      }

      //inserindo nas posicoes dia, mês e ano do objeto Date(), os valores do aniversário
      date.setDate(textDia);
      date.setMonth(textMes-1);
      date.setFullYear(textAno);
        
      //recebendo o valor do array que corresponde ao dia da semana do aniversário
      textWeekNasc.value = diaSemana[date.getDay()];
        
      //recebendo o valor do array que corresponde ao mês do aniversário
      textMesNasc.value=mensal[textMes-1]; 

      var idade = year - textAno;

      if (textMes > month) 
         idade--;
        
      else if ((textMes == month) && (textDia > day)) 
         idade--;  
      textIdade.value=idade;
   }
}

function Clear() {
   document.getElementById("day").focus();
}

