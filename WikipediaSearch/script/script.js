<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Search things from Wikipedia.">
    <meta name="keywords" content="wikipedia, search">
    <meta name="author" content="Valon Haliti, Zanita Rahimi">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="style/style.css"/>
    <link href="https://fonts.googleapis.com/css?family=Crushed" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pontano+Sans" rel="stylesheet">
    <title>Wikipedia Search</title>
</head>

<body>
<div class="container">

    <div class="centered-text padding-top" id="header">
        <h1 id="title-page">Wikipedia Search</h1>
        <form id="getForm">
            <input type="text" name="Search" id="search-field" placeholder="Search...">
        </form>
        <a id="random-link" href="https://en.wikipedia.org/wiki/Special:Random">Random link</a>
    </div>

    <div id="search-results">
    </div>

</div>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<script src="script/script.js"></script>
</html>
