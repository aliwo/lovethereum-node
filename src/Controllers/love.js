import Love from '../Models/Love';
import { randomUrl } from '../Libs/RandomUrl';

export const getLove = async (req, res) => {
    const {
        params: { id },
    } = req;
    const localLove = await Love.findById(id);
    console.log(localLove);
    res.send({ message: localLove.message });
};

export const postLove = (req, res) => {
    const {
        body: { message },
    } = req;
    const localLove = new Love({ url: randomUrl(), message, state: false });
    localLove.save();
    res.send(localLove);
};
