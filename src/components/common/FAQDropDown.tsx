import React, { useState } from 'react';

type FAQ = {
    id: number;
    question: string;
    answer: string;
};

const FAQDropDown = () => {
    const faq: FAQ[] = [
        {
            id: 1,
            question: 'Question Text Go Here',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!'
        },
        {
            id: 2,
            question: 'Question Text Go Here',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!'
        },
        {
            id: 3,
            question: 'Question Text Go Here',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!'
        },
    ];

    const [isOpen, setIsOpen] = useState(faq.map(() => false));

    const handleToggle = (key: number) => {
        setIsOpen((prevIsOpen) => prevIsOpen.map((open, i) => (i === key ? !open : open)));
    };

    const OpenArrow = () => (
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.70711 0.681565C7.31658 0.291041 6.68342 0.291041 6.29289 0.681565L0.292893 6.68157C-0.0976311 7.07209 -0.0976311 7.70525 0.292893 8.09578C0.683417 8.4863 1.31658 8.4863 1.70711 8.09578L7 2.80289L12.2929 8.09578C12.6834 8.4863 13.3166 8.4863 13.7071 8.09578C14.0976 7.70525 14.0976 7.07209 13.7071 6.68157L7.70711 0.681565Z" fill="#2D3648" transform="rotate(180 7 4.5)" />
        </svg>
    );

    const CloseArrow = () => (
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.70711 0.681565C7.31658 0.291041 6.68342 0.291041 6.29289 0.681565L0.292893 6.68157C-0.0976311 7.07209 -0.0976311 7.70525 0.292893 8.09578C0.683417 8.4863 1.31658 8.4863 1.70711 8.09578L7 2.80289L12.2929 8.09578C12.6834 8.4863 13.3166 8.4863 13.7071 8.09578C14.0976 7.70525 14.0976 7.07209 13.7071 6.68157L7.70711 0.681565Z" fill="#2D3648" />
        </svg>
    );

    return (
        <div>
            <hr className='border-black' />
            {faq.map((value, key) => (
                <div key={value.id} className='border-b border-black'>
                    <h4 onClick={() => handleToggle(key)} className='flex justify-between items-center py-5'>
                        <span className="text-xl font-roboto">{value.question}</span> {isOpen[key] ? <OpenArrow /> : <CloseArrow />}
                    </h4>
                    <span className='pb-6'>{isOpen[key] && <p className='pb-6'>{value.answer}</p>}</span>
                </div>
            ))}
        </div>
    );
};

export default FAQDropDown;