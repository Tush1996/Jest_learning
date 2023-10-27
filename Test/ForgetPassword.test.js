const axios = require('axios')
const baseUrl = 'https://omniwallet.tngbl.xyz/forgot-password'
const email = "tusharika@integraate.com"
let config = {};

describe("forget password", () => {
    it('should send a message and reset link', async () => {
        config = {
            username: "tusharika"
        }
        const response = await axios.post(baseUrl, config)
        console.log(response.data)
        expect(response.data.status).toBe(200);
        expect(response.data.message).toBe("success");
        expect(response.data.data.message).toEqual("Link to reset sent to tusharika@integraate.com");
        expect(response.data.data.link).toBeTruthy()
        
        // const restPassword = await axios.post(ForgetPassword)
        // const resetPassword = await resetPassword(forgetPassword (response.data.data.Link), 'tush@123');
        // console.log(resetPassword.data)
        // expect(resetPassword.data.status).toBe(200);
        // expect(resetPassword.data.message).toBe("success");
        // expect(resetPassword.data.data.message).toBe("Password reseted successfully!");/

    });

    it('should show error message on passing null username', async () => {
        config = {
            username: ""
        }
        const response = await axios.post(baseUrl, config)
        console.log(response.data)
        expect(response.data.status).toBe(400);
        expect(response.data.message).toEqual("Invalid Request Body");
        expect(response.data.error).toBeFalsy();

    })

    it('should show error message on passing invalid username', async () => {
        config = {
            username: "tush"
        }
        const response = await axios.post(baseUrl, config)
        console.log(response.data)
        expect(response.data.status).toBe(401);
        expect(response.data.message).toEqual("Invalid user credentials!");

    })

    it('should show error on passing special character in username', async () => {
        config = {
            username: "@"
        }
        const response = await axios.post(baseUrl, config)
        console.log(response.data)
        expect(response.data.status).toBe(400);
        expect(response.data.message).toEqual("Invalid Request Body")
        expect(response.data.error).toBeFalsy();;

    })


})      
