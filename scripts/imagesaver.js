const downloadBtn = document.getElementById("downloadBtn");

const myUrl = new URL(
  "/unsplash/s/photos"
);
const className = "IEpfq";
downloadBtn.addEventListener("click", DownloadImages);
let images = [];
function DownloadImages() {
  const searchParam = document.getElementById("inputText").value;
  if (searchParam == "") {
    return;
  }
  let newUrl = new URL(myUrl + searchParam);

  var getHTML = function (url, callback) {
    // Feature detection
    if (!window.XMLHttpRequest) return;

    // Create new request
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    // Setup callback
    xhr.onload = function () {
      if (callback && typeof callback === "function") {
        callback(this.responseXML);
      }
    };

    // Get the HTML
    xhr.open("GET", url);
    xhr.responseType = "document";
    xhr.send();
  };

  getHTML(newUrl, function (response) {
    let classObjects = response.querySelector("img");
    // let classObjects = response.getElementsByClassName(className);
    for (var i = 0; i < classObjects.length; i++) {
      images.push(classObjects[i].childNodes[0].src + ".jpg");
    }
  });

  setTimeout(() => {
    ZipImages();
  }, 500);
}
function urlToPromise(url) {
  return new Promise(function (resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function ZipImages() {
  const searchParam = document.getElementById("inputText").value;
  var zip = new JSZip();
  for (var i = 0; i < images.length; i++) {
    zip.file(images[i], urlToPromise(images[i]), { binary: true });
  }
  zip.generateAsync({ type: "blob" }).then(function callback(blob) {
    // see FileSaver.js
    saveAs(blob, searchParam + "_images.zip");
  });
}
