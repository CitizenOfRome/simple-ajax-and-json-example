(function() {
    'use strict';
    // XMLHttpRequest - Async
    // 1. Get the student data JSON
    console.log('Before fetch');
    console.log('1+2=', 1 + 2);
    fetch(new Request('./data/data.json'), {
        method: "GET"
    }).then(function(response) {
        console.log('Done fetch', response);
        return response.text().then(function(result) {
            console.log('Got text result', result);
            var json = JSON.parse(result),
                htmlMarkup = '';
            console.log('Parsed JSON', json);
            // 2. Loop over the student data and generate HTML
            for(var i = 0; i < json.students.length; i++) {
                var student = json.students[i];
                console.log('student', student);
                htmlMarkup += '<tr>\
                  <th scope="row">' + i + '</th>\
                  <td>' + student.name + '</td>\
                  <td>' + student.specialization + '</td>\
                  <td>' + student.age + '</td>\
                </tr>';
            }
            console.log('htmlMarkup', htmlMarkup);
            // 3. Add student data into the HTML dynamically
            document.getElementById('studentDataWrapper').innerHTML = htmlMarkup;
        });
    });
    console.log('After fetch');
})();