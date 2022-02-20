import React from "react";
import './Questions.styles.scss';

export const QuestionsData = [
  'Was war dein erster Eindruck von mir? Und wodurch ist er entstanden?',
  'Was – glaubst du – denken andere Menschen häufig über dich, was aber gar nicht wahr ist?',
  'Wirke ich auf dich eher wie eine kreative oder wie eine analytische Person? Warum?',
  'Wie viel Zeit nimmst du dir in der Woche für deine Hobbys?',
  'Was war das bisher größte sportliche Ereignis, das du mal erlebt hast?',
  'Gibt es derzeit etwas in deinem Leben, das für dich höchste Priorität hat? ',
  'Welches Talent hättest du gerne – und warum?',
  'Welches Kompliment, das dir einmal gemacht wurde, wird dir noch lange in Erinnerung bleiben?',
  'Gibt es etwas in deinem Leben, das du bereust?',
  'Womit kann man dir immer eine Freude bereiten?',
  'Wenn du dir dein heutiges Leben vorstellst, wäre dein jugendliches Ich stolz auf dich?',
  'Womit kann man dir immer eine Freude bereiten?',
  'Wie merkt man dir an, dass du traurig bist?',
  'Welche Rolle spielt Sex für dich in einer Beziehung',
  'Wie würde sich dein Leben ändern, wenn du morgen im Lotto gewinnen würdest?',
  'Wenn du einen richtig schlechten Tag bei der Arbeit hattest, worüber freust du dich dann abends am meisten?',
  'Kannst du etwas nicht, was für die meisten Menschen ganz einfach ist?'
];
export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionsData,
      selectedQuestion: '',
      chosenQuestions: []
    }
  }

  handleClick = () => {
    const {questions, chosenQuestions} = this.state;
    if(chosenQuestions.length < questions.length) {
      let chosenQuestion = questions[Math.floor(Math.random()*questions.length)];
      while(chosenQuestions.includes(chosenQuestion)) {
        chosenQuestion = questions[Math.floor(Math.random()*questions.length)];
      }
      this.setState({selectedQuestion: chosenQuestion});
      this.setState({chosenQuestions: [...chosenQuestions, chosenQuestion]});
    }
  }

  render() {
    const {selectedQuestion, chosenQuestions} = this.state;
    const displayQuestion = selectedQuestion ? selectedQuestion : 'Button drücken für neue Frage';
    const allQuestionsAsked = this.state.chosenQuestions.length >= this.state.questions.length;
    return (
      <div className={'questionWrapper'}>
        <div>{chosenQuestions.length % 2 ? 'Theresa beginnt' : 'Laurenz beginnt'}</div>
        <div>{displayQuestion}</div>
        <button onClick={this.handleClick} className={'newQuestionButton'} disabled={allQuestionsAsked}>Neue Frage</button>
      </div>
    )
  }
}