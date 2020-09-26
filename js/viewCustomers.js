let globalTemp = null
function viewCustomers() {
    $.get("https://nlg-api-test.herokuapp.com/customers", function (data) {
        globalTemp = JSON.parse(JSON.stringify(data)).customers
        // alert("Load was performed.");
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
        $tbody.append($tr2)
        $('#dataDisplay table').append($tbody)


        globalTemp.forEach((customer, i) => {
            let $innertr = $('<tr></tr>')
            let $id = $('<th scope="row">' + i + '</th>')
            let $fullName = $('<td>+' + customer.fullName + '+</td>')
            let $createdAt = $('<td>+' + customer.createdAt + '+</td>')
            $innertr.append($id, $fullName, $createdAt)
            $('#dataDisplay table tbody').append($innertr)
        })
    })
}


$( document ).ready(function() {
    viewCustomers()
});