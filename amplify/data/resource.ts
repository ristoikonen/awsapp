import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Funk: a
    .model({
      ID: a.id() ,  
      name: a.float(),
      rate: a.float(),
      per: a.float(),
      nper: a.float(),
      pmt: a.float(),
      fv: a.float(),  
      pv: a.float(),  
      guess: a.float(),  
      isDueEnd: a.boolean(),  
      createdAt: a.timestamp().default(), 
      updatedAt: a.timestamp().default(), 
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',  // Using apiKey for simplicity
    apiKeyAuthorizationMode: {
      expiresInDays: 365  // Long expiration to avoid frequent key rotation
    }
  },
});


/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

