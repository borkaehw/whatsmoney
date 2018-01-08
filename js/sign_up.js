function isEmail(email) {
  
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);

}

function isPassword(password) {
 
    var regexAlphabet = /([a-zA-Z])+/;
    var regexNumeric = /([0-9])+/;
    
    console.log(regexAlphabet.test(password));
    console.log(regexNumeric.test(password));
    console.log(password.length >= 8);
    
    return regexAlphabet.test(password) && regexNumeric.test(password) && password.length >= 8;
    
}

$("#input-email").on("change", function() {
    
    if ($("#input-email").val().length != 0 && isEmail($("#input-email").val()) == false) {

        $("#input-email").parent().addClass("has-danger");
        $("#input-email").addClass("form-control-danger");
        $('#alert-email').show();

    }
    
    if ($("#input-email").val().length == 0 || isEmail($("#input-email").val()) == true) {

        $("#input-email").parent().removeClass("has-danger");
        $("#input-email").removeClass("form-control-danger");
        $('#alert-email').hide();

    }
    
});

$(".alert").hide();

$(".close").click(function() {
                  
    $(this).parent().hide();           
                  
});

