function dangnhap(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username)
    var data = JSON.parse(user);
    if(user ==null){
        alert("Xin vui lòng nhập tài khoản và mật khẩu.")
    }
    else if(username ==data.username && email == data.email && password==data.password){
        alert("đăng nhập thành công")
        window.location.href="Admin.html"
    }
    else{
        alert("Sai mật khẩu hoặc tên đăng nhập!vui lòng thử lại.")
    }
}
function seachfunc(e){
    let menuseach= document.querySelector('.menu1');
    let menuitems=Array.from(document.querySelectorAll('.image'));
    menuitems.forEach(function(el){
        let text=el.innerText;
        if(text.indexof(menuseach.value)<-1)
        el.style.display=""
        else el.style.display="none";
    }
    
    )
}