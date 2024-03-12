### ENDPOINTS

# {POST} - REGISTER
localhost:4000/api/auth/login
``` json
{
  "email": "sample@sample.com",
  "password": "12345678"
}
```

# {POST} - LOGIN
localhost:4000/api/auth/login
``` json
{
  "email": "user@user.com",
  "password": "12345678"
}
```

# {GET} - PROFILE 
localhost:4000/api/users/profile

# {GET} - BOOKS 
localhost:4000/api/books

# {GET} - BOOK by Id 
localhost:4000/api/books/:id

# {PUT} - books (super_admin)
localhost:4000/api/users/add-book-to-favourite
``` json
{
  "bookId": "65ef490466d4a6addf9a02dc"
}
```

# {DELETE} - books (super_admin)
localhost:4000/api/books/:id

# {GET} - USERS (super_admin)
localhost:4000/api/users

