import React, { useState } from 'react';

//-------MATERIAL UI IMPORTS---------
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Input } from 'reactstrap';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function EditEquipment() {
  //----------MATERIAL UI STYLES ------
  const classes = useStyles();

  //-----------------------------------------
  const userId = localStorage.getItem('userId');
  // const itemId = localStorage.getItem('itemId');
  //------------State-----------------------------
  const [equipment, setEquipment] = useState({});
  const [equipmentValues, setEquipmentValues] = useState(equipment);

  //-----------Backend call------------------

  //--------------Handlers--------------------
  const handleEditChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <Container>
      <div className={classes.paper}>
        <CssBaseline />
        <Typography component='h1' variant='h5'>
          Edit Equipment
        </Typography>
        <form action=''>
          <TextField
            name='name'
            type='text'
            value={equipmentValues.name}
            onChange={handleEditChange}
            placeholder='Equipment Name'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            name='price'
            type='text'
            value={equipmentValues.price}
            onChange={handleEditChange}
            placeholder='Price'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            name='rentalTime'
            type='number'
            value={equipmentValues.rentalTime}
            onChange={handleEditChange}
            placeholder='Renting Days'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Input
            name='details'
            type='textarea'
            value={equipmentValues.details}
            onChange={handleEditChange}
            placeholder='Equipment Description'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Submit Equipment
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EditEquipment;
