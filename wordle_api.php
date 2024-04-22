<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$wordlink = 'https://cs4640.cs.virginia.edu/homework/cs4640-wordlist.txt'; //'wordlist.txt';

// echo $wordlink;
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

$context = stream_context_create([
    "ssl" => [
        "verify_peer" => false,
        "verify_peer_name" => false,
    ]
]);

$word_bank = file_get_contents($wordlink,false,$context);
$word_bank = explode("\n", $word_bank);

//  echo print_r($word_bank);

$index = array_rand($word_bank);
// echo $index;
// 
$word_chosen = $word_bank[$index];

echo json_encode(['word' => $word_chosen]);


?>
