// DOT DESIGN PROJECT - Sabeer and Abhijai
/* 
PUT IN THE HTML DOCUMENT
1.
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

<script src = "Script.js"></script>

2.
<input id = "comment">
<button onclick="comment();">Post comment</button>
<button onclick="displayComment();">Refresh comment</button>
<ul id = "list"></ul>

*/

database = firebase.database()
var dataBaseCount = 0
var x = 0

var reference = database.ref('comments/')
reference.on("value", function (y) {
    objectOfPrintChat = y.val()
})

function getCount() {
    ref = database.ref('count')
    ref.on("value", function (x) {
        dataBaseCount = x.val();
    })
    var reference = database.ref('comments/')
    reference.on("value", function (y) {
        objectOfPrintChat = y.val()
    })
}
getCount()
function updateCount(updateCount) {
    ref = database.ref('/')
    ref.update({
        count: updateCount,

    })
}
getCount()

getCount()
function displayComment() {
    var reference = database.ref('comments/')
    reference.on("value", function (y) {
        objectOfPrintChat = y.val()
    })
//    dummyLi = document.createElement('li')
//    dummyLi.innerHTML = "<b>Next >>><b>"

	var chat_data = document.getElementById("Chat")
	document.getElementById("Chat").value = ""
	var data_fill = ""
	for (element in objectOfPrintChat) {
		data_fill = data_fill + objectOfPrintChat[element] + "\n"
	}
	document.getElementById("Chat").value = data_fill 
/*        var li = document.createElement('li')
        list.appendChild(li)
        li.innerHTML = objectOfPrintChat[element]

        if(element == objectOfPrintChat.length - 1){
            li.innerHTML = objectOfPrintChat[element]
            li.style.color = "gold"
        }
        else{
            li.style.color = "white"
        }

    }
    list.appendChild(dummyLi)*/
    window.scrollBy(0,100)
}







function comment() {
    getCount()
    getCount()
    var commentValue = document.getElementById('comment').value

    updateCount(dataBaseCount + 1)
    var json = {}
    json[dataBaseCount] = commentValue
    var fireRef = database.ref('comments/')
    fireRef.update(json)
    var i = dataBaseCount;
    displayComment()
}

function namePrompt() {
    var name = window.prompt('Hi! Let us know who you are')
    var paragraph = document.createElement('p')
    paragraph.innerHTML = "Hi " + name;
}

function color(idNumber) {
    var i = 7;
    while (i > 0) {
        idDecolor = String("tab" + i)
        idDecolor.style.color = ""
        i = i - 1
    }
    var id = String("tab" + idNumber)
    var idObject = document.getElementById(id)
    idObject.style.color = ""
}





