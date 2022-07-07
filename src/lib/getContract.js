import ERC20TokenABI from "./contract/ERC20Token.json";

import { Contract } from "@ethersproject/contracts";

// Ethers contract
export const getERC20TokenContract = async (libWithSigner, address) => {
  return new Contract(address, ERC20TokenABI, libWithSigner);
};
