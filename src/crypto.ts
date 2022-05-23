export default class Crypto {
  generate (vinNumber: string, secretKey: string) {
    const vin = vinNumber.split('')
    const key = secretKey.split('')
    const newArray = []
    let skIndex = 0

    for (let index = 0; index < vin.length; index++) {
      const element = vin[index]
      if (skIndex > 3) skIndex = 0
      const newChar = element.charCodeAt(0) + key[skIndex].charCodeAt(0)
      newArray.push(String.fromCharCode(newChar))
      skIndex += 1
    }

    return newArray.join('')
  }

  decrypt (hash: string, secretKey: string) {
    const vin = hash.split('')
    const key = secretKey.split('')
    const newArray = []
    let skIndex = 0

    for (let index = 0; index < vin.length; index++) {
      const element = vin[index]
      if (skIndex > 3) skIndex = 0
      const newChar = element.charCodeAt(0) - key[skIndex].charCodeAt(0)
      newArray.push(String.fromCharCode(newChar))
      skIndex += 1
    }

    return newArray.join('')
  }
}
