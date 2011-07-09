for (var i = 0,link; i < 2; i++) {
	
   link = document.createElement("a"); // link isminde <a> tagli bir yapı oluşturuyoruz.
   link.innerHTML = "Link"+i;  //bu link yapısını MArkup içinde Link0 ya da Link1 şeklinde gösteriyoruz.
   link.onclick = (function(value){  /*
   bu linklere tıklandığında click event functionu tetikleyecek. 
   burda self executing function ve closure scope özelliğini kullanıyoruz. Çünkü 
   bizim ihtiyacımız olan şey o andaki i değerini almak. bunu yapmadığımızda globalde
   bizim göremediğimiz fonksiyondan çekiyor ve en son kullanılan i değerini veriyordu. (2)
   
   */
    return function() { 
      alert(value); /*
	  üstteki fonksiyondan bizim vereceğimiz değeri alert edecek. böylece o andaki değere ulaşabileceğiz.*/
    };
  })(i); // Tabiki değerimiz i ile aynı olacak. Bunu burda self executing olarak kullanmamızın sebebi i değerini hala koruyor olmamız.
  document.body.appendChild(link);
}