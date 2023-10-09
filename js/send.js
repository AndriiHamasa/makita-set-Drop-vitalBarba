const sendRequest = async (body) => {
  const url = "https://vitalbarbatelegserver.onrender.com"

  const jsonData = JSON.stringify(body)

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${url}/send-message`, requestOptions)

    if (!response.ok) {
      throw new Error('Помилка мережі: ' + response.status);
    }
  } catch (error) {
    console.error('Помилка:', error);
  }
};

const form = document.getElementById("order_form_main")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  
  const name = form.querySelector('input[name="nameZ"]').value;
  const phone = form.querySelector('input[name="phoneZ"]').value;
  


  const formData = {
    tovar: "Makita - 'три іеструменти'",
    
    name,
    phone,
    
  };

  await sendRequest(formData)

  console.log('formData', formData)

  form.querySelector('input[name="nameZ"]').value = ''
  form.querySelector('input[name="phoneZ"]').value = ''

})

