


let url = "http://localhost:3000";

export const getBooks = () => dispatch => {
  fetch(`${url}/api/books`)
    .then(response => response.json())
    .then(data =>
    dispatch({
    type: "GET_BOOKS",
    payload: data
  })
  )
}

export const getBookWithReviewer = (id) => dispatch => {
  fetch(`${url}/api/getReviewer/${id}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  
  })
  .then(response => response.json())
  .then(response => 
    dispatch({
          type: "GET_BOOK_W_REVIEWER",
          payload: response
        })
  )
}

export function clearBookWithReviewer() {
  return {
    type: "CLEAR_BOOK_W_REVIEWER",
    payload: {
      book: {},
      reviewer: {},
    },
  };
}

export const addBook = book => dispatch => {
  fetch(`${url}/api/book`,{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(response => response.json())
    .then(request =>

  dispatch({
    type: "ADD_BOOK",
    payload: request,
  })
)
}

export function clearNewBook() {
  return {
    type: "CLEAR_NEWBOOK",
    payload: {},
  };
}

export const getUserPosts = (userId) => dispatch => {
  fetch(`${url}/api/user_posts/${userId}`)
    .then(response => response.json())
    .then(request =>

  dispatch({
    type: 'GET_USER_POSTS',
    payload:request
  })
    )
}

export const getBook = (id) => dispatch => {
  fetch(`${url}/api/getBook?id=${id}`)
                .then(response => response.json())
                .then(request =>

        dispatch({
          type:'GET_BOOK',
          payload:request
        })
   )
}

export const updateBook = data => dispatch => {
  fetch('http://localhost:3000/api/book_update', {
    method:'PUT',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(request =>

    dispatch({
        type:'UPDATE_BOOK',
        payload:request
      })
    )
}

export const deleteBook = (id)=> dispatch =>{
  fetch(`${url}/api/delete_book?id=${id}`,{
    method: 'DELETE'
  })
  .then(response => response.data)
  .then(request =>

        dispatch({
          type: 'DELETE_BOOK',
          payload:request
        })
  )
}

export function clearBook(){
  return {
    type:'CLEAR_BOOK',
    payload:{
      book:null,
      updateBook:false,
      postDeleted:false
    }
  }
}

// ==========USER==========

export const loginUser = ({email, password}) => dispatch => {
  fetch(`${url}/api/login`,{
    method: 'POST',
    header: {
      'content-type' : 'application-type'
    },
    body: JSON.stringify({
      email: email,
      password: password

    })
  })
    .then((response) => response.json())
    .then(request =>

  dispatch({
    type: "USER_LOGIN",
    payload: request,
  })
    )
}

export const auth = () => dispatch => {
  let h = new Headers();
  h.append('Accept', 'application/json');
  let encoded = window.btoa('tony@gmail.com:password123');
  let auth ='Basic' + encoded;
  h.append('Authorization',auth);

  let req = new Request(`${url}/api/auth`,{
    method: 'GET',
    header: h,
    credentials: 'include'
  })

  fetch(req)
    .then(response => response.json())
    .then(request =>

  dispatch({
    type: "USER_AUTH",
    payload: request,
  })
    )
}

export const getUsers = () => dispatch => {
      fetch(`${url}/api/users`)
        .then(response => response.data)
        .then(request =>

        dispatch({
          type:'GET_USER',
          payload:request
        })
        )
}

export const userRegister = (user,userList) => dispatch => {
  fetch(`${url}/api/register`,{
    method: 'POST',
    header:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user, userList)
  })

  .then(response => response.json())
  .then(response =>

      
      dispatch({
        type:'USER_REGISTER',
        payload:response
      })
  )
}



