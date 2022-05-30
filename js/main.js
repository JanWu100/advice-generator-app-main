const drawQuote = async () => {

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        document.querySelector("#dice").classList.add("shake");

        setTimeout(() => {
            document.querySelector("#dice").classList.remove("shake");
            document.querySelector("h1").innerHTML = `advice #${data.slip.id}`;
            document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`;
          }, 600);
  
    });
};

document.querySelector(".btn").addEventListener("click", drawQuote);
