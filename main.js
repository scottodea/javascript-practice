// document.cookie = "javascript=cool"

// let expiry = new Date()
// let days = 2

// expiry.setTime(expiry.getTime() + (10000))


// document.cookie = `coderacademy=super awesome;expires=${expiry.toUTCString()}`

// let cookies = document.cookie;
// console.log(cookies)


// function getCookie(name){
//   let cookie = {};
//   document.cookie.split(";").forEach((item) =>{
//     let [key, value] = item.split('=');
//     cookie[key.trim()] = value;
//     })
//   return cookie[name];
// }

// function removeCookie(name){
//    let expiry = new Date()
//    expiry.setTime(expiry.getTime() - 100);


//    document.cookie = `${name}=;expires=${expiry.toUTCString()}`;


// }

// removeCookie("javascript")

// console.log(getCookie("javascript"));

localStorage.setItem("name", "Scott")
sessionStorage.setItem("address", "123 Fake Street")