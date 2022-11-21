console.log("heeloo")
let socket=io();
socket.on('connected',()=>{
    console.log('connected')
})
$(function(){
    let msglist=$('#msglist')
    let sendmsg=$('#sendmsg')
    let msgbox=$('#msgbox')
    sendmsg.click(function(){
        let msg=msgbox.val();
        socket.emit('send_msg',{message:msg});
    })
    socket.on('msg',function(data){
        msglist.append($('<li>'+ data.message+'</li>'))
    })
})