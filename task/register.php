<?php
if(isset($_GET['submit'])){
    $name=$_GET['name'];
    $email = $_GET['email'];
    if($name === '' or $email === ''){
        echo "Form is not filled completely";
    }else{
    echo $name;
    echo "<br>";
    echo $email;
    }
} else {
    echo "Not Authorised!";
}
