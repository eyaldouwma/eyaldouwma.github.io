import React from 'react';
import pdf from './cv/eyalDouwmaCV.pdf';

console.log(pdf);

import './DownloadCVButton.scss';

const DownloadCVButton = () => {

    const handleDownload = () => {
        window.open(pdf);
    }

    return (
            <div className='download-cv-button' onClick={handleDownload}>
                Download CV
            </div>
    )
}

export default DownloadCVButton;