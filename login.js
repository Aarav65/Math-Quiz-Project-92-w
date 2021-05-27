function adduser()
{
    
    player1_name = document.getElementById("lplayer1_name").value;
    player2_name = document.getElementById("lplayer2_name").value;

    localStorage.setItem("lplayer1_name", player1_name);
    localStorage.setItem("lplayer2_name", player2_name);

    window.location = "game_page.html";
} 