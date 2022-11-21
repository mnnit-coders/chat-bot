const express=require('express')
const http=require('http')
const app=express();
const socketio=require('socket.io')
const server=http.createServer(app);
app.use('/',express.static('C:/Users/rahul/OneDrive/Desktop/Practice/chat bot/public'))
const io=socketio(server);
io.on('connection',(socket)=>{
    console.log('socket formed on socket=>'+socket.id)
    socket.emit('connected')
    socket.on('send_msg',(data)=>{
        console.log(data.message)
        io.emit('msg',data)
    })
})
server.listen(3000,()=>{
    console.log('server is listen at 3000...')
})
