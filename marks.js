document.getElementById('submit').addEventListener('click', saveMarks);

function saveMarks(e) {
    var subject = document.getElementById('subject').value;
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var ext = document.getElementById('ext').value;
  
    if(!subject || !first || !second || !ext){
       alert('please fill in the form');
       return false; 
    }
    var marks = {
        subject: subject,
        firstInt: first,
        secondInt: second,
        external: ext
    };
    
    e.preventDefault();
    // showMarks();

    if(localStorage.getItem('Marks') === null) {
        var mark= [];
        mark.push(marks);
        localStorage.setItem('Marks', JSON.stringify(mark));
    }else {
        var mark = JSON.parse(localStorage.getItem('Marks'));
        mark.push(marks);
        localStorage.setItem('Marks', JSON.stringify(mark));
    }
    
    document.getElementById('mark-list').reset();
    title();
    showMarks();
}
//fetch marks
function showMarks() {
    var mark = JSON.parse(localStorage.getItem('Marks'));
    var tableResults = document.getElementById('tableResults');
    
if(localStorage.getItem('Marks') !==null){
    var tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `<tr>
                                <th>No</th>
                                <th>Subject</th>
                                <th>First Internal</th>
                                <th>Second Internal</th>
                                <th>External Mark</th>
                                <th>Total</th>
                             </tr>`;
    tableResults.appendChild(tableHeader);
    console.log("Reached here");
    for(var i = 0; i<mark.length; i++) {
        var subject = mark[i].subject;
        var first = +mark[i].firstInt;
        var second = +mark[i].secondInt;
        var ext = +mark[i].external;
        var TotalPercentage = (first + second + ext)/100;
        
        var Total=0;                    
        Total += TotalPercentage

        var newRow = document.createElement('tr');
        newRow.innerHTML =
                           `<td>${i+1}</td>
                            <td>${subject}</td>
                            <td>${first}</td>
                            <td>${second}</td>
                            <td>${ext}</td>
                            <td>${first + second + ext}</td>`;
        tableResults.appendChild(newRow);
        }
    }
        var cgpa = (Total*10) / (i);
        if(localStorage.getItem('Marks') !== null){
            tableResults.innerHTML += `
                                <tr>
                                    <th></th>
                                    <td>CGPA</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>${cgpa.toFixed(2)}</td>
                                </tr>
                                `;
    }
}
function title() {
    if (localStorage.getItem('Marks' === null)){
        document.getElementById('title').innerHTML="No Marks added";
    }else{
        document.getElementById('title').innerHTML=" ";
    }
}