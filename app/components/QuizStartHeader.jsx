import React from 'react'
import useComponentContextProvider from '../contextApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

const QuizStartHeader = ({parentTime}) => {
    const {quizToStartObject} = useComponentContextProvider();
    const {selectQuizToStart} = quizToStartObject;
    if (!selectQuizToStart) {
        return <div className="text-white text-center mt-10">Loading quiz data...</div>;
    }
    const {title, description, questions} = selectQuizToStart;

    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl text-green-800 dark:text-green-600'>{title}</h1>
                <p>{description}</p>
                <p className='text-sm opacity-60'>{`${questions.length} Question${questions.length > 1 ? 's' : ''}`}</p>
            </div>

            {/* Timer */}
            {parentTime && (
                <div>
                    <p className='text-gray-600 dark:text-gray-400'>
                        Time Remaining: {' '}
                        <FontAwesomeIcon icon={faStopwatch} /> {''} 
                        
                        00:00:{parentTime < 10 ? '0' : ''}{parentTime}
                    </p>
                </div>
            )}
        </div>
    )
}

export default QuizStartHeader