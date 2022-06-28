const fetch = require("node-fetch");
const challenge = require ("./check.js");

exports.fetchBlocks = async (token) => {
    const response = await fetch(`https://rooftop-career-switch.herokuapp.com/blocks?token=${token}`);
    const blocks = await response.json();
    challenge.check(blocks, token);
}