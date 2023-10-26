let email="john@gmail.com";

email = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(email);