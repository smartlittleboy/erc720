
import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";

async function foo() {
    const V = await ethers.getContractFactory("Verify");
    const v = await V.deploy();
    await v.waitForDeployment();
    return v;
}

async function deploy() {
    const v =  await foo();
    console.log("verify address is",await v.getAddress());
    return v;
}

deploy();