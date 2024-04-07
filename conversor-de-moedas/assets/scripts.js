
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues (click){
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real // 
        const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas moedas //
        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL").then( response => response.json()) //Endereço a acessar para pegar os dados

        const dolarToday = parseFloat(data.USDBRL.high).toFixed(2)
        const euroToday = parseFloat(data.EURBRL.high).toFixed(2)
        const libraToday = parseFloat(data.GBPBRL.high).toFixed(2)
        const ieneToday = parseFloat(data.JPYBRL.high).toFixed(2)


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

async   function changeCurrency (){
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        const currencyCotation = document.querySelector(".currency-cotation")
        const dateCotation = document.querySelector(".date-cotation")
        const currencyBoxCovertion = document.querySelector(".currency-box-convertion")

        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL").then( response => response.json()) //Endereço a acessar para pegar os dados
        const dolarToday = parseFloat(data.USDBRL.high).toFixed(2)
        const euroToday = parseFloat(data.EURBRL.high).toFixed(2)
        const libraToday = parseFloat(data.GBPBRL.high).toFixed(2)
        const ieneToday = parseFloat(data.JPYBRL.high).toFixed(2)

        const dolarDate = data.USDBRL.create_date
        const euroDate = data.EURBRL.create_date
        const libraDate = data.GBPBRL.create_date
        const ieneDate = data.JPYBRL.create_date

        if(currencySelect.value == "dolar"){
            currencyBoxCovertion.style = "display: flex;"
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "./dolar.png"
            currencyCotation.innerHTML = `A cotação do ${currencyName.innerHTML} hoje é de: R$${dolarToday}`
            dateCotation.innerHTML = `Ultima data é hora da cotação fornecida pela bolsa de valores foi: ${dolarDate}`
        }

        if(currencySelect.value == "euro"){
            currencyBoxCovertion.style = "display: flex;"
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./euro.png"
            currencyCotation.innerHTML = `A cotação do ${currencyName.innerHTML} hoje é de: R$${euroToday}`
            dateCotation.innerHTML = `Ultima data é hora da cotação fornecida pela bolsa de valores foi: ${euroDate}`
        }

        if(currencySelect.value == "libra"){
            currencyBoxCovertion.style = "display: flex;"
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./libra.png"
            currencyCotation.innerHTML = `A cotação da ${currencyName.innerHTML} hoje é de: R$${libraToday}`
            dateCotation.innerHTML = `Ultima data é hora da cotação fornecida pela bolsa de valores foi: ${libraDate}`
        }

        if(currencySelect.value == "iene"){
            currencyBoxCovertion.style = "display: flex;"
            currencyName.innerHTML = "Iene"
            currencyImage.src = "./iene.png"
            currencyImage.style.height = "65px"
            currencyImage.style.width = "65px"
            currencyCotation.innerHTML = `A cotação da ${currencyName.innerHTML} hoje é de: R$${ieneToday}`
            dateCotation.innerHTML = `Ultima data é hora da cotação fornecida pela bolsa de valores foi: ${ieneDate}`
        }

        convertValues()

    }
        currencySelect.addEventListener("change", changeCurrency)
    
