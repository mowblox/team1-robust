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

  it("Add Organisation", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    console.log(await donate.addOrganisation("EricaOrg",'0xbF85887b87d3f90Bf535C225f9c24C62a211Fb29'));
  });

  it("Get ID's of Organisation", async function () {
    const { donate } = await loadFixture(deployDonateFixture);
    // expect(await donate.getOrganisationsIds());
    console.log(await donate.getOrganisationsIds());
  });

//   it("Get organisation name", async function () {
//     const { donate } = await loadFixture(deployDonateFixture);
//     // expect(await donate.viewOrganisation(0))
//     console.log(await donate.getOrganisationName());
//   });

//   it("Make donation to an organisation", async function () {
//     const { donate } = await loadFixture(deployDonateFixture);
//     // expect(await donate.viewOrganisation(0))
//     console.log(
//       await donate.makeDonation(
//         0xbf85887b87d3f90bf535c225f9c24c62a211fb29,
//         0.0001
//       )
//     );
//   });
});
