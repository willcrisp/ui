//************** Expert Mode Functions  */
$("#expertModeCheckbox").change(function () {
  $.ajax({ url: "/printer/view/toggle", type: "GET", dataType: "json" });
  window.location.reload();
});

//************** Resin Profile Functions  */

function toggleDynamicWaitBottom() {
  var inputElement = document.getElementById("SupportWaitBeforePrint");
  inputElement.value = '6.90'
}

//************** Calibrations Functions  */

var movement = 1000; // Default movement value is 1 mm

function moveZAxis(direction) {
  console.log(`/z-axis/move/${direction}/micron/${movement}`);
  $.ajax({ url: `/z-axis/move/${direction}/micron/${movement}`, type: "GET", dataType: "json" });
}

function updateMovementButtons() {
  $(".btn-movement").removeClass("btn-movement-active"); // Remove active class from all buttons
  $("#btnMove" + movement).addClass("btn-movement-active"); // Add active class to the selected button
}

$("#btnUp").click(function () {
  moveZAxis("up");
});

$("#btnDown").click(function () {
  moveZAxis("down");
});

$("#btnMove100").click(function () {
  movement = 100;
  updateMovementButtons();
});

$("#btnMove1000").click(function () {
  movement = 1000;
  updateMovementButtons();
});

$("#btnMove10000").click(function () {
  movement = 10000;
  updateMovementButtons();
});

$("#btnMove100000").click(function () {
  movement = 100000;
  updateMovementButtons();
});

$("#btnStop").click(function () {
  console.log(`/pritner/stop`);
  $.ajax({ url: `/printer/stop`, type: "GET", dataType: "json" });
});

$("#btnMoveTop").click(function () {
  console.log(`/z-axis/top`);
  $.ajax({ url: `/z-axis/top`, type: "GET", dataType: "json" });
});

$("#btnMoveBottom").click(function () {
  console.log(`/z-axis/bottom`);
  $.ajax({ url: `/z-axis/bottom`, type: "GET", dataType: "json" });
});
