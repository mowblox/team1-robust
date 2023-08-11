// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Donate {
// Organisations details
    struct Organisation {
        string name;
        address addr;
        uint amount ;
    }
     event WithdrawalMade(
        address indexed recipient,
        uint amount
    );  


// Donors details
    struct Donors {
        address addr;
        uint amount;
    }

    // Have a list of organisations
    Organisation[] public organisations;
    mapping(address => Donors[]) organisationsToDonors;

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
        function createOrganisation(
        string memory _name,
        uint amount
    ) public {
        require(bytes(_name).length > 0, "Organization name cannot be empty");
        require(amount > 0, "Amount must be greater than 0");

        Organisation memory newOrganisation = Organisation({
            addr: msg.sender,
            name: _name,
            amount: 0
        });

        organisations.push(newOrganisation);
    }

    // Add donor
    function makeDonation(uint organisationIndex) public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        require(
            organisationIndex < organisations.length,
            "Invalid organization index"
        );

        Organisation storage org = organisations[organisationIndex];

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
    }

    // Track the status of the donation
    function trackTokens() public {}

    // Withdraw token from organisations account
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

    // View list of received token
    function receivedTokens() public {}

    // view list of withdrawn tokens
    function withdrawnTokens() public {}
}
