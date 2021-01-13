// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable').DataTable();
});

$(document).ready(function() {
    $('#dataTableActivity').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        "order": [[ 0, 'desc' ]],
        "lengthMenu": [[10, 25, 50, -1], [30, 50, 80, "Todas"]],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate
            }
        }
    });
    const raw = document.querySelector("#policy_tr");
    raw.addEventListener("click", ()=>{
        console.log("asdasdas");
    })
});
