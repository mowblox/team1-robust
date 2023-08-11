// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Donate {
    // Organisations details
    struct Organisation {
        string name;
<<<<<<< HEAD
        address addr;
        uint amount ;
=======
        address addre;
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896
    }
     event WithdrawalMade(
        address indexed recipient,
        uint amount
    );  


    // Donors details
    struct Donors {
<<<<<<< HEAD
=======
        bytes32 id;
        bytes32 orgId;
        string name;
        address addr;
        uint amount;
    }

    // Withdrawal details
    struct Withdrawals {
        bytes32 id;
        bytes32 orgId;
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896
        address addr;
        uint amount;
    }

    // Have a list of organisations
    Organisation[] public organisations;
    mapping(address => Donors[]) organisationsToDonors;

    bytes32[] private withdrawalsId; //Store withdrawals id
    mapping(bytes32 => Withdrawals) private withdrawals; //storing withdrawals and their addresses and organisation withdrawn from

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
<<<<<<< HEAD
        function createOrganisation(
        string memory _name,
        uint amount
    ) public {
        require(bytes(_name).length > 0, "Organization name cannot be empty");
        require(amount > 0, "Amount must be greater than 0");
=======
    function addOrganisation(
        string memory _name,
        address _addr
    ) public returns (bool) {
        require(
            bytes(_name).length > 0,
            "The organisations's name cannot be empty!"
        );
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896

        Organisation memory newOrganisation = Organisation({
            addr: msg.sender,
            name: _name,
            amount: 0
        });

<<<<<<< HEAD
        organisations.push(newOrganisation);
    }

    // Add donor
    function makeDonation(uint organisationIndex) public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        require(
            organisationIndex < organisations.length,
            "Invalid organization index"
        );
=======
        organisations[id] = Organisation({id: id, name: _name, addre: _addr});
        organisationIds.push(id);

        return true;
    }

    // Add donor
    function addDonor(
        string memory _name,
        address _address,
        bytes32 _orgId,
        uint _amount
    ) internal returns (bool) {
        require(bytes(_name).length > 0, "The donor's name cannot be empty!");
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896

        Organisation storage org = organisations[organisationIndex];

<<<<<<< HEAD
        org.amount += msg.value;
        Donors memory newDonor = Donors(
            msg.sender,
            msg.value
        );
        require(
            address(this).balance - org.amount > 0,
            "Company has no donation"
        );  
        organisationsToDonors[org.addr].push(newDonor);
        emit DonationSuccess(msg.sender, msg.value);
    }


    // Get organisations address
     function getOrganiationsAddress(
        uint organisationIndex
    ) public view returns (address OrganisationAddress) {
        return organisations[organisationIndex].addr;
    }

     function getOrganization(
        uint index
    ) public view returns (Organisation memory) {
        require(index < organisations.length, "Invalid index");
        Organisation memory org = organisations[index];
        return (org);
    }
     // Get all organisations
    function getAllOrganizations() public view returns (Organisation[] memory) {
        return organisations;
=======
        donors[id] = Donors({
            id: id,
            orgId: _orgId,
            name: _name,
            addr: _address,
            amount: _amount
        });
        organisationIds.push(id);
        return true;
    }

    // Add donor
    function logWithdrawal(
        string memory _name,
        address _address,
        bytes32 _orgId,
        uint _amount
    ) internal returns (bool) {
        require(bytes(_name).length > 0, "The donor's name cannot be empty!");

        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(
            abi.encodePacked(msg.sender, _name, block.timestamp, blockHash)
        );

        withdrawals[id] = Withdrawals({
            id: id,
            orgId: _orgId,
            addr: _address,
            amount: _amount
        });
        organisationIds.push(id);
        return true;
    }

    // Get organisations address
    function getOrganisationAddress(
        bytes32 _id
    ) public view returns (address organisationAddress) {
        // check if organisation exists
        return organisations[_id].addre;
    }

    // Get organisations name
    function getOrganisationName(
        bytes32 _id
    ) public view returns (string memory organisationName) {
        return organisations[_id].name;
    }

    // Get the id of all organisations
    function getOrganisationsIds() public view returns (bytes32[] memory ids) {
        return organisationIds;
    }

    //Make the donation to the organisation
    function makeDonation(
        address payable addr,
        string memory _name,
        uint256 _amount,
        bytes32 _orgId
    ) public payable {
        addr.transfer(_amount); // transfer command ( not sure it currently works though)
        addDonor(_name, msg.sender, _orgId, _amount);
        emit DonationSuccess(addr, _amount);
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896
    }

    // Track the status of the donation
    function trackTokens() public {}

    // Withdraw token from organisations account
<<<<<<< HEAD
    function withdrawTokens(uint organisationIndex, uint amountToWithdraw) public {
    require(
        organisationIndex < organisations.length,
        "Invalid organization index"
    );

    Organisation storage org = organisations[organisationIndex];
    require(
        org.addr == msg.sender,
        "Only the organization creator can withdraw tokens"
    );

    payable(org.addr).transfer(amountToWithdraw);

    // Emit an event to indicate Ether has been withdrawn
    emit WithdrawalMade(org.addr, amountToWithdraw);
}
=======
    function withdrawTokens(address _to, uint amount) public returns (bool) {}
>>>>>>> 33fa97a62bd26973b944bee8cabbc0ea65a91896

    // View list of received token
    function receivedTokens() public {}

    // view list of withdrawn tokens
    function withdrawnTokens() public {}
}
