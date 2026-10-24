import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';
// Fonts are bundled with the site: loading them from Google's CDN sends every visitor's IP to Google (GDPR).
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';
import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-mono/400.css';

createRoot(document.getElementById('root')).render(<App />);
