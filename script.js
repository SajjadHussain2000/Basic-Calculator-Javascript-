const displaye1 = document.querySelector('.display1');
const displaye2 = document.querySelector('.display2');
const tempres = document.querySelector('.temp');
const numberse1 = document.querySelectorAll('.number')
const operatione1 = document.querySelectorAll('.operation');
const equale1 = document.querySelector('.equal');
const cleare1 = document.querySelector('.all-clear');
const clearlaste1 = document.querySelector('.last-entity-clear');

let dis1num = '';
let dis2num = '';
let res = null;
let lastop = '';
let havedot = false;

numberse1.forEach( numb => {
    numb.addEventListener('click',(e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText ==='.' && !havedot){
            havedot  = true;
        }
        else if(e.target.innerText ==='.' && havedot){
            return;
        }
        dis2num += e.target.innerText;
        displaye2.innerText = dis2num;
    })
});

operatione1.forEach(op=> {
    op.addEventListener('click',(e)=> {
        if(!dis2num)
            res;
        havedot = false;
        const operationName = e.target.innerText;
        if(dis1num && dis2num && lastop){
            mathoperation();
        } 
        else{
            res = parseFloat(dis2num);
        }  
        clearVar(operationName);
        lastop = operationName;
        console.log(res); 
    })
})

function clearVar(name=''){
    dis1num+=dis2num+' '+name + ' ';
    displaye1.innerHTML = dis1num;
    displaye2.innerHTML = '';
    dis2num = '';
    tempres.innerHTML = res;
}

function mathoperation(){
    if(lastop === 'x'){
        res = parseFloat(res) * parseFloat(dis2num);
    }
    else if(lastop === '+'){
        res = parseFloat(res) + parseFloat(dis2num);
    }
    else if(lastop === '-'){
        res = parseFloat(res) - parseFloat(dis2num);
    }
    else if(lastop === '/'){
        res = parseFloat(res) / parseFloat(dis2num);
    }
    else if(lastop === '%'){
        res = parseFloat(res) % parseFloat(dis2num);
    }    
}

equale1.addEventListener('click',(e)=>{
    if(!dis2num || !dis1num) return;
    havedot = false;
    mathoperation();
    clearVar();
    displaye2.innerText = res;
    tempres.innerText = '';
    dis2num = res;
    dis1num = ''; 
})

cleare1.addEventListener('click',(e)=> {
    displaye1.innerText = '0';
    displaye2.innerText = '0';
    dis1num = '';
    dis2num = '';
    res = '';
    tempres.innerText = '0';
})

clearlaste1.addEventListener('click',(e)=> {
    displaye2.innerText = '';
    dis2num = '';
})

