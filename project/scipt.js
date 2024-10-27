function display(val){
    let a=document.querySelector('#screen')
    a.value+=val
}
function clr(){
    document.querySelector('#screen').value = ' '
   

}
function equate(val){
    let c=document.querySelector('#screen').value
    let d=eval(c)
    document.querySelector('#screen').value=d
}

