/********** Adım 1 ***********/
$(document).ready(function () {

    const column = document.getElementById("column")
    const selectInput = document.getElementById("selectInput")
    const leftPanel = document.getElementById("leftPanel")
    const rightPanel = document.getElementById("rightPanel")

    /********** Adım 2 ***********/
    const numList = []
    console.log(numList)

    arrPush()

    

    

   
    

    var element = document.getElementsByClassName("ball pt-2")
       
  console.log(element)
    
  
  setTimeout(function () {
    element[0].remove() 
    },101)
  


    function arrPush() {  
        var num = -1
        
        
        
        // console.log(column.children[0])
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
        }, 100)
        
        
    }
    
  
 /********** Adım 3 ***********/
    var c = 0

    const selecList = []

    $("#addBtn").click(function () {

            $('#selectInput').focus()

        var numDiv = document.createElement("div")

        numDiv.innerHTML = selectInput.value
        numDiv.className = "letfNum"

        if (0 < selectInput.value && selectInput.value < 50) {

            if (!selecList.includes(selectInput.value)) {

                c++
                leftPanel.appendChild(numDiv)

                selecList.push(Number(selectInput.value))

                selectInput.value = ""

                if (c == 6) {
                    // $("#addBtn").attr('disabled', 'disabled');
                    $("#addBtn").fadeOut(1);
                    $('#start').fadeIn("slow")
                }
            }
        }

    });

 /********** Adım 4 ***********/

    $('#start').click(function () {

        // var numberlist = Number(selecList)

        const numRandom = []
        var issue
        for (let i = 0; i < 6; i++) {
            issue = (Math.floor(Math.random() * 49)+1) // ceil - floor
            if (numRandom.indexOf(issue) == -1) {
                numRandom.push(issue)
                console.log(issue)
            }
            else {
                i--
            }
        }

        var counter = 0

        var numControl = -1

        var draw = setInterval(function () {

            counter++

            if (counter < 49) {
                column.children[counter].className = "ballYellow pt-2"

                setTimeout(function () {
                    column.children[counter].className = "ball pt-2"

                }, 2)

            }

            
 /********** Adım 4-a ***********/

            else {

                counter = 0
                numControl++

                console.log(numControl)

                if (numList.includes(numRandom[numControl])) {

                    column.children[numRandom[numControl]].style.background = "yellowGreen"
               
                }

                if (numControl == 5) {
                    clearInterval(draw)

                    numRandom.forEach(e => {
                        if (selecList.includes(e)) {

                            rightPanel.innerHTML += `<div class="rightPanelNum pt-1">${e}</div>`

                        }
                    });
                }
            }
        }, 10)

    });










});