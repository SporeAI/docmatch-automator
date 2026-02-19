import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import DocumentList from './components/DocumentList';
import MatchingResults from './components/MatchingResults';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [documents, setDocuments] = useState([]);
  const [matches, setMatches] = useState([]);

  const handleDocumentsUpload = (newDocs) => {
    setDocuments([...documents, ...newDocs]);
    // Simulate automatic matching
    setTimeout(() => {
      const simulatedMatches = performDocumentMatching(newDocs);
      setMatches([...matches, ...simulatedMatches]);
    }, 1000);
  };

  const performDocumentMatching = (docs) => {
    // Simplified matching logic for MVP
    const newMatches = [];
    for (let i = 0; i < docs.length - 1; i += 2) {
      newMatches.push({
        id: `match-${Date.now()}-${i}`,
        doc1: docs[i],
        doc2: docs[i + 1],
        confidence: Math.random() * 100,
        status: Math.random() > 0.7 ? 'mismatch' : 'match'
      });
    }
    return newMatches;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <UploadSection onUpload={handleDocumentsUpload} />
          <Box sx={{ mt: 4 }}>
            <DocumentList documents={documents} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <MatchingResults matches={matches} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;