<?php

include('includes/header.html');


if($_GET['page'] == 'location'){
    include('pages/location.html');

}else{
    include('pages/espace-sud.html');
}


include('includes/footer.html');