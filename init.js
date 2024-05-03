const mongoose = require('mongoose');
const Chat = require("./models/chat.js") 


main().then((res) =>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
    {
    from: "rohit",
    to: "mohit",
    msg: "send me your notes",
    created_at: new Date(),
    },
    {
    from: "ankita",
    to: "sabarni",
    msg: "send my photos in whatsapp",
    created_at: new Date(),
    },
    {
    from: "sabarni",
    to: "ankita",
    msg: "give my cake",
    created_at: new Date(),
    },
    {
    from: "mantrit",
    to: "ankita",
    msg: "you are my sweet didi",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);