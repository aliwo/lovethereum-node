import { describe, it } from 'mocha';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
});

(function () {
    describe('upload love', () => {
        it('upload love', (done) => {
            api.get('/contract')
                .then((response) => {
                    console.log(response);
                })
                .catch(err => console.log(err))
                .finally(() => done())
            console.log('테스트 끝...');
        });
    });
}).call(this);
