// function login() {
//     var url = 'https://nlg-api-test.herokuapp.com/users/login';


//     // JS Way
//     // var http = new XMLHttpRequest();
//     // var params = 'email=' + inputEmail.value + '&password=' + inputPassword.value;
//     // http.open('POST', url, true);
//     // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     // http.onload = function () {
//     //     if (http.readyState == 4 && http.status == 200) {
//     //         let data = JSON.parse(http.response)
//     //         // save in cookie
//     //         // redirect
//     //     } else {
//     //         let err = JSON.parse(http.response)
//     //         alert(err.msg)
//     //     }
//     // }
//     // http.send(params);


//     // JQuery Way
//     let request = $.ajax({
//         method: "POST",
//         url: url,
//         dataType: "json",
//         data: { email: inputEmail.value, password: inputPassword.value }
//     });
//     request.done(function (data) {
//         // save in cookie
//         createCookie("MEAN2020Data", data.token);
//         createCookie("MEAN2020DataUser", data.userId);
//         // redirect
//         window.location = 'Home.html'
//     });
//     request.fail(function (jqXHR) {
//         alert(jqXHR.responseJSON.msg)
//     });
// }


// // Cookies
// function createCookie(name, value, days) {
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         var expires = "; expires=" + date.toGMTString();
//     }
//     else var expires = "";

//     document.cookie = name + "=" + value + expires + "; path=/";
// }

// function readCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }


// let request = $.ajax({
//     method: "POST",
//     url: url,
//     dataType: "json",
//     data: { email: inputEmail.value, password: inputPassword.value }
// });
// request.done(function (data) {
//     // save in cookie
//     createCookie("MEAN2020Data", data.token);
//     createCookie("MEAN2020DataUser", data.userId);
//     // redirect
//     window.location = 'Home.html'
// });
// request.fail(function (jqXHR) {
//     alert(jqXHR.responseJSON.msg)
// });



function customer() {

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

let globalTemp = null
function viewCustomers() {
    $.get("https://nlg-api-test.herokuapp.com/customers", function (data) {
        globalTemp = JSON.parse(JSON.stringify(data)).customers
        alert("Load was performed.");
    }).done(function () {

    let $table = $("<table>", { id: 'table-display', class: "table text-center" })
    let $tbody = $("<tbody>")
    let $thead = $("<thead>", { class: "thead-dark" })
    let $tr = $('<tr></tr>')
    let $th1 = $('<th scope="col">#</th>')
    let $th2 = $('<th scope="col">Full Name</th>')
    let $th3 = $('<th scope="col">Date</th>')
    $tr.append($th1, $th2, $th3)
    $thead.append($tr)
    $table.append($thead)

    $('#dataDisplay').append($table)

    let $tr2 = $('<tr></tr>')
    $tbody.append($tr2 )
    $('#dataDisplay table').append($tbody)


    globalTemp.forEach((customer, i) => {
        let $innertr = $('<tr></tr>')
        let $id = $('<th scope="row">' + i + '</th>')
        let $fullName = $('<td>+'+customer.fullName+'+</td>')
        let $createdAt = $('<td>+'+customer.createdAt+'+</td>')
        $innertr.append($id, $fullName ,$createdAt)
        $('#dataDisplay table tbody').append($innertr)
    })
    })
}












// var data = 'fullName=' + customerFullName.value
    //     + '&email=' + customerEmail.value
    //     + '&country=' + customerCountry.value
    //     + '&type=' + 'Local'
    //     ;


    // var xmlhttp = new XMLHttpRequest();
    // var url = 'https://nlg-api-test.herokuapp.com/customers'
    // xmlhttp.open("POST", url, true);
    // xmlhttp.onreadystatechange = function () {
    //     // xmlhttp.send(JSON.stringify(data));
    //     xmlhttp.send(data);
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log('successfully sent')
    //         // myArr = JSON.parse(this.responseText);
    //     }
    // }


// ?????

    // let xhr = new XMLHttpRequest();
    // xhr.open('post', 'https://nlg-api-test.herokuapp.com/customers');
    // xhr.send(JSON.stringify(data));
    // // xhr.send(data);
    // xhr.onload = function () {
    //     console.log(xhr.response);
    // };



    // xhr = new XMLHttpRequest();
    // var url = "https://nlg-api-test.herokuapp.com/customers";
    // xhr.open("POST", url, true);
    // // xhr.setRequestHeader("Content-type", "application/json"); 
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         // var mdata = JSON.stringify(data);
    //         var mdata = data;
    //         xhr.send(mdata);
    //         var json = JSON.parse(xhr.responseText);
    //         console.log(json.email + ", " + json.name)
    //     }
    // }




    // let request = $.ajax({
    //     method: "POST",
    //     url: 'https://nlg-api-test.herokuapp.com/customers',
    //     dataType: "json",
    //     data: data
    // });
    // request.done(function (data) {
    //     // save in cookie
    //     createCookie("MEAN2020Data", data.token);
    //     createCookie("MEAN2020DataUser", data.userId);
    //     // redirect
    //     window.location = 'Home.html'
    //     alert('success')
    // });
    // request.fail(function (jqXHR) {
    //     alert(jqXHR.responseJSON.msg)
    // });
