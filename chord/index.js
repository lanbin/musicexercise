'use strict';

// 和弦的组成
//
// 根音 major/minor sus2/sus4
//
// C7Sus
// major/ 1357
// minor/ 13b57b
// dominat 1357b 属
// 9 11 13 都是其大调音阶的音
//
// add 2 6 4
// sus 2/4   C7sus
// omit 省略
// () 升高/降低 5 7 9 11 13
// 7 9 11 13
// 4 5 6  7
//
// [root,  marjor/minor, add, 7/9/11/13, sus,  omit, 转位(on)]


(function(Vue){

  var NOTES = {
    "B#": 1,
    "C": 1,
    "C#": 2,
    "Db": 2,
    "D": 3,
    "D#": 4,
    "Eb": 4,
    "E": 5,
    "Fb": 5,
    "E#": 6,
    "F": 6,
    "F#": 7,
    "Gb": 7,
    "G": 8,
    "G#": 9,
    "Ab": 9,
    "A": 10,
    "A#": 11,
    "Bb": 11,
    "B": 12,
    "Cb": 12
  }

  var vm = new Vue({
    el: '#main',
    data: function(){
      return {
        title: 'Chord Composition',
        notes: NOTES,
        m: 0,
        // save numbers to match
        chord: [],
        // save value to show
        chordConsist: []
      }
    },
    computed:{
      allNotes: function(){
        return Object.keys(this.notes)
      }
    },
    watch:{
      m(newval){
        console.log(newval)
      }
    },
    mounted: function(){
      console.log('ok')
      console.log(this.allNotes)
      console.log(this.getRoot())

      // get root
      this.chord.push(this.getRoot())
      this.chordConsist.push(this.allNotes[this.chord[0]])
    },
    methods:{
      getRoot: function(){
        return Math.floor(Math.random() * this.allNotes.length)
      }
    }
  })
})(Vue)