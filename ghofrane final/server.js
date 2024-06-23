const express = require("express");
const cors = require("cors");
const { createServer } = require("http");

require("dotenv").config();
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5000;
const user = require("./routes/user");
const admin = require("./routes/admin");
const handMade = require("./routes/handMade");
const client = require("./routes/client");
const chat = require("./routes/chat");
const connect = require("./config/connectDB");
const app = express();
const server = createServer(app);

app.use(express.json({ limit: "500mb" }));

app.use(express.urlencoded({ limit: "500mb", extended: true }));

// app.use(cors({ origin: "*" }));
app.use(
  cors({
    origin: "*", // Use the environment variable
    credentials: true,
  })
);

app.use("/api/v1/auth", user);
app.use("/api/v1/admin", admin);
app.use("/api/v1/handMade", handMade);
app.use("/api/v1/client", client);
app.use("/api/v1/chat", chat);

const start = async () => {
  try {
    await connect();
    server.listen(PORT, () =>
      console.log(`Server Running on port : ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  //connected to correct id
  socket.on("setup", (userData) => {
    socket.join(userData._id);

    socket.emit("connected");
  });

  socket.on("join-chat", (room) => {
    socket.join(room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop-typing", (room) => socket.in(room).emit("stop-typing"));

  socket.on("new-message", (newMessageReceived) => {
    let chat = newMessageReceived.chat;

    if (!chat.users) return console.log(`chat.users not defined`);

    chat.users.forEach((user) => {
      if (user !== newMessageReceived.sender._id) {
        socket.in(user).emit("message-received", newMessageReceived);
      }
    });
  });
  // socket.on("new-notification", (notificationData) => {
  //   socket.in(notificationData.userId).emit("notification", notificationData);
  // });
  socket.off("setup", () => {
    socket.leave(userData._id);
  });
});
