

export const calculatorLogic = (n1, n2, operation) => {

    let value = 0;
    switch (operation) {
        case '+':
          value = n1 + n2;
        break;

        case '-':
          value =  n1-n2
         
        break;
        case 'x':
          value = n1 * n2;
         
        break;
        case '/':
          if(n2 != 0){
            value = n1/n2;
          }
          else{
            return('Math Error');
          }
        break;

        default:
          console.log('Invalid Arguments')
        break;
    }

    return value;
    
}