// var game_genre = ["Dota 2","League of Legends","Fortnite","Starcraft II","Counter-Strike: Global Offensive"]


var earning;
var game_name = document.getElementById('game_name');
var player_name = document.getElementById('player_name');
var player_img = document.getElementById('player_img');

var team_name = document.getElementById('team_name');
var team_img = document.getElementById('team_img');

var earning_img = document.getElementById('earning_img');
var prize_img = document.getElementById('prize_img');

// var svg_table = d3.select("#table")
//     .appemd("svg")
//     .attr("width", 900)
//     .attr("height", 620)
//     .append("g")




function show_table(game){

    var earn = $.ajax({
        url: "https://raw.githubusercontent.com/Edwin628/csv_data/main/highest_earning_players.json",
        type: "GET",
        dataType: "json", 
        async: false,
        success: function(data) {
        }
    });
    console.log(game);
    console.log(earn);
    earning = earn.responseJSON;
    console.log(earning[0]);
    var game_earning = earning.filter(function (e) { 
        if (e['Game'] == game)
            return  e;
     });
    
    var max = Math.max.apply(Math, game_earning.map(function(o) {
        return o.TotalUSDPrize; 
    }));

    var max_player = game_earning.filter(function (e) { 
        if (e['TotalUSDPrize'] == max)
            return  e;
     });
    console.log(max);
    console.log(max_player);
    console.log(typeof(max_player[0]));
    game_name.innerHTML = game
    player_name.innerHTML = max_player[0].NameFirst.concat(" ").concat(max_player[0].NameLast);
    player_img.src = "img\\player\\" + max_player[0].NameFirst +".png";
    

    var team_earn = $.ajax({
        url: "https://raw.githubusercontent.com/Edwin628/csv_data/main/highest_earning_teams.json",
        type: "GET",
        dataType: "json", 
        async: false,
        success: function(data) {
        }
    });

    var team_earning = team_earn.responseJSON.filter(function (e) { 
        if (e['Game'] == game)
            return  e;
     });
     
    console.log(team_earning);
    var team_max_prize = Math.max.apply(Math, team_earning.map(function(o) {
        return o.TotalUSDPrize; 
    }));

    var max_team = team_earning.filter(function (e) { 
        if (e['TotalUSDPrize'] == team_max_prize)
            return  e;
     });

     console.log(max_team);
     team_name.innerHTML = max_team[0].TeamName;
     var path_team = max_team[0].TeamName.split(" ").join("");
     team_img.src = "img\\team\\" + path_team +".png";
     
     earning_img.src = "img\\" + "earning" +".png";
     prize_img.src = "img\\" + "prize" +".png";

}


