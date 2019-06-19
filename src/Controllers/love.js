import Love from '../Models/Love';
import Contract from '../Models/Contract';


export const getLoveContract = async (req, res) => {
    let contract = await Contract.findOne().sort({ _id: -1 });
    res.send(contract); // db로 부터 가장 최신의 address 를 가져옵니다.
};


export const genLove = (req, res) => {
    const lo = new Love({ url: 'hihi', message: req.body.json.message });
    lo.save();
    res.send({ okay: true });
};

export const nothing = {
};
