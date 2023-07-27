/*function validateForm(a, b) {
    sum = a + b;
    alert(sum);
    var strName;*/
function validateForm() {
    var strName;
    strName = myform.name1.value;

    if (strName == " ") {
        alert("Name must be entered");
        myform.name1.focus();
        return false;
    }
    //alert(myform.name1.value.length);
       var length=myform.name1.value.length;
    if ( lengtth >= 10) {
        alert("Name must be less than 10 letters");
        myform.name1.focus();
        return false;
    }
    var strAddress;
    strAddress = myform.address.value;
    if (strAddress == "") {
        alert("Address must be entered");
        myform.address.focus();
        return false;
    }

    /*if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myform.name1.value)) {
        return (true)
        alert("You have entered an invalid email address!")
        return (false)
    }*/
}
