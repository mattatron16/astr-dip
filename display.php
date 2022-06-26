<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        include("databases.php");

		$zz = $_POST["zz"];
		$text_ = $_POST["text_"];
        
        $query = "insert into moon2 (zz, text_) values ('$zz', '$text_')"; 
        $res = mysql_query($query, $induction);

        echo $res; 
    }                 
?>