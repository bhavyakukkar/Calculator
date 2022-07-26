const screen = document.getElementById("screen");

const numberIds = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n0'];
const operatorIds = ['oa', 'os', 'om', 'od'];
const equateId = "e"; 


function addToScreen(c) {
    screen.innerHTML += c;
}

function getScreen() {
    return screen.innerHTML;
}

function addNumber(n) {
    addToScreen(n);
}

function addOperator(o) {
    if(getScreen().length == 0)  return
    if(isOpp(getScreen()[getScreen().length - 1])) return
    
    switch(o) {
        case 'a':   var operator = '+';
                    break;
        case 's':   var operator = '-';
                    break;
        case 'm':   var operator = '×';
                    break;
        case 'd':   var operator = '÷';
                    break;
    }
    addToScreen(operator);
}

function isOpp(c) {
    if(c == '+' || c == '-' || c == '×' || c == '÷')
        return true;
    else
        return false;    
}

function equate() {

}

function addListener() {
    
    //Numbers
    for(let id of numberIds)
        document.getElementById(id).addEventListener('click', () => {
            addNumber(parseInt(id[1]));
        });
    
    //Operators
    for(let id of operatorIds)
        document.getElementById(id).addEventListener('click', () => {
            addOperator(id[1]);
        });
    
    //Equate
    document.getElementById(equateId).addEventListener('click', () => {
        equate();
    })
}

addListener();