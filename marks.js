title();
document.getElementById('submit').addEventListener('click', saveMarks);
console.log("Reached here");
function saveMarks(e) {
    var subject = document.getElementById('subject').value;
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var ext = document.getElementById('ext').value;
  
    if(!subject || !first || !second || !ext){
       alert('please fill in the form');
       return false; 
    };
    var marks = {
        subject: subject,
        firstInt: first,
        secondInt: second,
        external: ext
    };
    
    e.preventDefault();
   

    if(localStorage.getItem('Marks') === null) {
        var mark= [];
        mark.push(marks);
        localStorage.setItem('Marks', JSON.stringify(mark));
    }else {
        var mark = JSON.parse(localStorage.getItem('Marks'));
        mark.push(marks);
        localStorage.setItem('Marks', JSON.stringify(mark));
    };
    
    document.getElementById('mark-list').reset();
    title();
    console.log("Reached ");
    showMarks();
};



//fetch marks
function showMarks() {
    var mark = JSON.parse(localStorage.getItem('Marks'));
    var tableResults = document.getElementById('table');
    
    if(localStorage.getItem('Marks') !== null){
    table.innerHTML = `
    
                                <thead>
                                <tr>
                                <th>No</th>
                                <th>Subject</th>
                                <th>First Internal</th>
                                <th>Second Internal</th>
                                <th>External Mark</th>
                                <th>Total</th>
                                </tr>
                             </thead>`;
    


    console.log("Reached here");

    var Total=0;         
    for(var i = 0; i< mark.length ; i++) {
        var subject = mark[i].subject;
        var first = +mark[i].firstInt;
        var second = +mark[i].secondInt;
        var ext = +mark[i].external;
        var TotalPercentage = (first + second + ext)/100;
        
                   
        Total += TotalPercentage;

        console.log("Reached here");
       
        tableResults.innerHTML +=
                           `
                           <tr>
                           <td>${i+1}</td>
                            <td>${subject}</td>
                            <td>${first}</td>
                            <td>${second}</td>
                            <td>${ext}</td>
                            <td>${first + second + ext}</td>
                            </tr>`;
        }
    };
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
                                console.log("Reached here");
    }
};
function title() {
    console.log("Reached here");
    if (localStorage.getItem("Marks") === null ){    //br error
       
        document.getElementById('title').innerHTML="No Marks added";
    }else{
        document.getElementById('title').innerHTML=" ";
    }
};