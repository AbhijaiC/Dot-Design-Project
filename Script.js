

database = firebase.database()
var dataBaseCount = 0
var x = 0
var dataBaseFCount = 0;
getFCount()
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
function getFCount() {
    ref = database.ref('fCount')
    ref.on("value", function (x) {
        dataBaseFCount = x.val();
    })
}
getCount()
function updateCount(updateCount) {
    ref = database.ref('/')
    ref.update({
        count: updateCount,

    })
}
function updateFCount(updateFCount) {
    ref = database.ref('/')
    ref.update({
        fCount: updateFCount,

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
        if (objectOfPrintChat[element] == "") {
            //alert("Please write a comment.")
        } else {
            data_fill = data_fill + objectOfPrintChat[element] + "\n"
        }
    }
    document.getElementById("Chat").value = data_fill
    document.getElementById("comment").value = ""
    window.scrollBy(0, 100)
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
    if (name != null) {
        if (name != "") {
            document.write('Welcome ' + name + '!')
        }else{
        	document.write('Welcome ' + 'friend' + '!')
	    }
    }
    else {
        document.write('Welcome ' + 'friend' + '!')
    }
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
function topScroll() {
    window.scrollTo(0, 0)
}
getFCount()
function submitFeedback() {
    getFCount()
    updateFCount(dataBaseFCount + 1)
    var list = []
    if ((document.getElementById('nameFeedback').value != "") && (document.getElementById('ageFeedback').value) && (document.getElementById('feedback').value)) {
        list.push(document.getElementById('nameFeedback').value)
        list.push(document.getElementById('ageFeedback').value)
        list.push(document.getElementById('feedback').value)
        jsonFeedback = {}
        jsonFeedback[dataBaseFCount] = list
        var ref = database.ref('feedback')
        ref.update(jsonFeedback)
        document.getElementById('nameFeedback').value = ''
        document.getElementById('ageFeedback').value = ''
        document.getElementById('feedback').value = ''
        alert('Your feedback has been recorded by our database. ✅')
    }
    else {
        alert('Please do not leave any section blank')
    }

}

function Credits() {
    alert('We have taken some info from the following pages:-\nhttps://www.researchgate.net\nhttps://en.wikipedia.org/wiki/Augmented_reality\nBook:The Fourth Transformation: How Augmented Reality and Artificial Intelligence Change Everything\nhttps://www.blippar.com/blog/2018/08/21/what-is-augmented-reality-and-how-does-augmented-reality-work')
}
