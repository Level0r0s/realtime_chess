<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import SockJS from 'sockjs-client'
export default {
  name: 'app',
  components: {
    chessboard
  },
  watch: {
    positionInfo: function (newVal, oldVal) {
      let self = this
      console.log('new move')
      if(newVal !== oldVal) {
        console.log(newVal)
        self.socket.send(JSON.stringify({'fen': newVal.fen}))
      }
    }
  },
  data () {
    return {
      currentFen: '',
      positionInfo: null,
      player: 'white',
      socket: null,
      uuid: null
    }
  },
  methods: {
    uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    },
    showInfo(data) {
        let self = this
        this.positionInfo = data

    },
    resetGame() {
    if (confirm("Want to promote to rook? Queen by default") ) {
        this.currentFen = ''
      } else {
        return false
      }


    },
    promote() {
      if (confirm("Want to promote to rook? Queen by default") ) {
        return 'r'
      } else {
        return 'q'
      }
    }
  },
  created() {

  },
  mounted () {

  }
}
</script>
<style>
body, html {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}

.btn {
  background-color: white;
  color: #333;
  border: 2px solid #008CBA;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.btn:hover {
  background-color: #008CBA !important;
  color: white  !important;;
}

::-webkit-scrollbar {
width: 12px;
height: 12px;
}

::-webkit-scrollbar-track {
box-shadow: inset 0 0 10px #03a9f4;
border-radius: 10px;
}

::-webkit-scrollbar-thumb {
border-radius: 10px;
background: #03a9f4;
box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
</style>
