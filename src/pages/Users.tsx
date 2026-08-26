//import React  from 'react'; //, { useState, useMemo } from 'react';
import { View, Flex } from '@aws-amplify/ui-react';
// Grid, Card, Flex, Heading, Text, Badge, Button, Image, SearchField, Divider
import '@aws-amplify/ui-react/styles.css'; 
import {  type UsersProps, type User, userGroup1 } from '../data/userData';

//userGroup1,  type UserGroup,

// , onEdit
export default function Users({ users }: UsersProps) {
//: React.FC<UsersProps> = ({ users, onEdit }) => {


const skills: User[] = [userGroup1.player1];
users= skills;

//["TypeScript", "JavaScript", "Node.js"];

  //const [searchQuery, setSearchQuery] = useState<string>('');
  //const [selectedCategory, setSelectedCategory] = useState<string>('All');
  //const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null);

  return (
    <View 
      padding={{ base: '1.5rem', medium: '3rem' }} 
      backgroundColor="var(--amplify-colors-background-secondary)"
      minHeight="100vh"
    >
      <Flex direction="column" gap="2.5rem" maxWidth="1200px" margin="0 auto">
        <Flex direction={{ base: 'column', medium: 'row' }} justifyContent="space-between" alignItems="center" gap="1.5rem">
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
                  </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                      <td>{user.emailAddress}</td>

                      <td><button
                      //onClick={() => onEdit(user.userIdentifiers)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                      }}
                      aria-label={`Edit user ${user.emailAddress}`}
                    >
                      &#x270E;
                    </button></td>
                  </tr>

                  ))}
              </tbody>
          </table>

      </Flex>
    </View>
  );
};
