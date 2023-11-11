
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(click){
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real // 
        const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas moedas //
        
        console.log(currencySelect.value)//

        const dolarToday = 4.90
        const euroToday = 5.28
        const libraToday = 6.15
        const ieneToday = 0.033

        if(currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if(currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if(currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if(currencySelect.value == "iene") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(inputCurrencyValue / ieneToday)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputCurrencyValue)
        }

        function changeCurrency (){
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        
        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "./dolar.png"
        }

        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
        currencyImage.src = "./euro.png"
        }

        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
        currencyImage.src = "./libra.png"
        }

        if(currencySelect.value == "iene"){
            currencyName.innerHTML = "Iene"
        currencyImage.src = "./iene.png"
        currencyImage.style.height = "65px"
        currencyImage.style.width = "65px"
        }

        convertValues()

    }
        currencySelect.addEventListener("change", changeCurrency)
    
