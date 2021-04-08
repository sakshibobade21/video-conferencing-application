const socket = io('/')

const videoGrid = document.getElementById('video-grid')

const myVideo = document.createElement('video')
myVideo.muted = true

let myVideoStream

// Get stream if user gives the permission
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream
  addVideoStream(myVideo, myVideoStream)
})

const addVideoStream = (video, stream) => {
  // Display the video so user can see himself
  video.srcObject = stream

  // When metadata like duration, dimensions etc for the specified audio/video has been loaded.
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })

  // Add this video to the video grid
  videoGrid.append(video)
}

socket.emit('join-room', ROOM_ID)

socket.on('user-connected', () => {
  connectToNewUser()
})

const connectToNewUser = () => {
  console.log('New User Connected')
}
