let string = ''
let buttons = document.querySelectorAll("button")

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        try{

            if(e.target.innerHTML==='%'){
                string = eval(`${string}/100`)
                document.querySelector(".userInput").value = string
            }

            else if(e.target.innerHTML==='DEL'){
                string = string.substring(0,string.length-1)
                document.querySelector(".userInput").value = string
            }

            else if(e.target.innerHTML==='AC'){
                string = ''
                document.querySelector(".userInput").value = string
            }
    
            else if(e.target.innerHTML=='='){
                string = eval(string)
                document.querySelector(".userInput").value = string
            }

            else{
                console.log(e.target.innerHTML)
                string = string + e.target.innerHTML
                document.querySelector(".userInput").value = string
            }
        }

        catch{
            document.querySelector(".userInput").value = "Syntax Error"
        }
        
    })
})