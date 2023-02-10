# Angular-Frontend
 Angular Frontend CRUD işlemleri...
 Not: npm i komutunu vs code içine yazın

Frontend kısmımızda aşamalar halinde ilerledik. Web sitemiz aslında 3 kısımdan oluşmaktadır. Bunlardan birincisi aktif verilerin liste halinde gözüktüğü 'Employees' ana sayfamız. Buradan veri ekleme, silme ve aktif veriyi değiştirme gibi işlemleri yaptıktan sonra elimizdeki verileri görebiliriz.

Her bilginin yanında bir tane 'view' seçeneği bulunmaktadır. Bu seçenek seçtiğimiz id'ye göre bizleri ikinci sayfamız olan 'Edit Employee' sayfasına götürmektedir.
Bu sayfada id'ye göre aldığımız değerleri değiştirebiliriz. Lakin burada dikkat etmemiz gereken bazı hususlar da bulunmaktadır. Mesela, eğer girilen isim karakteri en az 3 karakter olmaz ise hata alırız. Aynı şekilde girilen mail hesabı da gerekli şekilde girilmez ise yine hata alırız. Veyahut eksik değer girersek yine hata alırız. Bunun gibi özellikler bulunmaktadır. Bu sayfada aynı zamanda silme butonu da bulunmaktadır. İstediğimiz verileri silebiliriz.

Bunlardan farklı olarak üçüncü sayfamız ise 'Add 'Employee sayfamızdır. Bu sayfamızda yeni bir veri eklemesi yapabilyoruz. Lakin burada da 'Edit Employee' de olduğu gibi bazı durumlarda hatalar alabiliriz. Bu hatalar 'Edit Employee' sayfasında bulunan hatalar ile aynıdır. Doğru uygulandığı takdirde hiçbir hata alınmayacaktır.

Tüm bu işlemler aynı zamanda Database de de işleniyor. Yeni bir veri eklediğimizde, bir veriyi sildiğimizde veya bir veriyi düzelttiğimizde bunların hepsi ilgili Database içerisinde de değişmektedir.