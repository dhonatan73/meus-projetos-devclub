function generateNumber(){

    const min = Math.ceil(document.querySelector('.entry-number').value)
    const max = Math.floor(document.querySelector('.exit-number').value)
    
   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   const resultTotal = document.querySelector('.input2').value = result
}
