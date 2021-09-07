import MsgInput from "./MsgInput"

const MsgItem = ({
    //정보 받아오기
    id,
    userId,
    timestamp,
    text,
    onUpdate,
    onDelete,
    startEdit,
    isEditing
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
        {isEditing ? (
            <>
                <MsgInput mutate={onUpdate} text={text} id={id}/>
            </>
        ) : text}

        <div className="messages__buttons">
            <button onClick={startEdit}>수정</button>
            <button onClick={onDelete}>삭제</button>
        </div>
    </li>
)

export default MsgItem
