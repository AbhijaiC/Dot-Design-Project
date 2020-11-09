
database = firebase.database()
var dataBaseCount = 0
var x = 0
var valueOfLatest, objectOfPrintChatAll,list;
var list = document.getElementById('list')
getCount()
var reference = database.ref('comments/' + String(dataBaseCount))
reference.on("value", function (y) {
    valueOfLatest = y.val()
})
var referenceAll = database.ref('comments/')
referenceAll.on("value", function (a) {
    objectOfPrintChatAll = a.val()
})

function getCount() {
    ref = database.ref('count')
    ref.on("value", function (x) {
        dataBaseCount = x.val();
    })
    var reference = database.ref('comments/' + String(dataBaseCount))
    reference.on("value", function (y) {
        valueOfLatest = y.val()
    })
    var referenceAll = database.ref('comments/')
    referenceAll.on("value", function (a) {
        objectOfPrintChatAll = a.val()
        //console.log(objectOfPrintChatAll)
    
    })
    var list = document.getElementById('list')
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
function displayLastComment() {
    getCount()
    var list = document.getElementById('list')
    var reference = database.ref('comments/' + String(dataBaseCount))
    reference.on("value", function (y) {
        valueOfLatest = y.val()
    })


    var li = document.createElement('li')
    li.innerHTML = valueOfLatest;
    list.appendChild(li);

    window.scrollBy(0, 100)
    //console.log(dataBaseButtonCount)

}


function displayAllComments() {
    if (document.getElementById('list').childElementCount != dataBaseCount) {
        var list = document.getElementById('list')
        var referenceAll = database.ref('comments/')
        referenceAll.on("value", function (a) {
            objectOfPrintChatAll = a.val()
        })

        for (element in objectOfPrintChatAll) {
            var li = document.createElement('li')
            li.innerHTML = objectOfPrintChatAll[element]
            list.appendChild(li)
            li.style.color = "gold"
            console.log(objectOfPrintChatAll[element])
            console.log(objectOfPrintChatAll.length)


        }
    }
    else {
        alert('Nothing new to display')
    }
    //var resetButton = document.getElementById('reset')
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
    displayLastComment()
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





