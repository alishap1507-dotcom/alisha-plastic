(function () {
  var NUMBER = "919979848398"; // papa's WhatsApp number with country code

  var product = document.getElementById("product");
  var qty = document.getElementById("qty");
  var nameField = document.getElementById("name");
  var msg = document.getElementById("msg");
  var error = document.getElementById("error");

  // "Enquire" on a product card selects that product in the form
  document.querySelectorAll("[data-product]").forEach(function (link) {
    link.addEventListener("click", function () {
      var wanted = link.getAttribute("data-product");
      for (var i = 0; i < product.options.length; i++) {
        if (product.options[i].text === wanted) {
          product.selectedIndex = i;
          break;
        }
      }
    });
  });

  // Send button: check the form, then open WhatsApp with the message ready
  document.getElementById("send").addEventListener("click", function () {
    error.textContent = "";

    if (!qty.value.trim()) {
      error.textContent = "Please write the quantity and size.";
      qty.focus();
      return;
    }
    if (!nameField.value.trim()) {
      error.textContent = "Please write your name.";
      nameField.focus();
      return;
    }

    var lines = [
      "Hello Alisha Plastics,",
      "Product: " + product.value,
      "Quantity and size: " + qty.value.trim(),
      "Name: " + nameField.value.trim()
    ];
    if (msg.value.trim()) lines.push("Details: " + msg.value.trim());

    var url = "https://wa.me/" + NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
})();