function showTokenProperties() {
    try {
        MTScript.setVariable("dialogName", "Token Properties");
        MTScript.setVariable("uri", "lib://dovesoft.vue-example/frontend/token.html");
        MTScript.setVariable("options", `width=500; height=600; temporary=1; noframe=0; input=1`);
        MTScript.evalMacro("[h:html.dialog5(dialogName, uri, options)]");
    } catch (e) {
        console.error(e);
    }
}
MTScript.registerMacro("vx.showTokenProperties", showTokenProperties);
