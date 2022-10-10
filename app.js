let number = 0;
document.getElementById('add-button').addEventListener('click', function () {
    number++;
    const inputField = document.getElementById('input-field').value;
    if (inputField == '') {
        alert('Please Enter a Value');
    }
    else {
        const tableContent = document.getElementById('table-content');
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <th scope="row">${number}</th>
        <td>${inputField}</td>
        <td>
        <button class='btn btn-success done-button'>Done</button>
        <button class='btn btn-danger delete-button'>Delete</button>
        </td>`;
        tableContent.appendChild(tableRow);
        document.getElementById('input-field').value = '';

        // done button
        const doneButton = document.getElementsByClassName('done-button');
        for (const button of doneButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.textDecoration = 'line-through';
            });
        };

        // delete button
        const deleteButton = document.getElementsByClassName('delete-button');
        for (const button of deleteButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = 'none';
            });
        };

        // clear all button
        document.getElementById('clear-all').addEventListener('click', function (event) {
            document.getElementById('table-content').style.display = 'none';
            window.location.reload();
        });

    }
});
