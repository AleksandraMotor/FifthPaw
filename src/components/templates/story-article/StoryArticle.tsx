import { useEffect, useRef, useState } from 'react';
import { Story } from '../../our-stories/OurStoriesData';

import './StoryArticle.scss';

const StoryArticle = ({ title, image, text }: Story) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.height = isExpanded ? `${textRef.current.scrollHeight}px` : '90px';
        }
    }, [isExpanded]);

    return (
        <article className='story-article' id={title}>
            <h3 className='story-article__title'>{title}</h3>
            {image && (
                <img className='story-article__image' src={image} alt={title}/>
            )}
            {text && (
                <p ref={textRef} className='story-article__text'>
                    {text}
                </p>   
            )}
            <button className='story-article__button' onClick={toggleText} aria-label='Rozwiń/Zwiń Tekst'>
                {isExpanded ? 'Zwiń' : 'Czytaj dalej...'}
            </button>
        </article>
    );
};

export default StoryArticle;