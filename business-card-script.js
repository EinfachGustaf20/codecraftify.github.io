document.getElementById("business-card-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const occupation = formData.get("occupation");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const avatar = document.getElementById("avatar").files[0];

  // Create FileReader object to read uploaded image
  const reader = new FileReader();
  reader.onload = function(event) {
    const avatarURL = event.target.result;

    // Create a new canvas element to draw the card
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions for HD resolution
    canvas.width = 1200;
    canvas.height = 720;

    // Draw the card on the canvas
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the uploaded avatar
    const avatarImage = new Image();
    avatarImage.src = avatarURL;
    avatarImage.onload = function() {
      ctx.drawImage(avatarImage, 20, 220, 240, 240); // Position left-center

      // Add text to the canvas
      ctx.fillStyle = "#333";
      ctx.font = "bold 64px Arial"; // Increase font size for name
      ctx.textAlign = "left"; // Align text to the left
      ctx.fillText(name, 280, 280);
      ctx.font = "italic 48px Arial"; // Increase font size for occupation, email, and phone
      ctx.fillText(occupation, 280, 360);
      ctx.fillText(email, 280, 440);
      ctx.fillText(phone, 280, 520);

      // Convert canvas to data URL
      const cardDataURL = canvas.toDataURL("image/png", 1.0); // Set quality to 1 for HD

      // Create a download link for the card
      const downloadLink = document.createElement("a");
      downloadLink.href = cardDataURL;
      downloadLink.download = "business_card.png";
      downloadLink.click();
    };
  };

  // Read the uploaded image as Data URL
  reader.readAsDataURL(avatar);
});
