<html>

<head>
	<title>Augmented Reality</title>
	<!--<h1 color="Blue">Augmented Reality</h1>-->
	<link href="style.css" rel="stylesheet">
	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js"></script>

	<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

	<script>
		// Your web app's Firebase configuration
		var firebaseConfig = {
			apiKey: "AIzaSyCkwxNQEKUkkojfHkt02qFjCG0D0pwFNjY",
			authDomain: "augmentedreality-2aec3.firebaseapp.com",
			databaseURL: "https://augmentedreality-2aec3.firebaseio.com",
			projectId: "augmentedreality-2aec3",
			storageBucket: "augmentedreality-2aec3.appspot.com",
			messagingSenderId: "237969527396",
			appId: "1:237969527396:web:67b3e191c16952943ac571"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	</script>

	<script src="Script.js"></script>

</head>

<body background="Images/Stars GIF.gif">
	<hr color="purple" size=5>
	<div class="head">
		<p align="center">
			<font size=7>
				Augmented Reality<br>
				The <font color="gold">Future</font> Of Tommorow
			</font>
		</p>
	</div>
	<hr color="purple" size=5>


</body>

<div class="head" style="height: auto; width: 40%; float: right;">
	<center>
		<img src="Images/Augmented Reality GIF Education.gif" width="580" height="450" align="right">

		<br><br><br><br><br><br><br><br>
		<textarea id="comment" name="message" rows="5" cols="70"
			placeholder="Type a message ... Chat with your friends ..."></textarea>
		<button onclick="comment();">Post comment</button>
		<button onclick="displayAllComments();" id = "reset">Refresh comment</button>
		<ul id="list"></ul>
	</center>
</div>
<br><br><br><br><br><br>




</html>
