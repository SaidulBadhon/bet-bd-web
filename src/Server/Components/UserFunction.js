import axios from "axios"

export const register = newUser => {
    return axios.post("user/register", {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: newUser.userName,
        number: newUser.number,
        email: newUser.email,
        password: newUser.password
    }).then(res => {
        console.log("HI I AM A LOG FROM USERFUNCTION/LONIN" + "Registered");
    })
}

export const login = user => {
    return axios.post("http://localhost:5000/users/login", {
        email: user.email,
        password: user.password
    }).then(res => {
        localStorage.setItem("usertoken", res.data)
        return res.data
    }).catch(err => {
        console.log(err)
        console.log(user)
    }
    )

}