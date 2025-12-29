function submitTransaction() {
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("ادخل مبلغ صحيح");
    return;
  }

  if (amount > 3000) {
    alert("تجاوزت الحد الأقصى للمديونية (3000 جنيه)");
    return;
  }

  alert("تم إرسال الطلب وجاري مراجعته من إدارة Brand Store");
}
