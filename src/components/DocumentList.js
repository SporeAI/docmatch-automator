import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

function DocumentList({ documents }) {
  if (documents.length === 0) {
    return null;
  }

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Uploaded Documents
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Upload Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{Math.round(doc.size / 1024)} KB</TableCell>
                <TableCell>
                  {new Date(doc.uploadDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{doc.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DocumentList;