import Love from '../Models/Love';

export const genLove = (req, res) => {
    const lo = new Love({ url: 'hihi', message: req.body.json.message });
    lo.save();
    res.send({ okay: true });
};

export const nothing = {
};
