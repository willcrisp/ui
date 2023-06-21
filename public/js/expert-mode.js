//expert mode save to local storage
var expertModeCheck = localStorage.getItem("expertModeCheck");
if (expertModeCheck === null) {
  expertModeCheck = false;
} else {
  expertModeCheck = JSON.parse(expertModeCheck);
  $("#expertMode").prop("checked", expertModeCheck);
}

$(document).ready(function () {
  if (expertModeCheck) {
    $(".expertMode").removeClass("hidden");
    $(".notExpertMode").addClass("hidden");
  } else {
    $(".notExpertMode").removeClass("hidden");
    $(".expertMode").addClass("hidden");
  }
});

// Handle the checkbox change event
$("#expertMode").change(function () {
  expertModeCheck = $(this).is(":checked");
  localStorage.setItem("expertModeCheck", JSON.stringify(expertModeCheck));

  if (expertModeCheck) {
    $(".expertMode").removeClass("hidden");
    $(".notExpertMode").addClass("hidden");
  } else {
    $(".notExpertMode").removeClass("hidden");
    $(".expertMode").addClass("hidden");
  }
});
