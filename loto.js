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
        }, 100)


    }

    const selectInput = document.getElementById("selectInput")
    const leftPanel = document.getElementById("leftPanel")
    const righPanel = document.getElementById("righPanel")





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

                if (c == 6) {
                    // $("#addBtn").attr('disabled', 'disabled');
                    $("#addBtn").fadeOut(1);
                    $('#start').fadeIn("slow")


                }
            }
        }


    });



    $('#start').click(function () {

        const numRandom = []
var issue
        for (let i = 0; i < 6; i++) {
           issue =  Math.floor(Math.random() * 50)
            if (numRandom.indexOf(issue)==-1){
                 numRandom.push(issue)
            }
               else{
                issue++
                numRandom.push(issue)
               }

        }

        console.log(numRandom)

        var counter = -1
        var numControl = -1

        var draw = setInterval(function () {
            counter++

            if (counter < 49) {
                column.children[counter].className = "ballYellow pt-2"

                setTimeout(function () {
                    column.children[counter].className = "ball pt-2"

                }, 20)

            }

            else {
                counter = -1
                numControl++
                console.log(numControl)

                if (numList.includes(numRandom[numControl])) {

                    column.children[numRandom[numControl]].style.background = "yellowGreen"

                }

                if (numControl == 5) {
                    clearInterval(draw)


                    console.log(selecList)
                    console.log(numRandom)

                    // selecList.forEach(function (e) {
                    //     if(numRandom.includes(e)){
                    //         console.log(e)
                    //     }

                    //   })
                    
                }

            }

        }, 100)

    });










});