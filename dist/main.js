"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("./crypto"));
const INPUT = 'Desafio Ford';
const SECRET_KEY = 'ford';
const crypto = new crypto_1.default();
const encrypted = crypto.encrypt(INPUT, SECRET_KEY);
const decrypted = crypto.decrypt(encrypted, SECRET_KEY);
console.log(encrypted);
console.log(decrypted);
