import { Component } from 'react';
const API = 'http://45.32.104.55:3003/users';

export default function fetchUsers() {
        let url = API;      
        // return the promise itself
        return fetch(url).then( (res) => res.json() );
      }

// export default UserService;