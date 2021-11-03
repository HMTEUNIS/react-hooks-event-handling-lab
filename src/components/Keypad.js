function Keypad (){
    function passwordInput(e){
        
        console.log('Entering password...')
    }
    return(
        <input type="password" onChange={passwordInput}/>
    )
}

export default Keypad