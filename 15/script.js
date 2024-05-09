const feedbackForm = document.getElementById("feedbackForm");
const feedbackOutput = document.getElementById("feedbackOutput");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const feedback = {};
  for (let [key, value] of formData.entries()) {
    if (value === "") {
      value = "Nothing";
    }
    feedback[key] = value;
  }

  displayFeedback(feedback);
  this.reset();
});

function displayFeedback(feedback) {
  let outputHTML = "<h3>Feedback Received:</h3>";
  for (const [key, value] of Object.entries(feedback)) {
    outputHTML += `<p><strong style="text-transform: uppercase; color: blue">${key}:</strong> ${value}</p>`;
  }
  feedbackOutput.innerHTML = outputHTML;
}
