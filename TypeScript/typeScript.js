"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_id, _User_name, _User_phone, _User_email, _User_password, _User_createdAt, _User_isAdmin, _User_isBusiness;
class User {
    constructor(name, address, email, phone, password) {
        _User_id.set(this, void 0);
        _User_name.set(this, void 0);
        _User_phone.set(this, void 0);
        _User_email.set(this, void 0);
        _User_password.set(this, void 0);
        _User_createdAt.set(this, void 0);
        _User_isAdmin.set(this, void 0);
        _User_isBusiness.set(this, void 0);
        __classPrivateFieldSet(this, _User_id, User.generateId(), "f");
        this.name = name; // Uses the 'name' setter, re-using the capitalization functionality
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        __classPrivateFieldSet(this, _User_createdAt, new Date(), "f");
        __classPrivateFieldSet(this, _User_isAdmin, false, "f");
        __classPrivateFieldSet(this, _User_isBusiness, false, "f");
    }
    static generateId() {
        return Math.floor(Math.random() * 8999999 + 1000000);
    }
    static capitalizeWord(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    get id() {
        return __classPrivateFieldGet(this, _User_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _User_name, "f");
    }
    set name(name) {
        __classPrivateFieldSet(this, _User_name, `${User.capitalizeWord(name.first)} ${User.capitalizeWord(name.last)}`, "f");
    }
    get email() {
        return __classPrivateFieldGet(this, _User_email, "f");
    }
    set email(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log("Email test");
        console.log("=========================", __classPrivateFieldGet(this, _User_email, "f"));
        console.log(__classPrivateFieldGet(this, _User_email, "f") === email);
        if (emailRegex.test(email)) {
            if (__classPrivateFieldGet(this, _User_email, "f") === email) {
                throw new Error("Email already exists");
            }
            else {
                __classPrivateFieldSet(this, _User_email, email, "f");
            }
        }
        else {
            throw new Error("Invalid email format. Please provide a valid email address.");
        }
    }
    set phone(phone) {
        const phoneRegex = /^\+972-?\d{3}-?\d{7}$/;
        if (phoneRegex.test(phone)) {
            __classPrivateFieldSet(this, _User_phone, phone, "f");
        }
        else {
            throw new Error("Invalid phone number format. Please use format XXX-XXX-XXXX");
        }
    }
    get phone() {
        return __classPrivateFieldGet(this, _User_phone, "f");
    }
    get password() {
        return __classPrivateFieldGet(this, _User_password, "f");
    }
    set password(password) {
        // This regex checks for at least one uppercase letter, one lowercase letter, exactly four digits, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4,})(?=.*[!@#$%^&*-]).*$/;
        if (passwordRegex.test(password))
            __classPrivateFieldSet(this, _User_password, password, "f");
        else
            throw new Error(`Password provided is invalid.`);
    }
    get createdAt() {
        return __classPrivateFieldGet(this, _User_createdAt, "f");
    }
    get isAdmin() {
        return __classPrivateFieldGet(this, _User_isAdmin, "f");
    }
    set isAdmin(isAdmin) {
        __classPrivateFieldSet(this, _User_isAdmin, isAdmin, "f");
    }
    get isBusiness() {
        return __classPrivateFieldGet(this, _User_isBusiness, "f");
    }
    toggleIsBusiness() {
        if (__classPrivateFieldGet(this, _User_isAdmin, "f"))
            __classPrivateFieldSet(this, _User_isBusiness, !__classPrivateFieldGet(this, _User_isBusiness, "f"), "f");
        else
            throw new Error(`You are not an Admin, and not authorized to perform this action.`);
    }
}
_User_id = new WeakMap(), _User_name = new WeakMap(), _User_phone = new WeakMap(), _User_email = new WeakMap(), _User_password = new WeakMap(), _User_createdAt = new WeakMap(), _User_isAdmin = new WeakMap(), _User_isBusiness = new WeakMap();
try {
    const userTomer = new User({
        first: "tomer",
        last: "sagi"
    }, {
        state: "Israel",
        country: "Israel",
        city: "Haifa",
        street: "Kadish Luz",
        houseNumber: 9,
        zip: "3215907"
    }, "me@tomersagi.com", "+9720509597059", "Tomer5555$");
    userTomer.isAdmin = true;
    userTomer.email = "a@gmail.com";
    // userTomer.password = '12345'; // Should throw an Error
    // userTomer.password = 'Tomer5555$';
    console.log(userTomer);
    userTomer.toggleIsBusiness();
}
catch (error) {
    alert(`Error: ${error.message}`);
}
