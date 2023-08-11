const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Donate", function () {
  async function deployDonateFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Donate = await ethers.getContractFactory("Donate");
    const donate = await Donate.deploy();

    return { donate, owner, otherAccount };
  }

  it("Get number of organisations", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    expect(await donate.getOrganisationLength()).to.equal(4);
    console.log(await donate.getOrganisationLength());
  });

  it("View name of organisation", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    expect(await donate.viewOrganisation(0)).be.equal.toString();
    console.log(await donate.viewOrganisation(0));
  });

  it("Get organisations address", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    // expect(await donate.viewOrganisation(0))
    console.log(await donate.getOrganisationAddress(0));
  });

  it("Make donation to an organisation", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    // expect(await donate.viewOrganisation(0))
    console.log(
      await donate.makeDonation(
        0xbf85887b87d3f90bf535c225f9c24c62a211fb29,
        0.0001
      )
    );
  });
});
