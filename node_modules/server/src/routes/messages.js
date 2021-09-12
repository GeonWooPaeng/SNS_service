import { readDB, writeDB } from "../dbController.js";
import { v4 } from "uuid";

const getMsgs = () => readDB("messages");
const setMsgs = (data) => writeDB("messages", data);

const messagesRoute = [
  {
    //GET MESSAGES
    method: "get",
    route: "/messages",
    handler: ({ query: { cursor = "" } }, res) => {
      // const msgs = readDB("messages");
      const msgs = getMsgs();
      // cursor의 바로 다음 것을 찾게 한다.
      const fromIndex = msgs.findIndex((msg) => msg.id === cursor) + 1;
      // res.send(msgs);
      res.send(msgs.slice(fromIndex, fromIndex + 15)); //한번에 15개씩 불러온다.
    },
  },
  {
    //GET MESSAGES
    //id 하나만 가져오는 경우
    method: "get",
    route: "/messages/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find((m) => m.id === id);
        if (!msg) throw Error("not found");
        res.send(msg);
      } catch (err) {
        //찾지 못한 경우가 1개 밖에 없기 때문에 404 error
        res.status(404).send({ error: err });
      }
    },
  },
  {
    //CREATE MESSAGE
    method: "post",
    route: "/messages",
    handler: ({ body }, res) => {
      //body: 최근에 등록된 text, userId
      try {
        if (!body.userId) throw Error("no userId");
        const msgs = getMsgs();
        const newMsg = {
          id: v4(),
          text: body.text,
          userId: body.userId,
          timestamp: Date.now(),
        };
        msgs.unshift(newMsg);
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    //UPDATE MESSAGE
    method: "put",
    route: "/messages/:id",
    handler: ({ body, params: { id } }, res) => {
      //console.log() 로 찍어보기
      //body: 변경된 text가 들어온다.
      //params: id가 들어온다.
      // 실제 id를 지정해서 가는 경우다 보니
      // client에는 id가 있는데 server에는 없는 경우 또는 반대의 경우
      // 즉 server와 client간에 싱크가 맞지 않아서 오류가 있기 때문에
      // try catch 사용
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) throw "메시지가 없습니다.";
        if (msgs[targetIndex].userId !== body.userId)
          throw "사용자가 다릅니다.";

        const newMsg = { ...msgs[targetIndex], text: body.text };
        msgs.splice(targetIndex, 1, newMsg);
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    //DELETE MESSAGE
    method: "delete",
    route: "/messages/:id",
    handler: ({ params: { id }, query: { userId } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) throw Error("메시지가 없습니다.");
        if (msgs[targetIndex].userId !== userId)
          throw Error("사용자가 다릅니다.");

        msgs.splice(targetIndex, 1);
        setMsgs(msgs);
        res.send(id);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
];

export default messagesRoute;
