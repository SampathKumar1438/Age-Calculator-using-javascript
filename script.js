document.getElementById('manualAgeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value) - 1; 
    let year = parseInt(document.getElementById('year').value);
    let birthdate = new Date(year, month, day);
    if (!isNaN(birthdate.getTime())) { 
        let today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        let monthDifference = today.getMonth() - birthdate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        document.getElementById('result').textContent = `Your age is ${age} years.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date.';
    }
});
