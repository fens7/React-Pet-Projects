import './index.scss';
import React, { useState } from 'react';

const questions = [
    {
        title: 'React - це ... ?',
        variants: ['бібліотека', 'фреймворк', 'додаток'],
        correct: 0,
    },
    {
        title: 'Компонент - це ... ',
        variants: [
            'додаток',
            'частина додатку чи сторінки',
            'це те, що я не знаю',
        ],
        correct: 1,
    },
    {
        title: 'Що таке JSX?',
        variants: [
            'Це звичайний HTML',
            'Це функція',
            'Це той самий HTML, але зі-змогою виконувати JS-код',
        ],
        correct: 2,
    },
];

function Result({correct}) {
    return (
        <div className='result'>
            <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
            <h2>Ви дали правильну відповідь на {correct} з {questions.length}</h2>
            <a href='/'>
                <button>Спробувати ще раз</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickVariant }) {
    const progressBarPercentage = Math.round(step / questions.length * 100);
    return (
        <>
            <div className='progress'>
                <div style={{ width: `${progressBarPercentage}%` }} className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((question, index) => (
                    <li onClick={()=>onClickVariant(index)} key={question}>{question}</li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const question = questions[step];
    const [correct, setCorrect] = useState(0);
    

    const onClickVariant = (index) => {
            setStep(step + 1)
            if(index === question.correct){
                setCorrect(correct + 1)
            }
        }

    return (
        <div className='App'>
            {
                step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />) : (<Result correct={correct} />)
            }
        </div>
    );
}

export default App;
