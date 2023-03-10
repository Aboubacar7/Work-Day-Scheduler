// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

var dayjs = dayjs()
var timeBlocks = $('.time-block')

console.log(timeBlocks)

var currentHour = dayjs.hour()

$("#currentDay").text(dayjs.format("dddd, MMMM DD YYYY"))

timeBlocks.each(function () {
  if (currentHour > $(this).attr('id')) {
    $(this).addClass('past')
  } else if (currentHour == $(this).attr('id')) {
    $(this).removeClass('past')
    $(this).addClass('present')
  } else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
  }
})

$('.btn').on('click', function () {
  var key = $(this).attr('id')
  var value = $(this).siblings('.description').val()
  localStorage.setItem(key, value)
  getStorage()
})

function getStorage() {
  for (var i = 9; i < 18; i++) {
    var task = localStorage.getItem(i)
    $('#text-' + i).text(task)
  }
}

getStorage()
