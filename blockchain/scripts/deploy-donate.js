const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const donate = await hre.ethers.deployContract("Donate");

    console.log("Donation app address:", await donate.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    // 0x78404D883c64270bd737D1dFAD646E7cDbb74cb2