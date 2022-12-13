$(document).ready(function () {

    const numList = []
    const column = document.getElementById("column")

arrPush()
    function arrPush() {

        var num = 0
        
       var timeControl = setInterval(function () { 
           num++
            numList.push(num)
            
            var span = document.createElement("span")
            span.className = "ball pt-2 "
            span.innerHTML += `${num}`

         
                column.appendChild(span)
                $(span).fadeIn("");

                if(num == 49){
                    clearInterval(timeControl)
                }
        },100)
        
         
    }

 
    



    

  

});