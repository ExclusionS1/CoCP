{/* <script>  */}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzedZKA9mLUN66HmVdLigXzsWfMoXnOJpse76vIl55xhdFIkOKpwzB1CCOI7LZDC1SWCA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")  

  const scriptURL2 = 'https://script.google.com/macros/s/AKfycbx86CCHup4qHiVeE0p1XNJ4kmR6VsFbcZNWWnGWvYSNVEqhIsfgI2r1DFr2vyKeYIN5/exec'    
  
  const form2 = document.forms['contact-to-google-sheet']
  const msg2 = document.getElementById("msg2")  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank you For Subscribing My Site by 18620 Surya"
          setTimeout(function(){
              msg.innerHTML = "This site powered by 18620 Surya in 2024"
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })  

  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
      .then(response => {
          msg2.innerHTML = "Thanks for your contact details by 18620 Surya"
          setTimeout(function(){
              msg2.innerHTML = "Contact"
          }, 5000)
          form2.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>