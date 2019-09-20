function calculateTip() {
  console.log('in function');
  let billAmt = $("#billAmt").val();
  let tipPct = $("#tipPct").val();
  let totalTip;

  if (billAmt === "" || tipPct === "") {
    alert("Please enter values.");
    return;
  }

  if (isNaN(billAmt) || isNaN(tipPct)) {
    alert("Values must be numbers.");
    return;
  }

  totalTip = billAmt * (tipPct / 100);
  totalTip = Math.round(totalTip * 100) / 100;
  totalTip = totalTip.toFixed(2);

  $("#tipTotal").text(totalTip);
}

$("#calculate").on('click', function() {
  calculateTip();
});