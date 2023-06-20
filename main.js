title();
document.getElementById('studentInputForm').addEventListener('submit', saveStudent);

var number = 0;
document.getElementById('button').addEventListener('click', function() {
  number++;
});

function saveStudent(e) {
    var  stdName = document.getElementById('studentName').value;
    if(!stdName){
        alert('please fill name');
        return false;
    }
    var unqId = number;
    var student = {
        name: stdName,
        id: unqId
    }
    e.preventDefault();

    if(localStorage.getItem('students') === null) {
        var students = [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    }else {
        var students = JSON.parse(localStorage.getItem('students'));
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    }

    document.getElementById('studentInputForm').reset();
    title();
    fetchStudents();
}
//list.length+1 = id
function fetchStudents() {
    var students = JSON.parse(localStorage.getItem('students'));
    var studentList = document.getElementById('table');
    studentList.innerHTML = '';
    for (var i=0; i<students.length; i++) {
        var name = students[i].name;
        var id = students[i].id;
        studentList.innerHTML +=  `
                                    <tr>
                                    <th class="text-center">${i+1}</th>
                                    <td>${name}</td>
                                    <td class="text-end"><a href="marks.html"><button class="btn btn-light col-md-2 mb-2"> View Marks</button></a></td>
                                    </tr>
                                  `;
    }
};

function title() {
    if(localStorage.getItem('students') === null){
        document.getElementById('title').innerHTML="No Students Added";
    }else{
        document.getElementById('title').innerHTML="Student List";
    }
};