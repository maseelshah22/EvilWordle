import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-words-game',
  templateUrl: './words-game.component.html',
  styleUrl: './words-game.component.css',
})
export class WordsGameComponent {
  word = '';
  guessHistory: string[] = [];
  curGuess = '';
  gHistClass = 'gHist';
  buttonSubmitClass = 'btn btn-primary';
  newGameButtonClass = 'btn btn-danger';
  body = 'background';
  formClass = 'form-group';

  wordCharCount = new Map();

  overStatus = false;

  // pageColor='background-color: lightGray; height:100%';

  constructor(private http: HttpClient) {
    this.setUp();
  }

  setUp() {
    //change url when uploading to server
    // this is the ajax query

    this.http
      .get('https://cs4640.cs.virginia.edu/dda5us/hw8/wordle_api.php')
      .subscribe((randomWord: any) => {
        this.word = randomWord['word'];
        // console.log('the word is', this.word);

        for (let i = 0; i < this.word.length; i++) {
          if (this.wordCharCount.has(this.word[i])) {
            this.wordCharCount.set(
              this.word[i],
              this.wordCharCount.get(this.word[i]) + 1
            );
          } else {
            this.wordCharCount.set(this.word[i], 1);
          }
        }

      });

    this.guessHistory = [];
    this.curGuess = '';
    this.overStatus = false;

  
  }

  submitGuess() {
    let history_input = '';
    let correctPostion = 0;

    let sameLetterCount = 0;

    if (this.curGuess == this.word) {
      history_input = 'Guess: ' + this.curGuess + ' ~ Correct!';
      this.guessHistory.push(history_input);
      this.overStatus = true;

      // this.setUp();
      return;
    }

    if (this.curGuess.length == 0) {
      // this.curGuess = '';
    } else {
      history_input = 'Guess: ' + this.curGuess;

      // console.log('wordCharCount', this.wordCharCount);
      for (let i = 0; i < this.curGuess.length; i++) {
        let character = this.curGuess[i];

        if (this.wordCharCount.has(character)) {
          sameLetterCount += 1;
          // console.log('sameLetterCount-enter', character,sameLetterCount);
        }
      }
    //  console.log('sameLetterCount', sameLetterCount);

      history_input +=
        '  ~ # of Guessed Characters in Word (not unique): ' + sameLetterCount;

      if (this.curGuess.length > this.word.length) {
        for (let i = 0; i < this.word.length; i++) {
          if (this.curGuess[i] == this.word[i]) {
            correctPostion++;
          }
        }

        history_input +=
          ' ~ Letters in Correct Position: ' +
          correctPostion +
          ' ~ Guess Was Too Long';
      } else if (this.curGuess.length < this.word.length) {
        for (let i = 0; i < this.curGuess.length; i++) {
          if (this.curGuess[i] == this.word[i]) {
            correctPostion++;
          }
        }
        history_input += ' ~ Letters in Correct Position: ' +
        correctPostion +
          ' ~ Guess Was Too Short'
      } else if (this.curGuess.length == this.word.length) {
        for (let i = 0; i < this.word.length; i++) {
          if (this.curGuess[i] == this.word[i]) {
            correctPostion++;
          }
        }

        history_input +=
        ' ~ Letters in Correct Position: ' +
          correctPostion +
          ' ~ Guess Was Same Size'
          correctPostion;
      }

      this.guessHistory.push(history_input);
      // console.log('guess', this.curGuess);
      // console.log('wordlength', this.word.length);
      // console.log('correctPos', correctPostion);

      //correctPostion = 0;
    }

    this.curGuess = ''; //clear guess
  }
}
