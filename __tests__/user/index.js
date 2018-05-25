const supertest = require('supertest')
const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose
const api = require('../../app')

const request = supertest(api)
const URL = '/user'
const mockgoose = new Mockgoose(mongoose);

let user = {
    name: "daniel",
    lastname: "aguirre",
    mail: "text@text.com",
    age: 30
}

describe('User', () => {
    beforeEach(() =>{
        

        mockgoose.prepareStorage().then(function() {
            mongoose.connect('mongodb://localhost/example_app_test', function(err) {
                done(err);
            });
        });
    })

    it("Should create a new user ", (done) =>{
        request
            .post(URL)
            .send(user)
            .expect(201)
            .then(res => {
                const body = res.body
                expect(body).toHaveProperty('_id')
            })
    })
    
    it("Should get all the users", (done) =>{
        request
            .get(URL)
            .expect(200)
            .then(res => {
                const body = res.body
                console.log(body);
                expect(body).not.toBeNull()
                expect(body).toMatchSnapshot()
                done()
            })
    })
})
