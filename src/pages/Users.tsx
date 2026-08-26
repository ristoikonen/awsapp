//import React  from 'react'; //, { useState, useMemo } from 'react';
import { View, Flex } from '@aws-amplify/ui-react';
// Grid, Card, Flex, Heading, Text, Badge, Button, Image, SearchField, Divider
import '@aws-amplify/ui-react/styles.css'; 
import '.././style/table.css'; 
import {  type UsersProps, type User, userGroup1 } from '../data/userData';


// , onEdit
export default function Users({ users, onEdit }: UsersProps) {

const skills: User[] = [userGroup1.player1,userGroup1.player2,userGroup1.player3];
users = skills;


  return (
    <View 
      padding={{ base: '1.5rem', medium: '3rem' }} 
      backgroundColor="var(--amplify-colors-background-secondary)"
      minHeight="100vh"
    >
      <Flex direction="column" gap="2.5rem" maxWidth="1200px" margin="0 auto">
        <Flex direction={{ base: 'column', medium: 'row' }} justifyContent="space-between" alignItems="left" gap="1.5rem">
        </Flex>

          <h2>Google Subscriptions Data</h2>
          <table>
              <thead>
                  <tr>
                      <th>User ID</th>
                      <th>Email Address</th>
                      <th>Phone Number</th>
                      <th>Address </th>
                      <th>Timestamp</th>
                      <th>Mobile IDs</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.mobileId}</td>
                    <td>{user.emailAddress}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.address.addressLine}</td>
                    <td>{user.timeStamp}</td>
                    <td>{user.mobileId}</td>
                    

                      <td><button
                      onClick={() => onEdit(user.userIdentifiers)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}
                      aria-label={`Edit user ${user.emailAddress}`}
                    >
                      &#x270E; Edit
                    </button></td>
                  </tr>

                  ))}
              </tbody>
          </table>

      </Flex>
    </View>
  );
};
