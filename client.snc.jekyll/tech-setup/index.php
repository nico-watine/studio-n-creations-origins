
<?php 
	include($_SERVER['DOCUMENT_ROOT'].'/php/autoVer.php');
?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">
	<!--<link rel="preconnect" href="http://cdn.studioncreations.com">-->
	<title>Tech Setup Survey | Studio N Creations</title>
	<meta name="description" content="3 quick questions and then it's time to get started." />

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link type="text/plain" rel="author" href="/humans.txt">
	
	<link rel="stylesheet" href="<?php autoVer('/css/core.css'); ?>" />
	<link rel="stylesheet" href="<?php autoVer('/css/pages.css'); ?>" />
</head>

<body id="tech-setup">

<header>
	<div class="row" id="nav-bar">
		<a href="http://studioncreations.com" class="title" id="index-link"><span id="large">Studio N Creations</span><span id="mini">SNC</span></a>
		<div id="button-wrapper"></div>
	</div>
</header>


<main class="text-center">
	<div class="outer-container">
		<div class="row">
			<h1 class="title">computer setup</h1>
		</div>
		<div class="row">
			<section class="intro-box">
				<p class="large">These are a few quick questions I ask everybody. Knowing this helps me gauge the project development process.</p>
				<p class="large">Thank you for taking the time to fill this out. <br>You can select more than one for each question.</p>
			</section>
		</div>
		<div class="row form-title">
			<h3>Computer Setup Form</h3>
			<hr>
		</div>
	</div>
	<form name="tech-form" id="tech-form" action="tech-form" enctype="multipart/form-data" method="post" /> 
		<div class="form-row" id="name">
			<label class="question">Your Name</label>
			<div class="row">
				<div class="input-container">
					<input type="text" name="name" placeholder="Your Name" />
				</div>
			</div>
		</div>
		<div class="form-row" id="computer-os">
			<hr>
			<label class="question">What computer system do you use?</label>
			<br>
			<div class="row">
				<div class="input-container">
					<div class="input">
			            <label><img src="/img/tech-setup/form-icons/os-x/apple.png" alt="Apple Logo"><br>
			            <input type="checkbox" name="computer-os-mac" value=" | Macintosh OS X"><br>Macintosh <span>OS X</span></label>
		            </div>
	            </div>
	            <div class="input-container">
	            	<div class="input">
	            		<label><img src="/img/tech-setup/form-icons/windows/microsoft.png" alt="Microsoft Logo"><br>
			            <input type="checkbox" name="computer-os-windows" value=" | Microsoft Windows"><br>Microsoft Windows</label>
		            </div>
	            </div>
	            <div class="input-container">
	            	<div class="input">
						<label><img src="/img/tech-setup/form-icons/linux/linux.png" alt="Linux Penguin"><br>
			            <input type="checkbox" name="computer-os-linux" value=" | Linux Distro"><br>Linux Distro</label>
		            </div>
	            </div>
           </div>
           <hr>
		</div>
		<div class="form-row" id="windows">
			<label class="question">If Microsoft Windows ::</label>
			<br>
			<div class="row">
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/xp.png" alt="Windows XP"><br>
						<input type="checkbox" name="windows-xp" value=" | Windows XP"><br>Windows XP</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/vista.png" alt="Windows Vista"><br>
						<input type="checkbox" name="windows-vista" value=" | Windows Vista"><br>Windows Vista</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/7.png" alt="Windows 7"><br>
						<input type="checkbox" name="windows-7" value=" | Windows 7"><br>Windows 7</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/8.png" alt="Windows 8"><br>
						<input type="checkbox" name="windows-8" value=" | Windows 8"><br>Windows 8</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/8-1.png" alt="Windows 8-1"><br>
						<input type="checkbox" name="windows-8-1" value=" | Windows 8-1"><br>Windows 8.1</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/windows/10.png" alt="Windows 10"><br>
						<input type="checkbox" name="windows-10" value=" | Windows 10"><br>Windows 10</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/unsure.png" alt="Unsure"><br>
						<input type="checkbox" name="windows-unsure" value=" | Windows Unsure"><br>Unsure</label>
					</div>
				</div>
			</div>
			<hr>
		</div>
		<div class="form-row" id="macintosh">
			<label class="question">If Macintosh OS X ::</label>
			<br>
			<div class="row">
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/snow-leopard.png" alt="Snow Leopard"><br>
						<input type="checkbox" name="snow-leopard" value=" | Snow Leopard"><br>10.6 <br> Snow Leopard</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/lion.png" alt="Lion"><br>
						<input type="checkbox" name="lion" value=" | Lion"><br>10.7 <br> Lion</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/mountain-lion.png" alt="Mountain Lion"><br>
						<input type="checkbox" name="mountain-lion" value=" | Mountain Lion"><br>10.8 <br> Mountain Lion</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/mavericks.png" alt="Mavericks"><br>
						<input type="checkbox" name="mavericks" value=" | Mavericks"><br>10.9 <br> Mavericks</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/yosemite.png" alt="Yosemite"><br>
						<input type="checkbox" name="yosemite" value=" | Yosemite"><br>10.10 <br> Yosemite</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/os-x/el-capitan.png" alt="el-capitan"><br>
						<input type="checkbox" name="el-capitan" value=" | El Capitan"><br>10.11 <br> El Capitan</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/unsure.png" alt="Unsure"><br>
						<input type="checkbox" name="mac-unsure" value=" | Mac Unsure"><br> Unsure <br>&nbsp;</label>
					</div>
				</div>
			</div>
			<hr>
		</div>
		<div class="form-row" id="linux">
			<label class="question">If Linux Distro ::</label>
			<br>
			<div class="row">
				<div class="row-content">
					<div class="input-container">
						<div class="input">
							<label><img src="/img/tech-setup/form-icons/linux/ubuntu.png" alt="Ubuntu"><br>
							<input type="checkbox" name="ubuntu" value=" | Ubuntu"><br>Ubuntu</label>
						</div>
					</div>
					<div class="input-container">
						<div class="input">
							<label><img src="/img/tech-setup/form-icons/linux/fedora.png" alt="Fedora"><br>
							<input type="checkbox" name="fedora" value=" | Fedora"><br>Fedora</label>
						</div>
					</div>
					<div class="input-container">
						<div class="input">
							<label><img src="/img/tech-setup/form-icons/unsure.png" alt="Unsure"><br>
							<input type="checkbox" name="linux-other" value=" | Linux Other"><br>Other</label>
						</div>
					</div>
				</div>
			</div>
			<hr>
		</div>
		<div class="form-row" id="browsers">
			<label class="question">What web browser(s) do you use?</label>
			<br>
			<div class="row">
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/chrome.png" alt="Chrome"><br>
						<input type="checkbox" name="chrome" value=" | Chrome"><br>Chrome</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/safari.png" alt="Safari"><br>
						<input type="checkbox" name="safari" value=" | Safari"><br>Safari</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/internet-explorer.png" alt="Internet Explorer"><br>
						<input type="checkbox" name="internet-explorer" value=" | Internet Explorer"><br>Internet Explorer</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/firefox.png" alt="Firefox"><br>
						<input type="checkbox" name="firefox" value=" | Firefox"><br>Firefox</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/opera.png" alt="Opera"><br>
						<input type="checkbox" name="opera" value=" | Opera"><br>Opera</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/browsers/edge.png" alt="Microsoft Edge"><br>
						<input type="checkbox" name="microsoft-edge" value=" | Microsoft Edge"><br>Microsoft Edge</label>
					</div>
				</div>
				<div class="input-container">
					<div class="input">
						<label><img src="/img/tech-setup/form-icons/unsure.png" alt="Unsure"><br>
						<input type="checkbox" name="browser-unsure" value=" | Unsure"><br>Unsure</label>
					</div>
				</div>
			</div>
			<hr>
		</div>
		<div class="form-row side-padding" id="end">
			<div id="thats-all">
				<h3>That's all folks!</h3>
				<button type="submit" name="submit" id="submit" class="button big-green-button floating">Send away...</button>
			</div>
		</div>
	</form>
</main>

<footer>
	<div class="outer-container padding">
		<div class="row">
			<ul class="footer-menu">
				<li><a href="http://studioncreations.com">HOME</a></li>
				<li><a href="http://studioncreations.com/what-we-do/">SERVICES</a></li>
				<li><a href="http://studioncreations.com/portfolio/">PORTFOLIO</a></li>
				<li><a href="http://studioncreations.com/about-us">ABOUT</a></li>
				<li id="contact"><a href="http://studioncreations.com/contact/">CONTACT</a></li>
			</ul>
		</div>
		<div class="row">
			<h6>&copy; STUDIO N CREATIONS | 2015 <a href="https://www.facebook.com/studio.n.creations" target="_blank"><img id="facebook" src="/img/footer/facebook.png" alt="Facebook Link"></a></h6>
			<h6 id="html5-powered">powered by <img src="/img/footer/html5-shield.png" alt="HTML5 Shield"></h6>
		</div>
	</div>
</footer>


</body>
</html>