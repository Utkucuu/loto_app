
Adım 1
- Dokümanı başlatıp ihtiyacım olan html elementlerini seçtim.

Adım 2
-numlist adında boş bir array oluşturdum ve arrpush() ismide bir fonksiyon yazdım. Bu fonskiyon içine num isminde bir değişkene sayaç olarak kullanabilmek için 0 değerini atadım. arrpush() fonskiyonu içinde setInterval kullanmamın sebebi time parametresinden faydalanıp oluşturduğum topları zincirleme olarak sırayla oluşturup tüm sıralı yapıyı efektle ortaya çıkıyormuş gibi gösterebilmekti.
-Buradaki setInterval her çalıştığında num değeri artacak ve aynı zamanda numList içine bir array elemanı olarak pushlanacak. Daha sonra bu numlist içindeki array elemanlarını çeşitli kontrolleri yapmak için kullanacağım.
-arrPush() fonskiyonu çalıştığında num değeri 49 olasıya kadar setInterval fonsksiyonu çalışacak ve 49 tane span oluşacak bunlara da css kullanarak oluşturulan "ball" clası eklendiğinde 49 top görünecek.


Adım 3
- yine bir sayaça ihtiyacım oldu ve c değişkenini oluşturup 0 değerini verdim. ekle butonuna her basıldığında c değişkeni artacak ve 6 sayı girildiğinde sayı ekle butonunu kaybedip yerine başla butonu oluşturabilmek için c değişkeni ile ekleme sayısını kontrol ediyorum.  
- $("#addBtn").click... fonskiyonunda kullanmak için selectList array ini boş şekilde oluşturdum. inputtan girilen değerleri bu array içine gerekli kontrolleri yaptıktan click fonskiyonu içinde pushluyorum. Bu kontroller 2 tane iç içe if bloğundan ibaret. Birinci if bloğunda inputtan gelen d0ğerin 0 ve 50 arasında olma durumunu, ikinci if te ise bu selectListe 2 aynı değerin eklenmesini istemediğim için selectList içinde olmama durumunu kontrol ediyorum.
- Koşullar istediğim gibi ise input değerini daha sonra arşılaştırma yapmak için kullanacağımdan dolayı number a çevirip seleclist array ine pushladım. Aynı zamanda click fonksiyonu içinde createElementle oluşturduğum sol taraftaki div içine ekleme işlemi yaptım.  
- Son olarak ta c sayının değerine göre buton aksiyonu meydana geliyor.  


Adım 4
