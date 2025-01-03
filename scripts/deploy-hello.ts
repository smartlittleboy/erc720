
import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";

async function foo() {
    const HW = await ethers.getContractFactory("Lock");
    const hw = await HW.deploy();
    await hw.waitForDeployment();
    return hw;
}

async function deploy() {
    const hw =  await foo();
    return hw;
}

async function sayHello(hello:any) {
    console.log(await hello.hello());
}

deploy().then(sayHello);