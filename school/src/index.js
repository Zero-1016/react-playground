import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_4/Commentlist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CommentList></CommentList>
    </React.StrictMode>
);
reportWebVitals();
