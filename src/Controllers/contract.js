import Contract from '../Models/Contract';

export const getLoveContract = async (req, res) => {
    let contract = await Contract.findOne().sort({ _id: -1 });
    res.send(contract); // db로 부터 가장 최신의 address 를 가져옵니다.
};

export const nothing = {
};
