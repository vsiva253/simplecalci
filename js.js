
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    
    buttons.forEach((button)=>{
        console.log(button)
       
        button.addEventListener('click',function(e) {

            let value=e.target.dataset.num;
            console.log(value)
            screen.value+=value;
        })
    })
    equal.addEventListener('click',function(e){
        if (screen.value===''){
            screen.value='please enter';
        } else {
            console.log(answer,screen.value)
            try{
                var answer= eval(screen.value);
                screen.value=answer;
            }
            catch(e){
                alert("Invalid Expression")
            }
          
            
        } 
    })
    clear.addEventListener('click',function(e){
        screen.value="";
    })
