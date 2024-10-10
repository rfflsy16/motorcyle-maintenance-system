const {User, Motorcycle, Appointment, Service} = require('../models/index');

class Controller {

    static async showLandingPage(req, res) {
        try {
            
        } catch (error) {

        }
    }
    static getRegisterForm(req, res) {

    static async getRegisterForm(req, res) {

        try{
            // res.send('registerForm')
            res.render('register-form.ejs')
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }

    static async postRegisterForm(req, res) {
        try{
            const {name, email, password, phone, address } = req.body
            await User.create({
                name, 
                email, 
                password, 
                phone, 
                address,
                role: 'customer' 
            })

            res.redirect('/login')
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }

    static async getLoginForm(req, res) {
        try{
            res.render('login-form.ejs')
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }

    static async postLoginForm(req, res) {
        try{
            const {username, password, role } = req.body
            await User.create({username, password, role })

            res.redirect('/login')
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = Controller