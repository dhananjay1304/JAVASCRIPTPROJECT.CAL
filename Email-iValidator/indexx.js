console.log("This is my script");

let result = {
    "tag":"",
    "free":false,
    "role":false,
    "user":"akshaykumar",
    "email":"akshaykumar@codewithharry.com",
    "state":"undeliverable",
    "domain":"codewithharry.com",
    "reason": "invalid_mainbok",
    "mx_found":true,
    "catch_all":null,
    "dosposable":false,
    "smtp_check":false,
    "did_you_mean":"",
    "format_valid":true
}

let str = ""
for (key of Object.keys(result)){
    str = str + `<div>${key}: ${result[key]} </div>`
}

console.log(str);
resultCont.innerHTML = str;