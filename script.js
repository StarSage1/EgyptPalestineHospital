function searchdoc() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("Doctortable");
    tr = table.getElementsByTagName("tr");

    // Exclude the first row (table header) from the search
    for (i = 1; i < tr.length; i++) {
      var found = false;
      for (j = 0; j < tr[i].cells.length; j++) {
        td = tr[i].cells[j];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
      }
      if (found) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var id = row.cells[0].innerHTML;
    var name = row.cells[1].innerHTML;
    var email = row.cells[2].innerHTML;
    var department = row.cells[3].innerHTML;
    var office = row.cells[4].innerHTML;
    var startDate = row.cells[5].innerHTML;
    var endtime = row.cells[6].innerHTML;

    row.cells[1].innerHTML = '<input type="text" id="name-input" value="' + name + '">';
    row.cells[2].innerHTML = '<input type="text" id="email-input" value="' + email + '">';
    row.cells[3].innerHTML = '<input type="text" id="department-input" value="' + department + '">';
    row.cells[4].innerHTML = '<input type="text" id="office-input" value="' + office + '">';
    row.cells[5].innerHTML = '<input type="text" id="startDate-input" value="' + startDate + '">';
    row.cells[6].innerHTML = '<input type="text" id="endtime-input" value="' + endtime + '">';

    btn.innerHTML = 'Save';
    btn.onclick = function() {
      var name = document.getElementById('name-input').value;
      var email = document.getElementById('email-input').value;
      var department = document.getElementById('department-input').value;
      var office = document.getElementById('office-input').value;
      var startDate = document.getElementById('startDate-input').value;
      var endtime = document.getElementById('endtime-input').value;

      row.cells[1].innerHTML = name;
      row.cells[2].innerHTML = email;
      row.cells[3].innerHTML = department;
      row.cells[4].innerHTML = office;
      row.cells[5].innerHTML = startDate;
      row.cells[6].innerHTML = endtime;

      btn.innerHTML = 'Update';
      btn.onclick = function() {
        editRow(btn);
      };
    };
  }
  function deleteDoctor(docid) {
    var table = document.getElementById("Doctortable");
    var row = document.getElementById(docid);
    table.deleteRow(row.rowIndex);
  }

  function showadddoctor() {
    document.getElementById("adddoctor").style.display = "block";
  }

  document.getElementById("adddoctorform").addEventListener("submit", function(event) {
    event.preventDefault();
    var table = document.getElementById("Doctortable");
    var row = table.insertRow(-1);
    var id = table.rows.length - 1;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;
    var office = document.getElementById("office").value;
    var start_time = document.getElementById("start_time").value;
    var end_time = document.getElementById("end_time").value;


    row.id = id;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);


    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = department;
    cell5.innerHTML = office;
    cell6.innerHTML = start_time;
    cell7.innerHTML = end_time;
    cell8.innerHTML = '<button class="btn btn-primary" onclick="editRow(this)">Update</button>' +
                      '<button class="btn btn-danger" style="margin-left: 4px;" onclick="deleteDoctor(' + id + ')">Delete</button>';

    document.getElementById("adddoctor").style.display = "none";
    document.getElementById("adddoctorform").reset();
  });

  function hideadddoctor() {
    document.getElementById("adddoctor").style.display = "none";
    document.getElementById("adddoctorform").reset();
  }