const main = async() => {
    const waveContractFactory = await hre.ethers.getContractFactory("OnTheFILEd");
    const waveContract = await waveContractFactory.deploy({});

    await waveContract.deployed();

    console.log("OnTheFILEd address: ", waveContract.address);
};


const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();