"use strict";

function handleException(error) {
    console.log("An error occurred: " + error.message + "\n" + error.stack);
}

async function evaluateMacro(macro) {
    try {
        let uri = "macro:EvaluateMacro@lib:dovesoft.vue-example";
        let r = await fetch(uri, { method: "POST", body: macro });
        let result = await r.text();
        return result;

    } catch (error) {
        handleException(error);
    }
}

const MT = {
    async getTokens() {
        const response = await evaluateMacro(`[r:getTokens("json")]`);
        return JSON.parse(response);
    },

    async getTokeName(tokenId) {
        const response = await evaluateMacro(`[r:getName("${tokenId}")]`);
        return response;
    },

    async getSelected() {
        const response = await evaluateMacro(`[r:getSelected("json")]`);
        return JSON.parse(response);
    },

    async getPropertyNames(tokenId) {
        const response = await evaluateMacro(`[r:getPropertyNames("json", "${tokenId}")]`);
        return JSON.parse(response);
    },

    async getProperty(tokenId, propertyName) {
        const response = await evaluateMacro(`[r:getProperty("${propertyName}", "${tokenId}")]`);
        return response;
    },

    async updateProperty(tokenId, propertyName, value) {
        await evaluateMacro(`[h:setProperty("${propertyName}", "${value}", "${tokenId}")]`);
    },

    async resetProperty(tokenId, propertyName) {
        await evaluateMacro(`[h:resetProperty("${propertyName}", "${tokenId}")]`);
    }
}
