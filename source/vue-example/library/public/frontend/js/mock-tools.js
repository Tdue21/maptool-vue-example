"use strict";

const FakeMT = {

    tokens : [
        { 
            tokenId : "1",
            name: "Don",
            props: [
                {
                    name: "One",
                    value: 11
                },
                {
                    name: "Two",
                    value: 12
                },
                {
                    name: "Three",
                    value: 13
                }
            ]
        },
        { 
            tokenId : "2",
            name: "Eik",
            props: [
                {
                    name: "One",
                    value: 21
                },
                {
                    name: "Two",
                    value: 22
                },
                {
                    name: "Three",
                    value: 23
                },
            ]
        },
        { 
            tokenId : "3",
            name: "Boo",
            props: [
                {
                    name: "One",
                    value: 31
                },
                {
                    name: "Two",
                    value: 32
                },
                {
                    name: "Three",
                    value: 33
                },
                { 
                    name: "Four",
                    value: "Boooh!"
                }
            ]
        }
    ],

    async getTokens() {
        return this.tokens.map(x => x.tokenId);
    },

    async getTokeName(tokenId) {
        const token = this.tokens.filter(x => x.tokenId === tokenId)[0];
        return token.name;
    },

    async getSelected() {
        return null;
    },

    async getPropertyNames(tokenId) {
        const token = this.tokens.filter(x => x.tokenId === tokenId)[0];
        const props = token.props.map(x => x.name);
        return props;
    },

    async getProperty(tokenId, propertyName) {
        const token = this.tokens.filter(x => x.tokenId === tokenId)[0];
        const prop = token.props.filter(x => x.name === propertyName)[0];
        return prop.value;
    },

    async updateProperty(tokenId, propertyName, value) {
        console.log(`Token "${tokenId}": Update "${propertyName}" to "${value}".`);
    },

    async resetProperty(tokenId, propertyName) {
        console.log(`Token "${tokenId}": Reset "${propertyName}".`);
    }
}