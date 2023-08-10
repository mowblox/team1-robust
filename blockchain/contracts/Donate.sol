// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Donate {
    // Have a list of organisations
    // mapping(string => address) public organisations;
    // organisations["Hello"] = 12883;
    address[] public accounts = [0xbF85887b87d3f90Bf535C225f9c24C62a211Fb29, 0x4bdA3a7F53453d0B2B1070D856D4D7Ba248F98b8, 0x4b1aB5C3C8BBe97b19C225b62a11D0d040EB29F2,0x4bdA3a7F53453d0B2B1070D856D4D7Ba248F98b8];
    string[] public organisations = ["Erica's Org","Caleb's Org", "Edwin's Org","Kingsley's Org"];

    // Add organisation
    // function set(address _addr, uint256 _i) public {
    //     // organisations[_addr] = _i;
    // }

    // Display a length of organisations
    function getOrganisationLength() public view returns(uint){
        // Get number of organisation
        return organisations.length;
    }

    // View organisations
    function viewOrganisation(uint index) public view returns(string memory){
        // Get organisations name
        return organisations[index];
    }

    // Get organisation address
    function getOrganisationAddress(uint index) public view returns(address){
        // View address of organisation
        return accounts[index];
    }


    //Make the donation to the organisation
    function makeDonation(uint256 amount, address add) public {}

    // Track the status of the donation
    function trackTokens() public {}

    // Withdraw token from organisations account
    function withdrawTokens() public {}

    // View list of received token
    function receivedTokens() public {}

    // view list of withdrawn tokens
    function withdrawnTokens() public {}
}
