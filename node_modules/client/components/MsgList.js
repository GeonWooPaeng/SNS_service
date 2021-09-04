import { useState } from 'react'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'

const UserIds = ['roy', 'jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

//msgs 50개 임의로 만들기
const originalMsgs = Array(50).fill(0).map(( _ , i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    
    //*1000 으로 millisecond를 second 단위로 바꾸고 * 60으로 다시 분단위로 
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: `${50 - i} mock text`
}))

// .reverse()

// [
//     {
//         id: 1,
//         userId: getRandomUserId,
//         timestamp: 1234567890123,
//         text: '1 mock text'
//     },
// ]

const MsgList = () => {
    const [msgs, setMsgs] = useState(originalMsgs)
    const onCreate = text => {
        const newMsg = {
            id: msgs.length + 1,
            userId: getRandomUserId(),
            timestamp: Date.now(),
            text: `${msgs.length + 1} ${text}`
        }
        // msgs.unshift(newMsg)
        setMsgs(msgs => ([newMsg, ...msgs]))
    }

    return (
        <>
            <MsgInput mutate={onCreate}/>
            <ul className="messages">
                {msgs.map(x => (
                    <MsgItem key={x.id} {...x} />
                ))}
            </ul>
        </>
    )
}

export default MsgList