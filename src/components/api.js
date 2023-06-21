const user = {
    baseUrl:'http://45.12.239.156:8081/api',
    login: 'bogush.a',
    password: 'jc63fk',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFmMjFjNzI4Nzk3MmNlODY3NmYxZSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjg3MzcxMzQzLCJleHAiOjE2ODc0NTc3NDN9.MciPORY6NhVTOdF5SHsZVz4Py-gR244dL0uAe5jZBeA',
}

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
.then((res) => {
  console.log(res)})
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
.then((res) => {
  console.log(res)
console.log(res._id)}) 
.catch((err) => {
    console.log(err)
})}
createProjectFetch()

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
        return fetch(`${user.baseUrl}/tasks/64930c2615cd6d1fa8ff5c86`, {
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

        //создание проекта xhr
    function createProjectXml(){
        const xhr = new XMLHttpRequest();
        const data = {
            name: "Project 1",
            code: "#1"
        }
        xhr.open('POST', `${user.baseUrl}/projects`);
        xhr.responseType = 'json';
        xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onload = () => {
            if(xhr.status>=400){
                console.error(xhr.response)
            } else {
                console.log(xhr.response)
            }
        }
        xhr.onerror = () => {
            console.log(xhr.response)
        }
        xhr.send(JSON.stringify(data))
    }

    function changeProjectXml(){
        const xhr = new XMLHttpRequest();
        const id ='6493414015cd6d1fa8ff6565'
        const data = {
            name: "Project 1 changed!!!",
            code: "#1",
            _id: `${id}`
        }
        xhr.open('PUT', `${user.baseUrl}/projects`);
        xhr.responseType = 'json';
        xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onload = () => {
            if(xhr.status>=400){
                console.error(xhr.response)
            } else {
                console.log(xhr.response)
            }
        }
        xhr.onerror = () => {
            console.log(xhr.response)
        }
        xhr.send(JSON.stringify(data))
    }
    function searchProjectXml(){
      const xhr = new XMLHttpRequest();
      const id ='6493414015cd6d1fa8ff6565'
      const data = {
          name: "Project 1 changed!!!",
          code: "#1",
          _id: `${id}`
      }
      xhr.open('POST', `${user.baseUrl}/projects/search`);
      xhr.responseType = 'json';
      xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onload = () => {
          if(xhr.status>=400){
              console.error(xhr.response)
          } else {
              console.log(xhr.response)
          }
      }
      xhr.onerror = () => {
          console.log(xhr.response)
      }
      xhr.send(JSON.stringify(data))
  }

  function deleteProjectXml(){
    const xhr = new XMLHttpRequest();
    const id ='6493414015cd6d1fa8ff6565'
    const data = {
        name: "Project 1 changed!!!",
        code: "#1",
        _id: `${id}`
    }
    xhr.open('DELETE', `${user.baseUrl}/projects/${id}`);
    xhr.responseType = 'json';
    xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = () => {
        if(xhr.status>=400){
            console.error(xhr.response)
        } else {
            console.log(xhr.response)
        }
    }
    xhr.onerror = () => {
        console.log(xhr.response)
    }
    xhr.send()
}

function createTaskXml(){
  const xhr = new XMLHttpRequest();
  const data = {
    name: "Task 1",
    description: 'create task',
    projectId: '6493414015cd6d1fa8ff6565'
  }
  xhr.open('POST', `${user.baseUrl}/tasks`);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.onload = () => {
      if(xhr.status>=400){
          console.error(xhr.response)
      } else {
          console.log(xhr.response)
      }
  }
  xhr.onerror = () => {
      console.log(xhr.response)
  }
  xhr.send(JSON.stringify(data))
}


function changeTaskXml(){
  const xhr = new XMLHttpRequest();
  const id ='6491f44ada30960a23d88ecb'
  const data = {
      name: "Task 1 changed!!!",
      description: "#1",
      _id: `${id}`
  }
  xhr.open('PUT', `${user.baseUrl}/tasks`);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.onload = () => {
      if(xhr.status>=400){
          console.error(xhr.response)
      } else {
          console.log(xhr.response)
      }
  }
  xhr.onerror = () => {
      console.log(xhr.response)
  }
  xhr.send(JSON.stringify(data))
}

function searchTaskXml(){
const xhr = new XMLHttpRequest();
const id ='6493414015cd6d1fa8ff6565'
const data = {
    name: "Project 1 changed!!!",
    code: "#1",
    _id: `${id}`
}
xhr.open('POST', `${user.baseUrl}/projects/search`);
xhr.responseType = 'json';
xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
xhr.setRequestHeader("Content-Type", "application/json")
xhr.onload = () => {
    if(xhr.status>=400){
        console.error(xhr.response)
    } else {
        console.log(xhr.response)
    }
}
xhr.onerror = () => {
    console.log(xhr.response)
}
xhr.send(JSON.stringify(data))
}

function deleteTaskXml(){
const xhr = new XMLHttpRequest();
const id ='6493414015cd6d1fa8ff6565'
xhr.open('DELETE', `${user.baseUrl}/projects/${id}`);
xhr.responseType = 'json';
xhr.setRequestHeader('authorization', `Bearer ${user.token}`);
xhr.setRequestHeader("Content-Type", "application/json")
xhr.onload = () => {
  if(xhr.status>=400){
      console.error(xhr.response)
  } else {
      console.log(xhr.response)
  }
}
xhr.onerror = () => {
  console.log(xhr.response)
}
xhr.send()
}
document.getElementById("2").addEventListener('click', createProjectFetch)
        document.getElementById("14").addEventListener('click', createTaskFetch)
        document.getElementById("17").addEventListener('click', searchTaskFetch)
        document.getElementById("20").addEventListener('click', changeTaskFetch)
        document.getElementById("23").addEventListener('click', deleteTaskFetch)
        document.getElementById("1").addEventListener('click', createProjectXml)
        document.getElementById("7").addEventListener('click', () => {
            changeProjectXml(createProjectXml)})
        
         document.getElementById("10").addEventListener('click', deleteProjectXml)
         document.getElementById("13").addEventListener('click', createTaskXml)
         document.getElementById("19").addEventListener('click', changeTaskXml)
         document.getElementById("22").addEventListener('click', deleteTaskXml)