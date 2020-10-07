import React from 'react';
import downloadPlaceholder from '../img/downloadImagePlaceholder.png';

const Download = () => (
    <section id="download" class="download container">
        <div class="download__content">
            <h2 class="download__title gradientLetters">DOWNLOAD</h2>
            <p class="download__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua. </p>
            <img src={downloadPlaceholder} alt="MN Download" />
            <div class="downloadBtn">
                <a href="#" class="win">Windows </a>
                <a href="#" class="lin">Linux</a>
            </div>
        </div>
    </section>
);
export default Download;