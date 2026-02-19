import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip
} from '@mui/material';

function MatchingResults({ matches }) {
  if (matches.length === 0) {
    return null;
  }

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Matching Results
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Document 1</TableCell>
              <TableCell>Document 2</TableCell>
              <TableCell>Confidence</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>{match.doc1.name}</TableCell>
                <TableCell>{match.doc2.name}</TableCell>
                <TableCell>{Math.round(match.confidence)}%</TableCell>
                <TableCell>
                  <Chip
                    label={match.status}
                    color={match.status === 'match' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MatchingResults;