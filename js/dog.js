function generateDogImage() {
  let img = document.getElementById("img");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      img.src = data.message;
    });
}
