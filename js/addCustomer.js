function addCustomer() {

    var customerFullName = document.getElementById('customerFullName')
    var customerEmail = document.getElementById('customerEmail')
    var customerCountry = document.getElementById('customerCountry')


    var data = {
        fullName: customerFullName.value,
        email: customerEmail.value,
        country: customerCountry.value,
        type: 'Local'
    }

    $.ajax({
        url: "https://nlg-api-test.herokuapp.com/customers",
        type: "POST",
        data: data,
        dataType: "json",
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });

}