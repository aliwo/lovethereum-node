import Love from '../Models/Love';
import Contract from '../Models/Contract';


export const getLoveContract = (req, res) => {
    res.send({ address: 1 }); // db로 부터 가장 최신의 address 를 가져옵니다.
};


export const registerLoveContract = (req, res) => {
    const contract = new Contract({
        address: req.body.json.address,
        abi: req.body.json.abi,
        version: req.body.json.version,
    });
    contract.save();
    res.send({ okay: true });
};

export const genLove = (req, res) => {
    const lo = new Love({ url: 'hihi', message: req.body.json.message });
    lo.save();
    res.send({ okay: true });
};

export const nothing = {
};
