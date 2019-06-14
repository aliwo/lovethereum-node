export const getLocal = (req, res) => {
    res.send({'msg':'hello, world!'});
}

export const postLocal = (req, res) => {
    console.log(req.body);
}