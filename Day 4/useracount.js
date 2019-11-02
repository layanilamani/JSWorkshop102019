
function signup(name, email, password) {
    var users = [];

    if (window.localStorage.getItem("users") != null) {
        users = JSON.parse(window.localStorage.getItem("users"));
    }

    var user = { Name: name, Email: email, Password: password }; 

    users.push(user);
    var stringdata = JSON.stringify(users);

    window.localStorage.setItem("users", stringdata);
    return true;
}

function signin(email, password) {
    var users = [];

    if (window.localStorage.getItem("users") != null) {
        users = JSON.parse(window.localStorage.getItem("users"));
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].Email == email && users[i].Password == password) {
            window.localStorage.setItem("userloginhogaya", true);
            return true;
        }
    }

    return false;
}

function IsUserLoggedIn() {
    if (window.localStorage.getItem("userloginhogaya") == "true") {
        return true;
    }
    else {
        return false;
    }
}

function signout() {
    window.localStorage.removeItem("userloginhogaya");
}

function ClearAll() {
    window.localStorage.removeItem("users");
    window.localStorage.clear();
}