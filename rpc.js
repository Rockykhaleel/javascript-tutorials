function option(vale) {
  switch (vale) {
    case "rock":
      let human = (document.getElementById(vale).style.backgroundColor = "red");
      document.getElementById(vale).innerHTML = "Human has selected " + vale;
      let remaining = ["paper", "scissors"];
      let rand = Math.floor(Math.random() * remaining.length);
      let computer = remaining[rand];
      let compterbox = (document.getElementById(
        computer
      ).style.backgroundColor = "green");
      document.getElementById(computer).innerHTML =
        "Computer has selected " + computer;

      if (computer == "scissors") {
        setTimeout(() => {
          alert(`The Winner is Human`);
          window.location.reload();
        }, 2000);
      } else {
        setTimeout(() => {
          alert(`The winner is Computer`);
          window.location.reload();
        }, 2000);
      }
      break;

    case "paper":
      let humann = (document.getElementById(vale).style.backgroundColor =
        "red");
      document.getElementById(vale).innerHTML = "Human has selected " + vale;
      let remainingg = ["rock", "scissors"];
      let randd = Math.floor(Math.random() * remainingg.length);
      let computerr = remainingg[randd];
      let compterboxx = (document.getElementById(
        computerr
      ).style.backgroundColor = "green");
      document.getElementById(computerr).innerHTML =
        "Computer has selected " + computerr;

      if (computerr == "rock") {
        setTimeout(() => {
          alert(`The Winner is Human`);
          window.location.reload();
        }, 2000);
      } else {
        setTimeout(() => {
          alert(`The winner is Computer`);
          window.location.reload();
        }, 2000);
      }
      break;
    case "scissors":
      let humannn = (document.getElementById(vale).style.backgroundColor =
        "red");
      document.getElementById(vale).innerHTML = "Human has selected " + vale;
      let remaininggg = ["rock", "paper"];
      let randdd = Math.floor(Math.random() * remaininggg.length);
      let computerrr = remaininggg[randdd];
      let compterboxxx = (document.getElementById(
        computerrr
      ).style.backgroundColor = "green");
      document.getElementById(computerrr).innerHTML =
        "Computer has selected " + computerrr;

      if (computerrr == "paper") {
        setTimeout(() => {
          alert(`The Winner is Human`);
          window.location.reload();
        }, 2000);
      } else {
        setTimeout(() => {
          alert(`The winner is Computer`);
          window.location.reload();
        }, 2000);
      }
      break;

    default:
      break;
  }
}
