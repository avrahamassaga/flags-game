let mistakes = 5;
const recordPlayer = localStorage.getItem('recordPlayer');

function setRecord(){
    if(recordPlayer=='undefined'||recordPlayer==null){
        localStorage.setItem('recordPlayer',0);
    }
    // localStorage.setItem('recordPlayer',0);
}
setRecord();


export {mistakes,recordPlayer}