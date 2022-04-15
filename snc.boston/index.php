<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/home_slideshow.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
<link rel="icon" type="image/ico" href="favicon.ico">
<style>
a.zaraza:link
{
	text-decoration: none;
	border-bottom: 1px solid #cc3333;
	color: black;
}
a.zaraza:visited 
{
	text-decoration: none;
	border-bottom: 1px solid #cc3333;
	color: black;
}
a.zaraza:hover   
{
	color:white;
	background-color: #cc3333;
	text-decoration:none;
	border-bottom: 1px solid white;
}
a.zaraza:active  
{
	text-decoration: none;
	border-bottom: 1px solid #cc3333;
	color: black;
}
#zaraza
{
	border-bottom: 1px solid #cc3333;
}
</style>
</head>

<body>
<div id="page">
<?php include 'includes/top_menu.php'; ?>
<div id="menu_bottom">
</div>
<div class="container">
    <div id="slides">
      <a href="http://www.nicowatine.me" target="_blank"><img src="img/home slide/zaraza_design-slide.jpg" style="border: none;"></a>
      <a href="http://www.nicowatines.com" target="_blank"><img src="img/home slide/greencare-slide.jpg" style="border: none;"></a> 
      <a href="http://www.houstonuncovered.com" target="_blank"><img src="img/home slide/houston_uncovered-slide.jpg" style="border: none;"></a>   
    </div>
</div>
<br>
<br>
<h1 style="text-align:left;">
RECENT NEWS
</h1>
<hr>
<h3>
7 NOV '13</h3>
<ul style="top: -25px; position: relative;">
<li>
<span id="zaraza">ZarazaDesign.com</span> - going live this week!
</li>
</ul>
<?php include 'includes/footer.php'; ?>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="js/jquery.slides.min.js"></script>
  <script>
    $(function() {
      $('#slides').slidesjs({
        width: 1000,
        height: 400,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true,
        		}
      						});
    });
  </script>
</body>
</html>
