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

            if (num == 49) {
                clearInterval(timeControl)
            }
        }, 10)


    }

    const selectInput = document.getElementById("selectInput")
    const leftPanel = document.getElementById("leftPanel")
   




    var c = 0

    const selecList = []


    $("#addBtn").click(function () {



        var numDiv = document.createElement("div")

        numDiv.innerHTML = selectInput.value
        numDiv.className = "letfNum"

        if (0 < selectInput.value && selectInput.value < 50) {

            if (!selecList.includes(selectInput.value)) {


                c++
                leftPanel.appendChild(numDiv)

                selecList.push(selectInput.value)

                selectInput.value = ""

                if (c == 1) {
                    // $("#addBtn").attr('disabled', 'disabled');
                    $("#addBtn").fadeOut(1);
                    $('#start').fadeIn("slow")


                }
            }
        }


    });



        $('#start').click(function () { 
          
            const numRandom = []
            for (let i = 0; i < 6; i++) {
                
                numRandom.push(Math.floor(Math.random() * 50)   )
                
            }
             
            console.log(numRandom)

            var counter = -1

            var drav =  setInterval (function () {
                counter++

                var numControl = -1

             if(counter < 49){
                     column.children[counter].className = "ballYellow pt-2"
                   
                setTimeout(function(){
                    column.children[counter].className = "ball pt-2"

                },20)

                }

                else{
                    counter = -1
                    
                }
                   

              },100)
 
        
        });










});