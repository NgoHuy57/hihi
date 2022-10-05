(function($) {
    "use strict";

   
    var path = window.location.href; 
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

   
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);
var product = [];

// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
var productAdmin = function(){
    var listProduct1="";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]))
        var listProduct1 = '<tr>';
        listProduct1+='<td>'+data.id+'</td>';
        listProduct1+='<td>'+data.name+'</td>';
        listProduct1+='<td><img src="img/'+data.img+'" alt"" style="width:50px;"></td>';
        listProduct1+='<td>'+data.price+'</td>';
        listProduct1+='<td><button onclick="updateProduct('+i+')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listProduct1+='<button onclick="deleteProduct('+i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listProduct1+='</tr>';
        document.getElementById("product-admin").innerHTML +=listProduct1;
    }} 
    productAdmin();
    //sua
    var addProduct = function(){
    var Product = {
        id :"SP" +parseInt (product.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price: document.getElementById("price").value
    }
    product.push(Product);
    localStorage.setItem('listProduct',JSON.stringify(product));
    window.location.reload();
}
//them
var updateProduct = function(i){
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("submitUpdate").innerHTML='<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')"> Đồng ý </button>';
}
//sua
var submitUpdate = function(i){
    var k = product[i];
    k.id = document.getElementById("idd").value
    k.name = document.getElementById("named").value
    k.img = document.getElementById("imgd").value
    k.price = document.getElementById("priced").value

    localStorage.setItem('listProduct',JSON.stringify(product));
    window.location.reload();
}
//xoa
var deleteProduct = function (i){
    var result = confirm("Bạn có muốn xóa sản phẩm này ?");
      
  
    product.splice(i,1);
    localStorage.setItem('listProduct',JSON.stringify(product));
    window.location.reload();
    
}
