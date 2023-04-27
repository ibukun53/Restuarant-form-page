const validateText = () =>{
    let x= document.getElementById('fname');
    let a= document.getElementById('city');
    let b= document.getElementById('address');
    let y= document.getElementById('state');
    x.value= x.value.toUpperCase();
    a.value= a.value.toUpperCase();
    b.value= b.value.toUpperCase();
    y.value= y.value.toUpperCase();
}

const validateEmail = (email) =>{
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mailFormat.test(email);
    }

    const validatePhone = (phone) =>{
        const phoneFormat = /^(\+91-|\+91|0)?\d{10}$/;
            return phoneFormat.test(phone);
        }

 const doValidate =()=>{
    if(!validateEmail(document.getElementById('email').value)||!validatePhone(document.getElementById('password').value) ){
        alert('Invalid Email');
        return false;
    }
 }