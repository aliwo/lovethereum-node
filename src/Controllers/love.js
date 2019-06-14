import Love from '../Models/Love';


export const getLove = (req, res) => {
    res.send({ id: 1 });
};

export const testLove = (req, res) => {
    const lo = new Love({ url: 'hihi', message: 'hello' });
    lo.save();
    res.send({ okay: true });
};

export const nothing = {
};
