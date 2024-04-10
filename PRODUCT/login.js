// login
let login = document.getElementById("loginbtn")

login.addEventListener("click",()=>{
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value

    const obj = {
        "name": name,
        "password": password
    }

    let localArray = JSON.parse(localStorage.getItem("user")) || []
    let user = localArray.filter(e => {
        return (e.name == obj.name && e.password == obj.password)
    })

    if(user.length == 0) window.location.href = "http://127.0.0.1:5500/login.html"
    else {
        let userlogindata = JSON.parse(localStorage.getItem("islogin")) || []
        userlogindata.push({"id":user[0]._id})
        localStorage.setItem("islogin",JSON.stringify(userlogindata))
        window.location.href = "http://127.0.0.1:5500/cart.html"
    }
})