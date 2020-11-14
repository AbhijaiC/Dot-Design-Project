

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


	var chat_data = document.getElementById("Chat")
	document.getElementById("Chat").value = ""
	var data_fill = ""
	for (element in objectOfPrintChat) {
		if (objectOfPrintChat[element] == ""){
			//alert("Please write a comment.")
		}else{
			data_fill = data_fill + objectOfPrintChat[element] + "\n"
		}
	}
	document.getElementById("Chat").value = data_fill 
	document.getElementById("comment").value = ""
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
    var i = 10;
    while (i > 0) {
        idDecolor = String("tab" + i)
        document.getElementById(idDecolor).style.backgroundColor = "plum"
        i = i - 1
    }
    var id = String("tab" + idNumber)
    var idObject = document.getElementById(id)
    idObject.style.backgroundColor = "gold"
}
function topScroll(){
    window.scrollTo(0,0)
}





