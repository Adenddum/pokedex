
$('document').ready(function(){
  $("#searchButton").on("click",function(){
    name = document.getElementById("searchWords").value;
    $.ajaxSetup({
        method:"GET",
        url:"https://pokeapi.co/api/v2/pokemon/" + name,
        success: function(pokemon){
          $(".clearMe").empty(); 
          
          var pokemonName = pokemon.name 
          $("#pokemon").text(pokemonName); 
          if (pokemon.id<10){ 
            $("#number").text("#00" + pokemon.id);
          } else if (pokemon.id>10 && pokemon.id<100){ 
            $("#number").text("#0" + pokemon.id);
          } else { 
            $("#number").text("#"+pokemon.id);
          };
          $("#spriteFront").attr("src", pokemon.sprites.front_default);
          $("#spriteBack").attr("src", pokemon.sprites.back_default);
          $("#ability").show(); 
          $("#typeHeader").show();
          for (i=0; i<pokemon.types.length; i++){ 
            $("#type").append(pokemon.types[i].type.name + "<br>"); 
          }; 
          
          function abilities(a){ 
            var abilityName = pokemon.abilities[i].ability.name;
            var targetAbility = "ability" + i;
            $("#abilities").append('<span id="ability' + i + '">' + abilityName + "</span><br>"); 
            $.ajaxSetup({
            method:"GET",
            url: "https://pokeapi.co/api/v2/ability/" + abilityName,
            success: function(ability){
              $("#" + targetAbility).append(" - " + ability.effect_entries[0].short_effect + "<br>"); 
              }, 
            }); 
            $.ajax(); 
          }; 
          
          for (i =0; i < pokemon.abilities.length; i++){ 
            abilities(i);
          }; 
        }, 
      });
      $.ajax();
  }); 
  
  
    $('#searchWords').keyup(function(e){
        if(e.which == 13){ 
            $('#searchButton').click();
        }; 
  });   
});