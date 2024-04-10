const domOutput = document.querySelector("#dom-output");
const goLive = document.querySelector("#live");

const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javaScript = document.querySelector("#javascript");

const outputFrame = document.querySelector("#frame");
const inputTextArea = document.querySelectorAll(".input");


goLive.addEventListener('click', (e) => {
    if (domOutput.style.display == "none") {
        domOutput.style.display = "block";
    }
    else {
        domOutput.style.display = "none";
    }
})

inputTextArea.forEach((element, index) => {
    element.addEventListener("keyup", () => {
        run();
    })
})

function run() {
    outputFrame.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
    outputFrame.contentWindow.eval(javaScript.value);
}