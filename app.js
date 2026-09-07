var date = prompt("Enter the date in the year :");
var inputDate = new Date(date);
var year = inputDate.getFullYear();
var month = inputDate.getMonth() + 1; // Months are zero-based, so we add 1
var day = inputDate.getDate();
var weekday = inputDate.getDay(); // 0 (Sunday) to 6 (Saturday)
var ramadanStartDate = new Date("2000-03-10"); // Start date of Year
var ramadanEndDate = new Date("2000-04-08"); // End date of Year

if (inputDate < ramadanStartDate) {
    alert("The date you entered is before the start of Year.");
} else {
    alert("The date you entered is during or after the start of Year.");
}
if (inputDate >= ramadanStartDate && inputDate <= ramadanEndDate) {
    alert("The date you entered is during Year.");
}   
if (inputDate > ramadanEndDate) {
    alert("The date you entered is after Year.");
}
document.write("The date you entered is: " + inputDate.toDateString() + "<br>");
document.write("The year is: " + year + "<br>");
document.write("The month is: " + month + "<br>");
document.write("The day is: " + day + "<br>");
document.write("The weekday is: " + weekday + "<br>");