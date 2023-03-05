
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    //agregar a localStorage el valor de player 2
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}

