import { useState, useEffect } from 'react';
import './loading.scss';

const languages = [
    { text: "Hello", class: "hello" },             // English
    { text: "வணக்கம்", class: "tamil" },          // Tamil
    { text: "こんにちは", class: "japanese" },         // Japanese
    { text: "Kumusta", class: "philippine" },           // Philippine
    { text: "Hallo", class: "dutch" },             // Netherlands
    { text: "नमस्ते", class: "hindi" },           // Hindi
    { text: "Bonjour", class: "french" },           // French
    { text: "Hallo", class: "german" },             // German
    { text: "Cześć", class: "polish" }              // Polish
];

const Loading = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < languages.length) {
            const interval = setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, currentIndex === 0 ? 300 : 100); // 300ms for English, 100ms for others

            return () => clearTimeout(interval);
        } else {
            // Call onComplete when all languages have been shown once
            onComplete();
        }
    }, [currentIndex]);

    // Safely get the current language object
    const currentLanguage = languages[currentIndex] || { text: "", class: "" };

    return (
        <div className="loading-screen">
            <div className="hello-screen">
                <h1 className={`fade-in-out ${currentLanguage.class}`}>
                    {currentLanguage.text}
                </h1>
            </div>
        </div>
    );
};

export default Loading;
