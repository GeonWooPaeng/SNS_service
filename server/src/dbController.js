// const fs = repuire('fs') 원래 이렇게 써야 한다 but package.json에서 "type"추가 해주면 된다.

import fs from 'fs'  //nodeJS 기능
import { resolve } from 'path' //nodeJS 기능

const basePath = resolve() //현재 경로가 basePath

const filenames = {
    messages: resolve(basePath, 'src/db/messages.json'),
    users: resolve(basePath, 'src/db/users.json')
}

export const readDB = target => {
    try {
        return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
    } catch(err) {
        console.log(err)
    }
}

export const writeDB = (target, data) => {
    try {
        return fs.writeFileSync(filenames[target], JSON.stringfy(data))
    } catch (err) {
        console.log(err)
    }
}