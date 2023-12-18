function openUrl(){
  window.location.href = offerUrl;
}

function waitOn() {
    let text = "wait"
    let pointCount = 0
    var i = setInterval(function () {
        var newText = text
        for (let i = 0; i <= pointCount; i++) {
            newText += "."
        }
        document.getElementById("startBtn").text = newText;
        pointCount++
        if (pointCount > 3) {
            pointCount = 0
        }
    }, 200);
  };

  