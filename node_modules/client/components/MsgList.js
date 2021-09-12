import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router.js";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import fetcher from "../fetcher.js";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

const UserIds = ["roy", "jay"];
// const getRandomUserId = () => UserIds[Math.round(Math.random())];

//msgs 50개 임의로 만들기
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRandomUserId(),

//     //*1000 으로 millisecond를 second 단위로 바꾸고 * 60으로 다시 분단위로
//     timestamp: 1234567890123 + (50 - i) * 1000 * 60,
//     text: `${50 - i} mock text`,
//   }));

// console.log(JSON.stringify(originalMsgs));
// .reverse()

// [
//     {
//         id: 1,
//         userId: getRandomUserId,
//         timestamp: 1234567890123,
//         text: '1 mock text'
//     },
// ]

const MsgList = ({ smsgs, users }) => {
  const { query } = useRouter();
  const userId = query.userId || query.userid || ""; //window에서 대/소문자를 구분하지 않는 것에 대한 해결책

  // render가 한번만 일어나기 위해 useState에 미리 smsgs를 넣어준다.
  // const [msgs, setMsgs] = useState([]);
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl); //fetchMoreEl가 화면상에 노출되면 True 아니면 false

  const onCreate = async (text) => {
    const newMsg = await fetcher("post", "/messages", { text, userId });
    if (!newMsg) throw Error("something wrong"); //안전장치
    // const newMsg = {
    //   id: msgs.length + 1,
    //   userId: getRandomUserId(),
    //   timestamp: Date.now(),
    //   text: `${msgs.length + 1} ${text}`,
    // };
    // msgs.unshift(newMsg)
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher("put", `/messages/${id}`, { text, userId });
    if (!newMsg) throw Error("something wrong"); //안전장치
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text,
      // });

      //서버에서 온 온전한 newMsg를 넣어주면 된다.
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async (id) => {
    const receivedId = await fetcher("delete", `/messages/${id}`, {
      params: { userId },
      //params: {userId}가 `/messages/${id}?userId=${userId}`랑 같습니다.
      //params로 들어가지만 실제로는 server/src/routes/messages.js의 delete부분의 query로 들어갑니다.
    });
    setMsgs((msgs) => {
      // 형변환이 자동으로 되기 때문에 receivedId를 문자열로 바꿔줍니다.
      const targetIndex = msgs.findIndex((msg) => msg.id === receivedId + "");
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };
  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const newMsgs = await fetcher("get", "/messages", {
      parmas: { cursor: msgs[msgs.length - 1]?.id || "" }, //cursor: 맨 마지막에 있는 값의 id값을 넘겨준다.
    });
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs((msgs) => [...msgs, ...newMsgs]);
  };

  // useEffect(() => {
  // 2번 요청이 있어서 지워줍니다.
  //   getMessages();
  // }, []);

  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">
        {msgs.map((x) => (
          <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={() => onDelete(x.id)}
            startEdit={() => setEditingId(x.id)}
            isEditing={editingId === x.id}
            myId={userId}
            user={users[x.userId]}
          />
        ))}
      </ul>
      <div ref={fetchMoreEl} />{" "}
      {/* 해당 부분이 화면상에 나타났을 때 다음 data를 불러와라 */}
    </>
  );
};

export default MsgList;
