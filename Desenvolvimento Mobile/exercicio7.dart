void main() {

 int nivelProf = 0;
 double valorHora = 15;
 double horaTrab = 30;
 
  
  if(nivelProf == 1 || nivelProf == 2){
     double salario = horaTrab * 15;
       print (salario);
       
  }else if(nivelProf == 3 || nivelProf == 4){
   double salario = horaTrab * 20;
       print (salario);
         }else if(nivelProf == 5 || nivelProf == 6){
     double salario = horaTrab * 25;
       print (salario);
    }else{
    print("Não existe");
  }
  
  
  
}