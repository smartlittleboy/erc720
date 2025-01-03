
import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Lock", function(){
    it("say hello world", async function (){
         const HW = await ethers.getContractFactory("Lock");
         const hw = await HW.deploy();
         await hw.waitForDeployment();
        expect(await hw.hello()).to.equal("Hello, World!");
    });
});

