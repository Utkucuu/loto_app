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

    const selectNum = document.getElementById("selectNum")
    const leftPanel = document.getElementById("leftPanel")



    var c = 0

    const selecList = []


    $("#addBtn").click(function () {



        var numDiv = document.createElement("div")

        numDiv.innerHTML = selectNum.value
        numDiv.className = "letfNum"

        if (0 < selectNum.value && selectNum.value < 50) {

            if (!selecList.includes(selectNum.value)) {


                c++
                leftPanel.appendChild(numDiv)

                selecList.push(selectNum.value)

                selectNum.value = ""

                if (c == 6) {
                    $("#addBtn").attr('disabled', 'disabled');
                    // $("#start").css('display','block' );
                    // $("#start").css('align-items', 'center' );
                     document.getElementById("midPanel").innerHTML +=` <div class="text-center" ><button id="start" class="btn btn-danger mt-2">Başla</button></div>`


                }
            }
        }

        console.log()
        

    });









});