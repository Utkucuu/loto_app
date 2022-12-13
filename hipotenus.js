$(document).ready(function () {

    const numList = []
    const column = document.getElementById("column")

arrPush()
    function arrPush() {

        var num = 0
        for (let index = 0; index < 49; index++) {
            num++
            numList.push(num)
            
            var span = document.createElement("span")
            span.className = "ball pt-2"
            span.innerHTML += `${num}`


            column.appendChild(span)

        }
    }




    

    console.log(numList)

});