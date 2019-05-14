<?php
function soma ($num1, $num2){
    return $num1 + $num2;
}

$numeros = json_decode(file_get_contents('php://input'));

$soma = soma($numeros->num1, $numeros->num2);
echo json_encode($soma);

?>