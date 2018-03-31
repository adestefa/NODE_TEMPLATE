var driver = {
    ver : "0.0.1",
    log : function (str) {
        if (window.console && window.console.log) {
            window.console.log(str);
        }
    },
    init : function () {
        this.log("Driver v" + this.ver);
    },
    test : function () {
        var out = document.querySelector("#out");
        out.innerHTML = "Hello World!";
    }
}
driver.init();