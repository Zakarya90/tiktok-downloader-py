// pages/index.js
import { useState } from 'react';

const Home = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    // Implement a function to send a request to the backend to fetch the download link
    const response = await fetch('/api/download', {
      method: 'POST',
      body: JSON.stringify({ videoUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setDownloadLink(data.downloadLink);
  };

  return (
    <div>
      <h1>TikTok Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter TikTok Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      {downloadLink && (
        <div>
          <p>Download Link:</p>
          <a href={downloadLink} download>
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
