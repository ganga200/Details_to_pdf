document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
  
    if (!name || !email || !phone || !address) {
      alert('Please fill in all the fields.');
      return;
    }
  
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    doc.text("User Details", 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);
    doc.text(`Address: ${address}`, 10, 50);
  
    doc.save('user_details.pdf');
  });
  