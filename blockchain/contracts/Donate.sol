// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Donate {
// Organisations details
    struct Organisation {
        bytes32 id;
        string name;
        address addr;
    }

// Donors details
    struct Donors {
        bytes32 id;
        bytes32 orgId;
        string name;
        address addr;
    }

// Withdrawal details
     struct Withdrawals {
        bytes32 id;
        bytes32 orgId;
        address addr;
        uint amount;
    }

    // Have a list of organisations
    mapping(bytes32 => Organisation) private organisations; //storing organisations and their addresses
    bytes32[] private organisationIds; //Store organisations id

    bytes32[] private donorsId; //Store donors id
    mapping(bytes32 => Donors) private donors; //storing donors and their addresses and organisation donated to

    // Not needed for mainnet

    // address[] public accounts = [
    //     0xbF85887b87d3f90Bf535C225f9c24C62a211Fb29,
    //     0x4bdA3a7F53453d0B2B1070D856D4D7Ba248F98b8,
    //     0x4b1aB5C3C8BBe97b19C225b62a11D0d040EB29F2,
    //     0x4bdA3a7F53453d0B2B1070D856D4D7Ba248F98b8
    // ];
    // string[] public organisations = [
    //     "Erica's Org",
    //     "Caleb's Org",
    //     "Edwin's Org",
    //     "Kingsley's Org"
    // ];

    // Not needed for mainnet

    // When transaction is successful
    event DonationSuccess(address receiver, uint256 amount);

    // Add organisation
    function addOrganisation(string memory _name, address _address)
        public
        returns (bool success)
    {
        require(
            bytes(_name).length > 0,
            "The organisations's name cannot be empty!"
        );

        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(
            abi.encodePacked(msg.sender, _name, block.timestamp, blockHash)
        );

        organisations[id] = Organisation({id: id, name: _name, addr: _address});
        organisationIds.push(id);

        return true;
    }

    // Add donor
    function addDonor(string memory _name, address _address)
        internal
        returns (bool)
    {
        require(
            bytes(_name).length > 0,
            "The donor's name cannot be empty!"
        );

        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(
            abi.encodePacked(msg.sender, _name, block.timestamp, blockHash)
        );

        organisations[id] = Organisation({id: id, name: _name, addr: _address});
        organisationIds.push(id);
        return true;
    }

     // Add donor
    function logWithdrawal(string memory _name, address _address)
        internal
        returns (bool)
    {
        require(
            bytes(_name).length > 0,
            "The donor's name cannot be empty!"
        );

        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(
            abi.encodePacked(msg.sender, _name, block.timestamp, blockHash)
        );

        organisations[id] = Organisation({id: id, name: _name, addr: _address});
        organisationIds.push(id);
        return true;
    }

    // Get organisations address
    function getOrganisationAddress(bytes32 _id)
        public
        view
        returns (address organisationAddress)
    {
        // check if organisation exists
        return organisations[_id].addr;
    }

    // Get organisations name
    function getOrganisationName(bytes32 _id)
        public
        view
        returns (string memory organisationName)
    {
        return organisations[_id].name;
    }

    // Get the id of all organisations
    function getOrganisationsIds() public view returns (bytes32[] memory ids) {
        return organisationIds;
    }

    //Make the donation to the organisation
    function makeDonation(address payable addr,string memory _name, uint256 amount) public payable {
        addr.transfer(amount); // transfer command ( not sure it currently works though)
        addDonor(_name, msg.sender);
        emit DonationSuccess(addr, amount);
    }

    // Track the status of the donation
    function trackTokens() public {}

    // Withdraw token from organisations account
    function withdrawTokens(address _to, uint amount) public returns(bool) {


    }

    // View list of received token
    function receivedTokens() public {}

    // view list of withdrawn tokens
    function withdrawnTokens() public {}
}
