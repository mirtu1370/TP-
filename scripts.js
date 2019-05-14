$(document).ready(function(){
    $("#calcular").click(function(e){
        e.preventDefault();

        var num1 = $("#num1").val();
        var num2 = $("#num2").val();

        if(num1 != "" && num2 != ""){

            var numeros = {
                "num1": num1,
                "num2": num2
            };

            var numerosJSON = JSON.stringify(numeros);

            $.ajax({
                type: "POST",
                url: "process.php",
                data: numerosJSON,
                success: function(data){
                    $("#resultado").text(data);
                },
                error: function (data){
                    alert("Ocorreu um erro!");
                }
            });
        }else{
            $("#resultado").text("Preencha ambos os campos!");
        }
        });
    }); 