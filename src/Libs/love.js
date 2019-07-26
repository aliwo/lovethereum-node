/* global web3 */

function createContract(contractInfo) {
    const Contract = web3.eth.contract(contractInfo.abi);
    const contract = Contract.at(contractInfo.address);
    return contract;
}

// axios 를 사용해서 node 서버로부터 최신 contractInfo 를 가져온 후 sendMsg 를 호출해야 된다.
export const sendMsg = (contractInfo, loveMsg, afterSend) => {
    const contract = createContract(contractInfo);
    contract.setMessage(loveMsg.url, loveMsg.message, (error, result) => {
        // result 는 transaction 주소이다. 이 transaction 에 콜백을 달아야 함.
        if (error) {
            throw Error(JSON.stringify(error));
        }
        if (afterSend !== undefined) {
            afterSend(result);
        }
    });
};

export const getMsg = (contractInfo, key, callback) => {
    const contract = createContract(contractInfo);
    contract.getMessage(key, function(error, result) {
        callback(result);
    });
};
