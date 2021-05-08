
//電卓
function up(_v){
    document.querySelector('input').value = _v
}
function ap(_v){
    document.querySelector('input').value += _v
}
function ca(){
    const v = document.querySelector( 'input' ).value
     try{   const f = new Function( 'return ' + v )
        up( f().toString() )
     }catch(_error){
         up(_error)
     }
}
