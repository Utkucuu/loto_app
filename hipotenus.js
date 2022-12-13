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

    const selectNum = document.getElementById("selectNum")
    const leftPanel = document.getElementById("leftPanel")
    
    console.log(selectNum)

    $("#addBtn").click(function () { 
        
        var numDiv = document.createElement("div")
        
        numDiv.innerHTML = selectNum.value

        leftPanel.appendChild(numDiv)

     
    });
    
    



    

  

});