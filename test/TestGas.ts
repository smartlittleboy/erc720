
import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";

describe("TestGas", function(){
    it("test gas", async function (){
         const TG = await ethers.getContractFactory("TestGas");
         const tg = await TG.deploy();
         await tg.waitForDeployment();
         for (let i = 0; i < 10; i++) {
            await tg.test1();
            await tg.test2();
            await tg.test3();
            await tg.test4();
            await tg.test5();
         }
    });
});

