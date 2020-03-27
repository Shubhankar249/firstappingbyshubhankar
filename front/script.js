let socket=io()

function play(instID) {
    socket.emit('play', {id:instID})
}

$(()=> {
    socket.on('play', (data) => {
        let song=$('#a'+data.id)[0]
        song.play()
    })
})