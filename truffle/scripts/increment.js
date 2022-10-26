/*
  Try `truffle exec scripts/increment.js`, you should `truffle migrate` first.

  Learn more about Truffle external scripts: 
  https://trufflesuite.com/docs/truffle/getting-started/writing-external-scripts
*/

const Adoption = artifacts.require("Adoption");

module.exports = async function (callback) {
  const deployed = await Adoption.deployed();

  const currentValue = await deployed.getAdopters();
  console.log(`Current Adoption value: ${currentValue[1]}`);

  const { tx } = await deployed.adopt(1);
  console.log(`Confirmed transaction ${tx}`);

  const updatedValue = await deployed.getAdopters();
  console.log(`Updated Adoption value: ${updatedValue[1]}`);

  callback();
};
