import Love from '../Models/Love';


export const getLoveContract = (req, res) => {
    res.send({ address: 1 }); // db로 부터 가장 최신의 address 를 가져옵니다.
};

export const genLove = (req, res) => {
    const lo = new Love({ url: 'hihi', message: req.body.json.message });
    lo.save();
    res.send({ okay: true });
};

export const nothing = {
};
