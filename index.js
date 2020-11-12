function getDogImage (num) {
    console.log(num);
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert(error));
}


function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const inputNumber = $('#input-number').val();
      if (!inputNumber) {
          getDogImage("3");
      } else {
        getDogImage(inputNumber);
      }
    });
}

$(function() {
    console.log("App loaded! Waiting for submit!");
    watchForm();
});