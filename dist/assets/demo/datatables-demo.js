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
        "lengthMenu": [[10, 25, 50, -1], [30, 50, 80, "Todas"]]
    });
    view_quick_look();
});

function view_quick_look() {
    let rows = document.querySelectorAll(".tr_policy")

    rows.forEach(r => {
        r.addEventListener("click", ()=> {
            console.log(r.getAttribute("class"));
            if(r.classList.contains("active")){
                r.classList.remove("active")
                close_quicks();
            }else{
                close_quicks()
                r.setAttribute("class", r.getAttribute("class") + " active")
                r.insertAdjacentHTML('afterend', `<tr>
                <td colspan="10" class="bg-light quicklook">
                    <div class="row p-2">
                        <div class="col-4" style="padding-left: 70px;">
                            <h6><strong>Asegurado</strong></h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Nombre:</strong> Victor Flores</p></li>
                                <li><p><strong>Telefono 1:</strong> 5637847377</p></li>
                                <li><p><strong>Telefono 2:</strong> 5573728477</p></li>
                                <li><p><strong>Email:</strong> vicflores@gmail.com</p></li>
                            </ul>
                        </div>
                        <div class="col-4 border-left border-black" style="padding-left: 20px;">
                            <h6><strong>Póliza</strong> 3190273105</h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Estatus:</strong> <span class="badge badge-success badge-pill" style="font-size: 14px;">Activa</span></p></li>
                                <li><p><strong>Vehículo:</strong> TR Kenworth t800</p></li>
                                <li><p><strong>Cobertura:</strong> Amplia</p></li>
                                <li><p><strong>Periodisidad:</strong> Trimestral</p></li>
                                <li><p><strong>Vencimiento:</strong> 29/12/2012</p></li>
                                <li><p><strong>Cantidad total a pagar:</strong> $56,000.00</p></li>
                            </ul>
                        </div>
                        <div class="col-4 border-left border-black" style="padding-left: 20px;">
                            <h6><strong>Recibo a pagar:</strong> 017497915</h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Estatus:</strong> <span class="badge badge-warning badge-pill" style="font-size: 14px;">Cobrar</span></p></li>
                                <li><p><strong>Cantidad a pagar:</strong> $18,000.00</p></li>
                                <li><p><strong>Vencimiento:</strong> 11/01/2021</p></li>
                                <li><p><strong>Instrucciones de pago:</strong> <a href="#">https://qualitas.com/asdasdasd/saasdasd</a></p></li>
                            </ul>
                            <button class="btn btn-md btn-success">Enviar whatsapp de cobranza</button>
                        </div>
                    </div>
                </td>
            </tr>`);
            } 
    }) 
})

}

function close_quicks(){
    const quicks = document.querySelectorAll(".quicklook")
    
    if(quicks){
        quicks.forEach(q => {
        q.remove()
        }) 
    }
}

