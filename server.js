// declare dependencies
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

//declare routers
//const ProjectsRouter = require("./routers/projects-router"); - this will need to change
const authRouter = require("./auth/auth-router.js");
const userRouter = require("./api/users/userRouter.js");
const tasksRouter = require("./api/tasks/taskRouter.js")
const meetingRouter = require("./api/meetings/meetingRouter.js")

//server will use those routerss
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use("/api/auth", authRouter)
server.use("/api/users", userRouter)
server.use("/api/tasks", tasksRouter)
server.use("/api/meeting", meetingRouter)

server.get("/api", (req,res)=>{
    res.json({api:"up"});
})

module.exports = server;