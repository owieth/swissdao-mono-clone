import { Address, BigInt } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';

// export function fetchTokenDetails(event: ethereum.Event): Token | null {
//   //check if token details are already saved
//   let token = Token.load(event.address.toHex());
//   if (!token) {
//     //if token details are not available
//     //create a new token
//     token = new Token(event.address.toHex());

//     //set some default values
//     token.name = "N/A";
//     token.symbol = "N/A";
//     token.decimals = BigDecimal.fromString("0");

//     //bind the contract
//     let erc20 = ERC20.bind(event.address);

//     //fetch name
//     let tokenName = erc20.try_name();
//     if (!tokenName.reverted) {
//       token.name = tokenName.value;
//     }

//     //fetch symbol
//     let tokenSymbol = erc20.try_symbol();
//     if (!tokenSymbol.reverted) {
//       token.symbol = tokenSymbol.value;
//     }

//     //fetch decimals
//     let tokenDecimal = erc20.try_decimals();
//     if (!tokenDecimal.reverted) {
//       token.decimals = BigDecimal.fromString(tokenDecimal.value.toString());
//     }

//     //save the details
//     token.save();
//   }
//   return token;
// }

// //fetch account details
// export function fetchAccount(address: string): Account | null {
//   //check if account details are already saved
//   let account = Account.load(address);
//   if (!account) {
//     //if account details are not available
//     //create new account
//     account = new Account(address);
//     account.save();
//   }
//   return account;
// }

export function fetchBalance(
  tokenAddress: Address,
  accountAddress: Address,
  tokenId: BigInt
): BigInt {
  let contract = SwissDAOMembership.bind(tokenAddress);
  let amount = BigInt.fromI32(0);

  let tokenBalance = contract.try_balanceOf(accountAddress, tokenId);

  if (!tokenBalance.reverted) {
    amount = tokenBalance.value;
  }

  return amount;
}
