

//************** Expert Mode Functions  */
$('#expertModeCheckbox').change(function() {
	$.ajax({url: '/printer/view/toggle',type: 'GET',dataType: 'json'}); 
	window.location.reload();
});



//************** Calibrations Functions  */
var currentPosition = 0;
var movement = 1; // Default movement value is 1 mm

function moveZAxis(direction) {
  if (direction === "up") {
    currentPosition += movement;
  } else if (direction === "down") {
    currentPosition -= movement;
  }
  console.log("Current position: " + currentPosition + " mm");
  // Here, you can send the currentPosition value to your backend or perform any desired action
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

$("#btnMove01").click(function() {
  movement = 0.1;
  updateMovementButtons();
});

$("#btnMove1").click(function() {
  movement = 1;
  updateMovementButtons();
});

$("#btnMove10").click(function() {
  movement = 10;
  updateMovementButtons();
});