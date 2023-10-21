//************** Resin Profile Functions  */

$("#dynamicSupportWaitCheckbox").change(function () {
  if ($(this).is(":checked")) {
    $("#SupportWaitBeforePrintSimple").val(0).prop("disabled", true);
  } else {
    $("#SupportWaitBeforePrintSimple").prop("disabled", false);
  }
});

$("#dynamicWaitCheckbox").change(function () {
  if ($(this).is(":checked")) {
    $("#WaitBeforePrintSimple").val(0).prop("disabled", true);
  } else {
    $("#WaitBeforePrintSimple").prop("disabled", false);
  }
});

$("#UvPwmValuePercentSimple").change(function () {
  //clamp value
  if (this.value > 100) this.value = 100;
  if (this.value < 1) this.value = 1;
  var percentValue = parseFloat(this.value);
  if (!isNaN(percentValue)) {
    var actualValue = percentValue / 100;
    document.getElementById("UvPwmValueSimple").value = actualValue.toFixed(2);
  }
});

//This is used to adjust any values just for display
document.addEventListener("DOMContentLoaded", function () {
  var UvPwmComp = document.getElementById("UvPwmValuePercentSimple");
  if (UvPwmComp) {
    var scaledValue = UvPwmComp.value * 100;
    UvPwmComp.value = scaledValue.toFixed(0);
  }
});

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
  console.log(`/printer/force-stop`);
  $.ajax({ url: `/printer/force-stop`, type: "GET", dataType: "json" });
});

$("#btnMoveHome").click(function () {
  console.log(`/z-axis/calibrate`);
  $.ajax({ url: `/z-axis/calibrate`, type: "GET", dataType: "json" });
});

$("#btnMovePark").click(function () {
  console.log(`/z-axis/top`);
  $.ajax({ url: `/z-axis/top`, type: "GET", dataType: "json" });
});

$("#btnMoveBottom").click(function () {
  console.log(`/z-axis/bottom`);
  $.ajax({ url: `/z-axis/bottom`, type: "GET", dataType: "json" });
});
