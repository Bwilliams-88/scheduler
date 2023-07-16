// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
$(document).ready(function() {
  var currentHour = (new Date()).getHours();
// console.log(currentHour);
  $('.colorcode')
  .each(function() {
    var val = parseInt($(this).prop('id'));

    if (val > currentHour && val < currentHour -6) {
      $(this).css('past');
    } else if (val === currentHour) {
      $(this).css('present');
    } else (val > currentHour && val < currentHour +6) 
      $(this).css('future');
    })


 $('.saveBtn').on('click', function(event) {
  event.preventDefault();
  console.log(event.target);
  var sib = $(event.target).siblings('textArea').val();
  // console.log(sib);
  localStorage.setItem('textArea', sib);
 })


  var currentDate = dayjs().format('dddd, MMM');
  var currentYear = dayjs().format('YYYY');
  var currentDay = dayjs().format('DD');
  // console.log(currentDay);
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  $('#currentDay').text(currentDate + ' ' + currentDay + nth(currentDay) + ' ' + currentYear);
})
})