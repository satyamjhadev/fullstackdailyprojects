// register
let sign = document.getElementById('signbtn')

sign.addEventListener("click", () => {
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value

    let obj_id = new Date().getTime()
    obj_id = obj_id + new Date().getYear()

    const obj = {
        "_id": obj_id,
        "name": name,
        "password": password,
        "cart": []
    }

    let localArray = JSON.parse(localStorage.getItem("user")) || []
    let user = localArray.filter(e => {
        return (e.name == obj.name)
    })

    if (user.length != 0) window.location.href = "http://127.0.0.1:5500/login.html"
    else {
        localArray.push(obj)
        localStorage.setItem("user", JSON.stringify(localArray))
        window.location.href = "http://127.0.0.1:5500/login.html"
    }
})