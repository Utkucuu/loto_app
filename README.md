
Adım 1
- Dokümanı başlatıp ihtiyacım olan html elementlerini seçtim.

Adım 2
-numlist adında boş bir array oluşturdum ve  arrpush() ismide bir fonksiyon yazdım. Bu fonskiyon içine num isminde bir değişkene sayaç olarak kullanabilmek için 0 değerini atadım. arrpush() fonskiyonu içinde setInterval kullanmamın sebebi time parametresinden faydalanıp oluşturduğum topları zincirleme olarak sırayla oluşturup tüm sıralı yapıyı efektle ortaya çıkıyormuş gibi gösterebilmekti.
-Buradaki setInterval her çalıştığında num değeri artacak ve aynı zamanda numList içine bir array elemanı olarak pushlanacak. Daha sonra bu numlist içindeki array elemanlarını çeşitli kontrolleri yapmak için kullanacağım.
-arrPush() fonskiyonu çalıştığında num değeri 49 olasıya kadar setInterval fonsksiyonu çalışacak ve 49 tane span oluşacak bunlara da css kullanarak oluşturulan "ball" clası eklendiğinde 49 top görünecek.
