// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        parsed_url = new URL(decodeText);
        query_params = Object.fromEntries(new URLSearchParams(parsed_url.search));
        mc_value = query_params.mc || null;
        alert("MCC is : " + mc_value);
        html5QrcodeScanner.clear();

        //alert("You Qr is : " + decodeText, decodeResult);

    }

   //  let htmlscanner = new Html5QrcodeScanner(
 //       "my-qr-reader",
 //       { fps: 10, qrbos: 250, start: true, facingMode: "environment" }
  //  );
   // htmlscanner.render(onScanSuccess);

    const html5QrCode = new Html5Qrcode("my-qr-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
    parsed_url = new URL(decodeText);
        query_params = Object.fromEntries(new URLSearchParams(parsed_url.search));
        mc_value = query_params.mc || null;
        alert("MCCxx code is : " + mc_value);
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };


// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
});
