import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Container } from './StarshipTable.styles';
import api from '../../services/api';

interface StartshipData {
  name: string;
  manufacturer: string;
  consumables: string;
  MGLT: string;
  numbersPitStop: number;
}

const consumablesTimeToHours = (consumablesTime: string) => {
  switch (consumablesTime) {
    case 'year':
    case 'years':
      return 8760;
    case 'month':
    case 'months':
      return 720;
    case 'week':
    case 'weeks':
      return 168;
    case 'day':
    case 'days':
      return 24;

    default:
      return 0;
  }
};

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: 'var(--background)',
    color: 'var(--title)',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
}))(TableRow);

const StarshipTable: React.FC = () => {
  const [distance, setDistance] = useState(10000);
  const [starshipData, setStarshipsData] = useState<StartshipData[]>([]);
  const [totalStarship, setTotalStarship] = useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    api.get('/starships/').then(response => {
      setStarshipsData(response.data.results);
      setTotalStarship(response.data.count);
    });
  }, []);

  useEffect(() => {
    api.get(`/starships/?page=${page + 1}`).then(response => {
      setStarshipsData(response.data.results);
      setTotalStarship(response.data.count);
    });
  }, [page]);

  const handleChangePage = useCallback((event: any, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: any) => {
    setRowsPerPage(Number(event.target.value));

    setPage(1);
  }, []);

  const starshipDataWithPitStopInfo = useMemo(() => {
    return starshipData.map(starship => {
      if (starship.consumables) {
        const [timeNumber, timeText] = starship.consumables.split(' ');
        const numbersPitStop = Math.floor(
          distance /
            (Number(timeNumber) *
              consumablesTimeToHours(timeText) *
              Number(starship.MGLT)),
        );

        const starshipWithPitStop = { ...starship, numbersPitStop };

        return starshipWithPitStop;
      }

      return { ...starship, numbersPitStop: 0 };
    });
  }, [distance, starshipData]);

  return (
    <Container>
      <Typography variant="body1">
        Change the value to calculate the number of Pit Stop{' '}
      </Typography>
      <TextField
        label="Distance"
        variant="outlined"
        required
        value={distance}
        onChange={e => setDistance(Number(e.target.value))}
        helperText="Type the distance in MGLT"
      />
      <TableContainer>
        <Table aria-label="starships data">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Manufacturer</StyledTableCell>
              <StyledTableCell align="right">Consumables</StyledTableCell>
              <StyledTableCell align="right">MGLT/hour</StyledTableCell>
              <StyledTableCell align="right">Numbers Pit Stop</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {starshipDataWithPitStopInfo.length > 0 &&
              starshipDataWithPitStopInfo.map(starship => (
                <StyledTableRow key={starship.name}>
                  <TableCell component="th" scope="row">
                    {starship.name}
                  </TableCell>
                  <TableCell align="right">{starship.manufacturer}</TableCell>
                  <TableCell align="center">{starship.consumables}</TableCell>
                  <TableCell align="center">{starship.MGLT}</TableCell>
                  <TableCell align="center">
                    <strong>
                      {Number.isNaN(starship.numbersPitStop)
                        ? 'unknown'
                        : starship.numbersPitStop}
                    </strong>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                rowsPerPage={rowsPerPage}
                colSpan={3}
                count={totalStarship}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StarshipTable;
