<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        include("databases.php");

		$dat = $_POST["dat"];
		$tim = $_POST["tim"];
        
    	$rows = array();
        $query = "SELECT * FROM `moon2` WHERE `data`='$dat' and '$tim' between `time_start` and `time_stop`"; 
        $result = mysql_query($query, $link);

		while ($row = mysql_fetch_assoc($result)) 
		{
			$rows[] = $row;
		}
		
		echo json_encode($rows); 
    }                
	
?>