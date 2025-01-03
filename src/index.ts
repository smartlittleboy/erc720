import {ethers} from "ethers";
import {abi} from "../artifacts/contracts/Counter.sol/Counter.json";

//判断全局是否存在小狐狸钱包
function getEth(){
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("No ethereum provider found");
  }
  return eth;
}

//判断账号是否可接入
async function requestAccess() {
    const eth = getEth();
    const result = await eth.request({method: "eth_requestAccounts"}) as String[];
    return result && result.length > 0;
} 

//是否有自行付费的账号
async function  hasSigners(){
    const metamask = getEth();
    const signers = await metamask.request({method: "eth_accounts"}) as String[];
    return  signers.length > 0;
}

async function getContract(){
    //1.地址
    //2.方法名
    //3.provider

    if (!await hasSigners() && !await requestAccess()) {
        throw new Error("No ethereum provider found");
    }
    const provider = new ethers.BrowserProvider(getEth());
    const address = process.env.CONTRACT_ADDRESS;
    // const address = "0x63Ed0CA4A71ad8a0A38E692a5D2c42F0Bf815aB0";
    const contract = new ethers.Contract(
       address,
       abi,
       await provider.getSigner(),
    )
    const counter = document.createElement("div");
    async function getCount() {
        counter.innerHTML = await contract.getCount();
    }
    getCount();
   
    const btn = document.createElement("button");
    btn.innerHTML = "increment";
    btn.onclick = async function () {
       await contract.count();
    }

    contract.on(contract.filters.CounterInc(), async function({ args }){
        counter.innerHTML = args[0].toString() || await contract.getCount();
    })

   
    document.body.appendChild(counter);
    document.body.appendChild(btn);

    // document.body.innerHTML = await contract.hello();
}

async function main(){
    await getContract();
}

main(); 


