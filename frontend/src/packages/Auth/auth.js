export default function (Vue) {

    let authUser = {};

    Vue.auth = {
        // set token 
        setToken(token, expiration) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
        },
        // Get Token
        getToken() {
            let token = localStorage.getItem('token');
            let expiration = localStorage.getItem('expiration');
            if (!token || !expiration) {
                return null;
            }
            if (Date.now() > parseInt(expiration)) {
                this.destoryToken();
                return null;
            } else {
                return token;
            }
        },
        // Destroy Token
        destoryToken() {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
        },
        // isAuthenticated
        isAuthenticated() {
            if (this.getToken())
                return true;
            else
                return false;
        },

        // Store Authenticated User
        setAuthUser(data) {
            this.authUser = data;
        },

        // Get Authenticated User
        getAuthUser() {
            return this.authUser;
        }

    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}