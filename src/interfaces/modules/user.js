import { Fetch } from '../fetch.js'
export default {
    login(params){
        return Fetch('AccountService_UserLoginHandler', params)
    },

}