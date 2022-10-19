// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/Adoption.sol";
// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract AdoptionTest {

  function testAdopting() public {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    uint actual = adoption.adopt(0);

    Assert.equal(actual, 0, "Pet 0 adoption failed");
  }
}
