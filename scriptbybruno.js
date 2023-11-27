document.getElementsByName('account')[0].addEventListener('click', function(e) {
    const token = localStorage.getItem('token')
    if(token){
        window.location.href = '/account/account.html';
    }else{
        window.location.href = '/login-register/login/login.html';
    }
})
