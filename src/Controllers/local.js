import { randomUrl } from '../Libs/RandomUrl';
import Love from '../Models/Love';

export const getLocal = (req, res) => {
    res.send({ message: 'hello, world!' });
};

export const postLocal = (req, res) => {
    const {
        body: { message },
    } = req;
    const localLove = new Love({ url: randomUrl(), message });
    localLove.save();
    res.send({ message: 'done', localLove });
};

export const getLock = async (req, res) => {
    const {
        params: { id },
    } = req;
    const localLove = await Love.findById(id);
    console.log(localLove);
    res.send({ message: localLove.message });
};
