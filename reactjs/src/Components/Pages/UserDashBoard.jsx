import React, { useState } from 'react';
import {
  Container, Paper, Avatar, Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import {useUser} from '../Provider/UserProvider';


export default function UserDashBoard() {

  const {userDetails, setUserDetails } = useUser();

  const [isEditing, setIsEditing] = useState(false);
  // const [userDetails, setUserDetails] = useState({
  //   name: 'John Doe',
  //   email: 'john.doe@example.com',
  //   phone: '123-456-7890',
  //   address: '123 Main St, Anytown, USA',
  // });

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, image: '', name: 'Product 1', status: 'Delivered' },
    { id: 2, image: '', name: 'Product 2', status: 'Pending' },
  ]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" align="center" sx={{ paddingBottom: 2 }}>
          User Details
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 100, height: 100, margin: '0 auto' }} src="" alt="user" />
          </div>
          <div>
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  value={userDetails.email}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <Typography>Name: {userDetails.name}</Typography>
                <Typography>Email: {userDetails.email}</Typography>
                <Typography>Phone: {userDetails.phone}</Typography>
                <Typography>Address: {userDetails.address}</Typography>
              </>
            )}
            <div style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit Details'}
              </Button>
            </div>
          </div>
        </div>
      </Paper>
      <Paper elevation={3}>
        <Typography variant="h6" align="center" sx={{ padding: 2 }}>
          Order History
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: '25%' }}>Image</TableCell>
                <TableCell align="center" style={{ width: '25%' }}>Name</TableCell>
                <TableCell align="center" style={{ width: '25%' }}>Status</TableCell>
                <TableCell align="center" style={{ width: '25%' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistory.map((order) => (
                <TableRow key={order.id}>
                  <TableCell align="center" style={{ width: '25%' }}>
                    <img src={order.image} alt={order.name} style={{ width: 50, height: 50 }} />
                  </TableCell>
                  <TableCell align="center" style={{ width: '25%' }}>{order.name}</TableCell>
                  <TableCell align="center" style={{ width: '25%' }}>{order.status}</TableCell>
                  <TableCell align="center" style={{ width: '25%' }}>
                    {order.status === 'Delivered' ? (
                      <Button variant="contained" color="secondary">
                        Write Review
                      </Button>
                    ) : (
                      <Button variant="contained" color="secondary">
                        Edit Order
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
