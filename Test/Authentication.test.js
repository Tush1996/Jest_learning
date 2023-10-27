const axios = require('axios')
const baseUrl = 'https://omniwallet.tngbl.xyz/authenticate'
let config = {};


describe("User Authentication", () => {
    it("should provide me token when passing username and password", async () => {
        config = {
            username: "tusharika",
            password: "tush@1234"

        }
        const desiredObject = {
            status: 200,
            message: 'success',
            data: expect.objectContaining({
                Token: expect.any(String)
            })
        }
        const response = await axios.post(baseUrl, config);
        console.log(response.data);
        expect(response.data.status).toBe(200)
        expect(response.data).toMatchObject(desiredObject)
        expect(response.data.message).toEqual('success')
        expect(response.data.data).toBeTruthy();
    })

it("should fail when passing invalid username and valid password", async () => {
    config = {
        username: "tushrika",
        password: "tush@1234"

    }
    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})

it("should fail when passing null username and valid password", async () => {
    config = {
        username: "",
        password: "tush@1234"

    }

    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})

it("should fail when passing valid username and invalid password", async () => {
    config = {
        username: "tusharika",
        password: "tush123"

    }
    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})

it("should fail when passing valid username and null password", async () => {
    config = {
        username: "tusharika",
        password: ""

    }
    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})

it("should fail on passing null username and null password", async () => {
    config = {
        username: "",
        password: ""

    }
    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})

it("should fail on passing invalid username and invalid password", async () => {
    config = {
        username: "tushrika",
        password: "tush@"

    }
    const desiredObject = {
        status: 401,
        message: 'Invalid Credentials',

    }
    const response = await axios.post(baseUrl, config);
    console.log(response.data);
    expect(response.data.status).toBe(401)
    expect(response.data).toMatchObject(desiredObject)
    expect(response.data.message).toEqual('Invalid Credentials');

})
})

