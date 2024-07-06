import React, { useState, useEffect } from 'react';
import {
  Container, Paper, Avatar, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { useUser } from '../Provider/UserProvider';
import { useNavigate } from 'react-router-dom';

export default function UserDashBoard() {
  const { isUserLoggedIn, userDetails, setUserDetails } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, image: '', name: 'Product 1', status: 'Delivered' },
    { id: 2, image: '', name: 'Product 2', status: 'Pending' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/Login');
    }
  }, [isUserLoggedIn, navigate]);

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

  return isUserLoggedIn ? (
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
                  value={userDetails.firstName}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone"
                  name="phone"
                  value={userDetails.phoneNumber}
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
                <Typography>Name: {userDetails.firstName}</Typography>
                <Typography>Email: {userDetails.email}</Typography>
                <Typography>Phone: {userDetails.phoneNumber}</Typography>
                <Typography>Address: {userDetails.address}</Typography>
              </>
            )}
            <div style={{ marginTop: 16 }}>
              <button className="cr-button" onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit Details'}
              </button>
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
                      <button className="cr-button" style={{ width: '100%', maxWidth: '160px' }}>
                        Write Review
                      </button>
                    ) : (
                      <button className="cr-button" style={{ width: '100%', maxWidth: '160px' }}>
                        Edit Order
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  ) : null;
}