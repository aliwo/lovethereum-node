let sha1 = require('js-sha1');

export const randomUrl = () => {
    let hash = sha1(new Date().toISOString());
    let secondPart = (Math.random() * 46656) | 0;
    secondPart = `000${secondPart.toString(36)}`.slice(-3);
    return hash.slice(0, 10) + secondPart;
};

export const nothing = () => 3;
