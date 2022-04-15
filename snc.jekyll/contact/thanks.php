<?php 
	include($_SERVER['DOCUMENT_ROOT'].'/php/autoVer.php');
?>
<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#" class="no-js" lang="en-US">
<head itemscope itemtype="http://schema.org/WebSite">
	<meta charset="utf-8">
	<!--<link rel="preconnect" href="http://cdn.studioncreations.com">-->
	<title> | Studio N Creations</title>
	<meta name="description" content="" />
	<link rel="canonical" href="" itemprop="url">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="author" href="/humans.txt">

	<link rel="icon" sizes="192x192" href="/touch-icon-192x192.png">

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="" />
	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:url" content="http://studioncreations.com" />
	<meta property="og:site_name" content="Studio N Creations" />
	<meta property="og:image" content="" />

	<link rel="stylesheet" href="<?php autoVer('/css/core.css'); ?>" />
	<link rel="stylesheet" href="<?php autoVer('/css/pages.css'); ?>" />
</head>

<body>
<meta itemprop="datePublished" content="2014-12-13">
<meta itemprop="dateModified" content="2016-05-16">

<div class="row" id="nav-bar">
	<div class="vertical-wrapper">
		<a itemprop="url" href="/" class="title" id="index-link"><span itemprop="name" id="large">Studio N Creations</span><span itemprop="name" id="mini">SNC</span></a>
	</div>
	<nav class="nav-collapse">
		<ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
			<li itemprop="name"><a itemprop="url" href="/">Home</a></li>
			<li itemprop="name" ><a itemprop="url" href="/what-we-do/">Services</a></li>
			<li itemprop="name" ><a itemprop="url" href="/portfolio/">Portfolio</a></li>
			<li itemprop="name" ><a itemprop="url" href="/about-us">About Us</a></li>
			<li itemprop="name"><a itemprop="url" href="http://blog.studioncreations.com">Blog</a></li>
			<li itemprop="name" class="active"><a itemprop="url" href="/contact/">Contact</a></li>
		</ul>
	</nav>
</div>

<div class="height-wrapper">
<section class="hero-header" id="contact">
	<div class="outer-container">
		<div class="row">
			<div class="title-wrapper">
				<h1 class="title">contact</h1>
			</div>
		</div>
	</div>
</section>

<main id="contact">
	<section class="intro-text" id="contact">
		<div class="outer-container">
			<div class="row side-padding">
				<h2>Send me a message - let's get to work!</h2>
			</div>
		</div>
	</section>
	<div class="contact-info">
			<div class="row side-padding">
				<section class="details">
					<h2>Nico Watine</h2>
					<h3 class="standard" id="phone">713-443-3761</h3>
					<h3 class="standard" id="email"><a href="mailto:nico@studioncreations.com" target="_top">nico@studioncreations.com</a></h3>
				</section>
			</div>
			<hr>
			<div class="row side-padding">
				<section class="email-form">
					<h3>Email Form</h3>
					<form name="myform" id="contactForm" action="/php/sendcontact" enctype="multipart/form-data" method="post" /> 
					    <div class="row">
					        <div class="form-row">
					            <label>My name is Nico, what's yours?
					                <input type="text" id="name" name="name" placeholder="your name" />
					            </label>
					            <div id="fname" class="alert alert-error error">
					                <span>Error!!</span> <br>
					                What's your name? | ¿Cuál es tu nombre? | Comment t'appelles-tu? | 何があなたの名前だ? <br> <br>
					            </div>
					        </div>
					        <div class="form-row">
					            <label>What's the best way to reach you?
					                <input type="text" id="email" name="email" placeholder="your email address" />
					            </label>
					            <div id="fmail" class="alert alert-error  error">
					                I think you forgot to put your email address <br>
					                (I do that all the time, too) <br> <br>
					            </div>
					        </div>
					        <div class="form-row" id="buttons">
					            <div class="form-button">
					                <input type="radio" name="site-status" value="I already have a website"><label for="have-site">I already have a website</label>
					            </div>
					            <div class="form-button" id="omega">
					                <input type="radio" name="site-status" value="I don't have my own site"><label for="no-site">I don't have my own site</label>
					            </div>
					        </div>
					        <div class="form-row" id="message-box">
					            <label>So how can I help?
					                <textarea type="text" id="msg" name="message" placeholder="your message"></textarea>
					            </label>
					            <div id="fmsg" class="alert alert-error  error">
					                What did you have in mind? <br> <br>
					            </div>
					        </div>
					        <div class="form-row">
					            <button type="submit" name="submit" id="submit" class="button big-green-button header">Send away...</button>
					        </div>
					    </div>
					</form>
				</section>
			</div>
	</div>
</main>

<footer>
	<div class="outer-container padding">
		<div class="row">
			<ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="footer-menu header-font">
				<li itemprop="name"><a itemprop="url" href="/">HOME</a></li>
				<li itemprop="name"><a itemprop="url" href="/what-we-do/">SERVICES</a></li>
				<li itemprop="name"><a itemprop="url" href="/portfolio/">PORTFOLIO</a></li>
				<li itemprop="name"><a itemprop="url" href="/about-us">ABOUT</a></li>
				<li itemprop="name" id="blog"><a itemprop="url" href="http://blog.studioncreations.com">BLOG</a></li>
				<li itemprop="name" id="contact"><a itemprop="url" href="/contact/">CONTACT</a></li>
			</ul>
		</div>
		<div class="row">
			<h6>&copy; <span itemprop="name copyrightHolder">STUDIO N CREATIONS</span> | <span itemprop="copyrightYear">2016</span> <a itemprop="sameAs" href="https://www.facebook.com/studio.n.creations" target="_blank"><img id="facebook" src="/img/footer/facebook.png" alt="Studio N Creations Facebook Page Link"></a></h6>
			<h6 id="html5-powered">powered by <img src="/img/footer/html5-shield.png" alt="HTML5 Shield"></h6>
		</div>
	</div>
</footer>

</div>
<div id="thanks-modal" class="mfp-hide mfp-zoom-in">
	<button title="Close (Esc)" type="button" class="mfp-close icon-close-button"></button>
	<h2>Thanks for the message!</h2>
	<p>I'm already responding to it, so look out for my email.</p>
</div>

<!-- SCRIPT LINKS -->
<div class="mask"></div>
<script src="<?php autoVer('/js/responsive_nav-min.js'); ?>"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/vendor/jquery/1-11-3/jquery-min.js"><\/script>')</script>
<script src="<?php autoVer('/js/thanks-min.js'); ?>"></script>
<script src="<?php autoVer('/js/contact-min.js'); ?>"></script>
<!--<script>
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	e.src='https://www.google-analytics.com/analytics.js';
	r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	ga('create','UA-55459011-1','auto');ga('send','pageview');
</script>-->

</body>
</html>
