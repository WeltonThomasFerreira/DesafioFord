import Crypto from './crypto'

const INPUT = 'Desafio Ford'
const SECRET_KEY = 'ford'

const crypto = new Crypto()
const encrypted = crypto.generate(INPUT, SECRET_KEY)
const decrypted = crypto.decrypt(encrypted, SECRET_KEY)

console.log(encrypted)
console.log(decrypted)
