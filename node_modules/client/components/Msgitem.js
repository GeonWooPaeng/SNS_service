const MsgItem = ({
    //정보 받아오기
    userId,
    timestamp,
    text
}) => (
    <li className="messages__item">
        <h3>
            {userId}{' '}
            <sub>
                {/* 시간정보 넣기 */}
                {new Date(timestamp).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })}
            </sub>
        </h3>
        {text}
    </li>
)

export default MsgItem