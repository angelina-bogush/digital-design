const user = {
    baseUrl:'http://45.12.239.156:8081/api',
    login: 'bogush.a',
    password: 'jc63fk',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFmMjFjNzI4Nzk3MmNlODY3NmYxZSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjg3Mjg0MzA0LCJleHAiOjE2ODczNzA3MDR9.nPbzCYBCyP0b6vinFZAV41_6RpI2mIRnXgJievJRTXE',
}
document.getElementById("12").addEventListener('click', createTaskFetch)


const checkAnswer = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

//запрос токена
function token () {
    return fetch('http://45.12.239.156:8081/api/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    login: "bogush.a",
    password: "jc63fk",
  }),
})
.then(checkAnswer)
.catch((err) => {
    console.log(err)
})
}
//Создание проекта
function createProjectFetch(){
return fetch(`${user.baseUrl}/projects`, {
    method: 'POST',
   headers: {
    authorization: `Bearer ${user.token}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Project 1",
    code: "#1",
  }),
})
.then(checkAnswer)
.then(res => console.log(res)) 
.catch((err) => {
    console.log(err)
})}


//изменение проекта
function changeProjectFetch(){
return fetch(`${user.baseUrl}/projects`, {
    method: 'PUT',
   headers: {
    authorization: `Bearer ${user.token}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Project 1 changed",
    code: "#1",
     _id: '6491f115da30960a23d88e52'
  }),
})
.then(checkAnswer)
.then(res => console.log(res)) 
.catch((err) => {
    console.log(err)
})}

//получение проекта
function searchProjectFetch(){
    return fetch(`${user.baseUrl}/projects/search`, {
        method: 'POST',
       headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
    })
    .then(checkAnswer)
    .then(res => console.log(res)) 
    .catch((err) => {
        console.log(err)
    })}

//удаление проекта
function deleteProjectFetch(){
    return fetch(`${user.baseUrl}/projects/6491f8f0da30960a23d89018`, {
        method: 'DELETE',
       headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
    })
    .then(checkAnswer)
    .then(res => console.log(res)) 
    .catch((err) => {
        console.log(err)
    })}
    // deleteProjectFetch()

//создание задачи
function createTaskFetch(){
    return fetch(`${user.baseUrl}/tasks`, {
        method: 'POST',
       headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Task 1",
        description: 'create task',
        projectId: "6491f3e1da30960a23d88e94",
      }),
    })
    .then(checkAnswer)
    .then(res => console.log(res)) 
    .catch((err) => {
        console.log(err)
    })}

    //изменение задачи
    function changeTaskFetch(){
        return fetch(`${user.baseUrl}/tasks`, {
            method: 'PUT',
           headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: "Task 1 changed",
            description: "create task and send homework",
             _id: '6491f44ada30960a23d88ecb'
          }),
        })
        .then(checkAnswer)
        .then(res => console.log(res)) 
        .catch((err) => {
            console.log(err)
        })}
        
function searchTaskFetch(){
    return fetch(`${user.baseUrl}/tasks/search`, {
       method: 'POST',
       headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
    })
    .then(checkAnswer)
    .then(res => console.log(res)) 
    .catch((err) => {
        console.log(err)
    })}
function deleteTaskFetch(){
        return fetch(`${user.baseUrl}/tasks/6492078ada30960a23d890ee`, {
            method: 'DELETE',
           headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json"
          },
        })
        .then(checkAnswer)
        .then(res => console.log(res)) 
        .catch((err) => {
            console.log(err)
        })}

        // createProjectFetch()
        // changeProjectFetch()
        // searchProjectFetch()
         // deleteProjectFetch()
        
        // createTaskFetch()
        // changeTaskFetch()
        // searchTaskFetch()
        // deleteTaskFetch()
    