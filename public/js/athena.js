

//************** Expert Mode Functions  */
$('#expertModeCheckbox').change(function() {
	$.ajax({url: '/printer/view/toggle',type: 'GET',dataType: 'json'}); 
	window.location.reload();
});



//************** Calibrations Functions  */

var movement = 1000; // Default movement value is 1 mm

function moveZAxis(direction) {
  console.log(`/z-axis/move/${direction}/micron/${movement}`)
}

function updateMovementButtons() {
  console.log("#btnMove" + movement)
  $(".btn-movement").removeClass("btn-movement-active"); // Remove active class from all buttons
  $("#btnMove" + movement).addClass("btn-movement-active"); // Add active class to the selected button
}

$("#btnUp").click(function() {
  moveZAxis("up");
});

$("#btnDown").click(function() {
  moveZAxis("down");
});

$("#btnMove100").click(function() {
  movement = 100;
  updateMovementButtons();
});

$("#btnMove1000").click(function() {
  movement = 1000;
  updateMovementButtons();
});

$("#btnMove10000").click(function() {
  movement = 10000;
  updateMovementButtons();
});