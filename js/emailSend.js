function emailSend() {
  // e.preventDefault();
  // var fname = document.getElementById("form_name").value;
  var lname = document.getElementById("form_name1").value;
  var useremail = document.getElementById("form_email").value;
  var contact = document.getElementById("form_phone").value;
  var message = document.getElementById("form_message").value;
  var fname = "Devansh";
  const formData = { fname, lname, useremail, contact, message };
  console.log(formData);
  fetch("http://localhost:5000/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: document.getElementById("form_name").value,
      lname,
      useremail,
      contact,
      message,
    }),
  }).then((respone) => respone.json().then((res) => alert(res)));

  // const parsedResponse = await response.json();
  // alert(response);
}

function handleOnClickbtn() {
  console.log("Click Triggered");
}
