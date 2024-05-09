function buttonclick(input){
    document.getElementById('output').value += input;
    document.getElementById('resultBox').value += input; /* for the hidden result box*/
}

function addition(input){
    document.getElementById('output').value += input;
    document.getElementById('resultBox').value += '+'; /* for the hidden result box*/ 
}
function subtraction(input){
    document.getElementById('output').value += input;
    document.getElementById('resultBox').value += '-'; /* for the hidden result box*/
}
function division(input){
    document.getElementById('output').value += input;
    document.getElementById('resultBox').value += '/'; /* for the hidden result box*/
}
function multiplication(input){
    document.getElementById('output').value += input;
    document.getElementById('resultBox').value += '*'; /* for the hidden result box*/
}

function autoclear(){
    document.getElementById('output').value = ' ';
    document.getElementById('resultBox').value = ' '; /* for the hidden result box*/
}

function deletebtn(){
    let output = document.getElementById('output').value;
    let outputString = output.toString();

    if (output === 'Syntax Error'){
        outputResult = outputString.slice(0,-12);
    }else if(output === 'undefined'){
        outputResult = outputString.slice(0,-9);
    }else{
        outputResult = outputString.slice(0,-1);
    }


    document.getElementById('output').value = outputResult;

/* for the hidden result box*/
    let resultBox = document.getElementById('resultBox').value;
    let resultBoxString = resultBox.toString();
     if (resultBox === 'Syntax Error'){
        resultBoxResult = resultBoxString.slice(0,-12);
    }else if(resultBox === 'undefined'){
        resultBoxResult = resultBoxString.slice(0,-9);
    }else{
        resultBoxResult = resultBoxString.slice(0,-1);
    }

    document.getElementById('resultBox').value = resultBoxResult;
}

function evaluation(){
    

    try {
        let resultBox = document.getElementById('resultBox').value;
        let calculatorResult = eval(resultBox);
        document.getElementById('output').value = calculatorResult;
        document.getElementById('resultBox').value = calculatorResult; /* for the hidden result box*/

        console.log(resultBox);
    }catch(error){
        document.getElementById('output').value = 'Syntax Error';
        document.getElementById('resultBox').value = 'Syntax Error';
    }
    

}

