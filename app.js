function submitTransaction() {
  const amount = document.getElementById("amount").value;

  if (amount > 3000) {
    alert("تجاوزت الحد المسموح");
    return;
  }

  alert("تم إرسال الطلب وجاري مراجعته");
}
