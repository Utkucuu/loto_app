
$(document).ready(function () {

    const column = document.getElementById("column")
    const selectInput = document.getElementById("selectInput")
    const leftPanel = document.getElementById("leftPanel")
    const rightPanel = document.getElementById("rightPanel")
    var element = document.getElementsByClassName("ball pt-2")



    /** efektli şekilde numaraların eklendiği bölüm */
    const numList = []

    arrPush()

    function arrPush() {
        var num = -1

        var timeControl = setInterval(function () {
            num++
            numList.push(num)

            var span = document.createElement("span")
            span.className = "ball pt-2"
            span.innerHTML += `${num}`

            column.appendChild(span)
            $(span).fadeIn("");

            if (num == 49) {
                clearInterval(timeControl)

                setTimeout(function () {
                    $("#midPanel").fadeIn();
                }, 101)
            }
        }, 100)

    }

    /** 0 numaralı topu kaybederek tüm indexlerin eşleşmesini sağladım */
    setTimeout(function () {
        element[0].style.display = "none"
    }, 101)


    /** seçtiğimiz numaralar selectList içinde gerekli kontroller yapılarak push lanır. Daha sonra uygun olan sayılar leftPanel bölümüne eklenir. */
    var c = 0

    const selecList = []

    $("#addBtn").click(function () {

        $('#selectInput').focus()

        var numDiv = document.createElement("div")

        numDiv.innerHTML = selectInput.value
        numDiv.className = "letfNum"

        if (0 < selectInput.value && selectInput.value < 50) { // kontrol 1: sayı aralığı

            if (!selecList.includes(Number(selectInput.value))) { // kontol 2: seçtiğimiz sayının 2. kez seçilememesini için, selectList te sayı yok ise leftPanel e eklenir.
                console.log(c)
                c++
                leftPanel.appendChild(numDiv)

                selecList.push(Number(selectInput.value))

                selectInput.value = ""

                if (c == 6) {  //c 6 ise 6 sayı seçmiştir artık seçilemez.

                    $("#addBtn").fadeOut(1);
                    $('#start').fadeIn("slow")
                }
            }
        }

    });

    

    /** 6 sayı seçildiğinde start butonu aktif olur ve seçme animasyonu butona tıklayınca başlar. Random 6 sayı oluşturulup bu sayıların aynı olmaması sağlanır. */
    $('#start').click(function () {

             
        $("#start").fadeOut(1);
//starta bastıktan sonta buton kaybolur yerini reset butonu alır.
        $("#reset").fadeIn(1000);


        const numRandom = []
        var issue
        for (let i = 0; i < 6; i++) {
            issue = (Math.floor(Math.random() * 49) + 1) // ceil - floor
            if (numRandom.indexOf(issue) == -1) {
                numRandom.push(issue)

            }
            else {
                i--
            }
        }

        var counter = 0

        var numControl = -1

        /**aşağıdaki fonksiyon her çalıştığında sırası ile numaraların arkaplan rengi değişir ve counter değeri artar. Counter değerinin artmasıyla birlikte bir sonraki sayıya geçiş sağlanır, böylece 49. sayı dahil tüm sayıların arkaplanı yeşil olup... */
        var draw = setInterval(function () {

            counter++

            if (counter < 50) {
                column.children[counter].className = "ballYellow pt-2"
                /** alttaki setInterval sayesinde tekrar eski haline döner. */
                setTimeout(function () {
                    column.children[counter].className = "ball pt-2"

                }, 10)

            }

            else {
                //burada ise counter 50 a eşit olduğunda çalışacak kodlar bulunuyor. Counter 50 ise derleyici bu else bloğuna girer numControl değeri 1 artar. Bunun sebebi seçilen 6 sayı olduğu için start butonuna bastıktan sonra random sayı seçme animasyonunun 6 kere oynatılmasıdır. 6. seferden sonra ekrandaki numaralardan 6 tanesi yeşil yanıyor demektir.
                counter = 0
                numControl++

                if (numList.includes(numRandom[numControl])) {

                    column.children[numRandom[numControl]].style.background = "yellowGreen"

                }

                if (numControl == 5) {   // index kontrolünü yaparken numControl kullandığım için -1 den başlattım. 5 olduğunda animasyon 6. kez çalışmış demektir. sonrasında draw fonksitonunu sonlandırır.
                    clearInterval(draw)

                    numRandom.forEach(e => {
                        if (selecList.includes(e)) {

                            rightPanel.innerHTML += `<div class="rightPanelNum pt-1">${e}</div>`
                        }
                        //seçtiğimiz sayılar numRandom array inde yani random oluşan numaralar ile eşleşiyorsa tutturduk demektir. Eşleşen sayılar forEach döngüsü yardımıyla rightPanelde yazdırılır.
                    });
                }

                setInterval(function () {
                    //  tüm animasyon bittikten sonra rightPanel in alt elemanlarından 0. index boş ise hiçbir sayıyı tutturamamışız demektir. bu durumda 2 rigtPanelde bir text yazar ve 2 sn sonra sayfa yenilenir
                    if (rightPanel.children[0] == null) {
                        rightPanel.innerHTML = `<div class="fs-1 text-danger fw-bold mx-auto">Miss!</div>`

                        setInterval(function () {
                            window.location.reload()
                        }, 2000)
                    }
                }, 13000)
            }
        }, 50)


    });

    $('#reset').click(function () {
        window.location.reload()

    });

});