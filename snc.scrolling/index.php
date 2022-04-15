
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8"> 
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<title>web design | Studio N Creations</title>
	
	<link rel="stylesheet" href="css/desktop.css" type="text/css" />
    <link rel="stylesheet" href="css/iphone.css" type="text/css" />
    <!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script src="js/jquery.lettering-0.6.1.min.js"></script>
	<script src="js/jquery.scrollorama.js"></script>

        
</head>

<body>
<div id="desktop">
<div class="scrollblock" style="height: 1200px;">
<div style="position:relative; height: 1000px; top: 80px; width: 960px; margin: 0 auto; text-align: right; height: 600px; color: white;"><img src="img/logo-web.gif" style="position: absolute; left: 0;"/><div style="position:absolute; right: 10px; width: 325px; top: 310px; text-align: left;"><h1 class="header">web<br />design</h1><p style="margin-left: 0px;width: 400px; color: white;">Studio N Creations</p></div>
</div>
</div> 
<div class="scrollblock" id="examples-transition" style="height: 600px; background-image:url(img/Keyboard-No-Numbers.gif); background-position:bottom center; background-repeat:no-repeat; background-color: black;">
<h3 id="zoom-in" style="position: absolute; top: 80px; margin:0 auto; width: 100%;"><img src="img/Studio-N2.png" style="margin-bottom: 300px;"/></h3>
<h3 id="unpin-intro" ></h3>
</div>
<div class="scrollblock" id="examples-transition" style="height: 600px;	background-color: black;">
    <h3 id="fly-in"><img src="img/we-love-webdesign.gif"  style="padding-top: 100px;"/></h3>
	<h3 id="unpin-fly" ></h3>
</div>
<div class="b-w-gradient">
</div>
<div class="scrollblock2" style="height: 2000px;">
<div style="width: 100%; border-top: 1px solid black; border-bottom: 1px solid black;top: 50px;">
<div class="band" data-6500="background-position:0 100px;" data-3000="background-position:0 -2500px;">
</div><!--/ "design" parallax-->
</div>
<div id="blue_band">
<h1>some of our works</h1> 
</div>

</div>
</div>



    

 



<script>
		$(document).ready(function() {
			
			// initialize the plugin, pass in the class selector for the sections of content (blocks)
			var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			
			// assign function to add behavior for onBlockChange event
			scrollorama.onBlockChange(function() {
				var i = scrollorama.blockIndex;
				$('#console')
					.css('display','block')
					.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
			});
			
			// lettering.js for coolness
			$('#title').lettering();
			$('#title span')
				.css('display','block')
				.css('float','left');
			$('.char9').css('padding-left','6px');
			
			
			scrollorama.animate('#zoom-in',{ delay: 200, duration: 1000, property:'zoom', start:8 })
			scrollorama.animate('#fly-in',{ delay: 100, duration: 1500, property:'top', start:-1800, end:0 })

			// animate some examples
			
			scrollorama
				.animate('#unpin-intro',{ duration:1400, property:'padding-top', start:900, pin:true })
			scrollorama
				.animate('#unpin-fly',{ duration:2200, property:'padding-top', start:2400, pin:true })	
			
			
		});
	</script>
<script type="text/javascript" src="js/skrollr.js"></script>
	<script type="text/javascript">
	skrollr.init({
		forceHeight: false
	});
	</script>

   
</body>
</html>
