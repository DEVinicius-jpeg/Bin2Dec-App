const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnDel = document.getElementById("btnDel");
const btnCalc = document.getElementById("btnCalc");
const binaryInput = document.getElementById('binIn');
const decimalOutput = document.getElementById('decOut');
const lenInput = document.getElementById("alertDigit")
const btnClear = document.getElementById("btnclear");

btn0.addEventListener("click",()=>{
    if(binaryInput.value.length < 8){
        binaryInput.value += '0';
    }else{
        lenInput.style.display = "block";
    }
})

btn1.addEventListener("click",()=>{
    if(binaryInput.value.length < 8){
        binaryInput.value += '1';
    }else{
        lenInput.style.display = "block";
    }
})

btnDel.addEventListener("click", ()=>{
    binaryInput.value = binaryInput.value.slice(0, -1);
    lenInput.style.display = "none";
})

btnCalc.addEventListener("click", ()=>{
    if(binaryInput.value != ""){
        lenInput.style.display = "none";
        const binaryLen = binaryInput.value.length;
        const binaryValue = binaryInput.value;
        let generateDec = 0;

        for(let i = 0 ; i < binaryLen; i++){
            const binaryDigit = parseInt(binaryValue[i]);
            const exponent = (binaryLen - 1) - i;
            generateDec +=  binaryDigit * Math.pow(2, exponent);
        }
        decimalOutput.value = generateDec;
    }
})

binaryInput.addEventListener("keydown",(event)=>{
    if(binaryInput.value.length < 8){
        if(event.key != '0' && event.key != '1' && event.key != 'Backspace'){
            event.preventDefault();
        }
    }else{
        if(event.key != 'Backspace'){
            lenInput.style.display = "block";
            event.preventDefault();
        }else{
            lenInput.style.display = "none";
        }
    }
})

btnClear.addEventListener("click",()=>{
    decimalOutput.value = "";
    binaryInput.value = "";
    lenInput.style.display = "none";
})