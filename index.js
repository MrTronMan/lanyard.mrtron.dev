//
// Created by MrTron / Will
//
// Displays the Console Log (api request) to a div in the file so my site can find it.
(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));

//uses js-lanyard to request my userID to the Lanyard API (credits to xaronnn)
lanyard({
    userId: "355295268716937227",
}).then(console.log) // presenceData
