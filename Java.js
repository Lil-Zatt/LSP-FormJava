var selectedRow = null

function OnSubmit(e) {
    event.preventDefault();
    var formdata = ReadData();
    if (selectedRow == null) {
        insertNewRecord(formdata);
    } else {
        updateRecord(formdata);
    }
    resetForm();
}

function ReadData() {
    var formData = {};
    formData["kode_barang"] = document.getElementById("kode_barang").value;
    formData["nama_barang"] = document.getElementById("nama_barang").value;
    formData["jumlah"] = document.getElementById("jumlah").value;
    formData["harga"] = document.getElementById("harga").value;
    formData["total"] = formData["harga"] * formData["jumlah"];
    if (formData["total"] >= 100000) {
        formData["diskon"] = 0.25 * formData["total"];
    } else {
        formData["diskon"] = 0;
    }

    formData["bayar"] = formData["total"] - formData["diskon"];

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table2");
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.kode_barang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama_barang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jumlah;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.harga;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.total;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.diskon;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.bayar;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = '<button class="update" onclick="OnUpdate(this)">Update</button> <button class="delete" onclick="OnDelete(this)">Delete</button>';
}

function resetForm() {
    document.getElementById("kode_barang").value = "";
    document.getElementById("nama_barang").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("harga").value = "";
    selectedRow = null;
}

function OnUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("kode_barang").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama_barang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("jumlah").value = selectedRow.cells[2].innerHTML;
    document.getElementById("harga").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.kode_barang;
    selectedRow.cells[1].innerHTML = formData.nama_barang;
    selectedRow.cells[2].innerHTML = formData.jumlah;
    selectedRow.cells[3].innerHTML = formData.harga;
    selectedRow.cells[4].innerHTML = formData.total;
    selectedRow.cells[5].innerHTML = formData.diskon;
    selectedRow.cells[6].innerHTML = formData.bayar;
}

function OnDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
        resetForm();
    }
}

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
