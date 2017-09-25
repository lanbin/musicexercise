(function() {
  'use strict';

  var dq = document.querySelector,
    correctDom = dq.call(document, '#correct'),
    totalDom = dq.call(document, '#total'),
    questionTextDom = dq.call(document, '#q'),
    answerText = dq.call(document, '#answer'),
    confirmBtn = dq.call(document, '#confirm'),

    r = {},

    dataKey = '5thsData',
    data = window.localStorage.getItem(dataKey),

    noteList = ['C/B#', 'C#/Db', 'D', 'D#/Eb', 'E/Fb', 'E#/F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B/Cb']

  Object.defineProperty(r, 'nodeResult', {
    get: function() {
      var data = window.localStorage.getItem(dataKey)
      return JSON.parse(data) || {
        correct: 0,
        total: 0
      }
    },
    set: function(value) {
      window.localStorage.setItem(dataKey, JSON.stringify(value))
    }
  })

  function refreshResult() {
    correctDom.innerHTML = ~~r.nodeResult.correct
    totalDom.innerHTML = ~~r.nodeResult.total
  }

  var nodeLen = noteList.length,
    currentQ = {}

  function generateQ() {
    var index = Math.floor(Math.random() * nodeLen),
      answerList = noteList.concat(noteList)
    currentQ = {
      q: noteList[index],
      a: answerList[index + 7].split('/')
    }
    questionTextDom.innerHTML = currentQ.q
  }

  function checkAnswer() {
    var answer = answerText.value,
    answerMsg = 'The Answer is ' + currentQ.a.join("/")

    if(!answer) {
      return
    }

    if (currentQ.a.indexOf(answer.toString()) > -1) {
      alert('√ Correct! ' + answerMsg)
      r.nodeResult = {
        correct: r.nodeResult.correct + 1,
        total: r.nodeResult.total + 1
      }
    } else {
      alert('✘ Wrong! ' + answerMsg)
      r.nodeResult = {
        correct: r.nodeResult.correct,
        total: r.nodeResult.total + 1
      }
    }
    refreshResult()
    generateQ()
    answerText.value = ''
  }


  answerText.addEventListener('keyup', function(evt) {
    if (evt.keyCode == 13) {
      checkAnswer()
    }
  })

  confirmBtn.addEventListener('click', function() {
    checkAnswer()
  })


  refreshResult()
  generateQ()
  answerText.focus()
})()