const user = {
  baseUrl: "http://45.12.239.156:8081/api",
  login: "bogush.a",
  password: "jc63fk",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFmMjFjNzI4Nzk3MmNlODY3NmYxZSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjg3NDQ2Njg4LCJleHAiOjE2ODc1MzMwODh9.4cL2Nm4eAd1OhCo9JeZVMACFEMU3BJPpdrUtLQChAK4",
};

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

//запрос токена
function token() {
  return fetch("http://45.12.239.156:8081/api/login", {
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
let taskId;
let id;
//Создание проекта
function createProjectFetch() {
  return fetch(`${user.baseUrl}/projects`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Project 1",
      code: "#1",
    }),
  })
    .then(checkAnswer)
    .then((res) => {
      console.log(res);
     id = res._id;
      localStorage.setItem('id', id)
    })
    .catch((err) => {
      console.log(err);
    });
}


//изменение проекта
function changeProjectFetch() {
  return fetch(`${user.baseUrl}/projects`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Project 1 changed",
      code: "#1",
      _id: localStorage.getItem('id')
    }),
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

//получение проекта
function searchProjectFetch() {
  return fetch(`${user.baseUrl}/projects/search`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

//удаление проекта
function deleteProjectFetch() {
  return fetch(`${user.baseUrl}/projects/${localStorage.getItem('id')}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}


//создание задачи
function createTaskFetch() {
  return fetch(`${user.baseUrl}/tasks`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Task 1",
      description: "create task",
      projectId: localStorage.getItem('id'),
    }),
  })
    .then(checkAnswer)
    .then((res) => {
      let taskId = res._id;
      localStorage.setItem('taskId', taskId)
      console.log(res)})
    .catch((err) => {
      console.log(err);
    });
}

//изменение задачи
function changeTaskFetch() {
  return fetch(`${user.baseUrl}/tasks`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Task 1 changed",
      description: "create task and send homework",
      _id: localStorage.getItem('taskId')
    }),
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

function searchTaskFetch() {
  return fetch(`${user.baseUrl}/tasks/search`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}
function deleteTaskFetch() {
  return fetch(`${user.baseUrl}/tasks/${localStorage.getItem('taskId')}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  })
    .then(checkAnswer)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

//создание проекта xhr
function createProjectXml() {
  const xhr = new XMLHttpRequest();
  const data = {
    name: "Project 1",
    code: "#1",
  };
  xhr.open("POST", `${user.baseUrl}/projects`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
       id = xhr.response._id;
      localStorage.setItem('id', id)
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send(JSON.stringify(data));
}

function changeProjectXml() {
  const xhr = new XMLHttpRequest();
  const data = {
    name: "Project 1 changed!!!",
    code: "#1",
    _id: `${localStorage.getItem('id')}`,
  };
  xhr.open("PUT", `${user.baseUrl}/projects`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send(JSON.stringify(data));
}
function searchProjectXml() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${user.baseUrl}/projects/search`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send();
}

function deleteProjectXml() {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${user.baseUrl}/projects/${localStorage.getItem('id')}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send();
}

function createTaskXml() {
  const xhr = new XMLHttpRequest();
  const data = {
    name: "Task 1",
    description: "create task",
    projectId: localStorage.getItem('id'),
  };
  xhr.open("POST", `${user.baseUrl}/tasks`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
     taskId = xhr.response._id;
     localStorage.setItem('taskId', taskId)
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send(JSON.stringify(data));
}

function changeTaskXml() {
  const xhr = new XMLHttpRequest();
  const data = {
    name: "Task 1 changed!!!",
    description: "#1",
    _id: `${localStorage.getItem('taskId')}`,
  };
  xhr.open("PUT", `${user.baseUrl}/tasks`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send(JSON.stringify(data));
}

function searchTaskXml() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${user.baseUrl}/projects/search`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send();
}

function deleteTaskXml() {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${user.baseUrl}/tasks/${localStorage.getItem('taskId')}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("authorization", `Bearer ${user.token}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send();
}

function createProjectAxios() {
  axios
    .post(
      `${user.baseUrl}/projects`,
      { name: "Project 1", code: "#1" },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      id = res.data._id;
      localStorage.setItem('id', id)
    })
    .catch((err) => {
      console.log(err);
    });
}
function changeProjectAxios() {
  axios
    .put(
      `${user.baseUrl}/projects`,
      { name: "Project 2", description: "#2", _id: `${localStorage.getItem('id')}` },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function searchProjectAxios() {
  axios
    .post(
      `${user.baseUrl}/projects/search`,
      { name: "Project 2", Code: "#1", _id: `${localStorage.getItem('id')}` },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteProjectAxios() {
  axios
    .delete(`${user.baseUrl}/projects/${localStorage.getItem('id')}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createTaskAxios() {
  axios
    .post(
      `${user.baseUrl}/tasks`,
      { name: "Task 1", description: "#1", projectId: `${localStorage.getItem('id')}` },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      taskId = res.data._id;
      localStorage.setItem('taskId', taskId)
    })
    .catch((err) => {
      console.log(err);
    });
}
function changeTaskAxios() {
  axios
    .put(
      `${user.baseUrl}/tasks`,
      { name: "Task 1111111", description: "#1", _id: `${localStorage.getItem('taskId')}` },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function searchTaskAxios() {
  axios
    .post(
      `${user.baseUrl}/tasks/search`,
      { name: "Task 1111111", code: "#1", _id: `${localStorage.getItem('taskId')}` },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function deleteTaskAxios() {
  axios
    .delete(`${user.baseUrl}/tasks/${localStorage.getItem('taskId')}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("2").addEventListener("click", createProjectFetch);
document.getElementById("5").addEventListener("click", searchProjectFetch);
document.getElementById("4").addEventListener("click", searchProjectXml);
document.getElementById("8").addEventListener("click", changeProjectFetch);
document.getElementById("14").addEventListener("click", createTaskFetch);
document.getElementById("17").addEventListener("click", searchTaskFetch);
document.getElementById("20").addEventListener("click", changeTaskFetch);
document.getElementById("23").addEventListener("click", deleteTaskFetch);
document.getElementById("1").addEventListener("click", createProjectXml);
document.getElementById("7").addEventListener("click", changeProjectXml);
document.getElementById("16").addEventListener("click", searchTaskXml);
document.getElementById("10").addEventListener("click", deleteProjectXml);
document.getElementById("13").addEventListener("click", createTaskXml);
document.getElementById("19").addEventListener("click", changeTaskXml);
document.getElementById("22").addEventListener("click", deleteTaskXml);

document.getElementById("3").addEventListener("click", createProjectAxios);
document.getElementById("9").addEventListener("click", changeProjectAxios);
document.getElementById("6").addEventListener("click", searchProjectAxios);
document.getElementById("12").addEventListener("click", deleteProjectAxios);
document.getElementById("15").addEventListener("click", createTaskAxios);
document.getElementById("21").addEventListener("click", changeTaskAxios);
document.getElementById("18").addEventListener("click", searchTaskAxios);
document.getElementById("24").addEventListener("click", deleteTaskAxios);
document.getElementById("11").addEventListener("click", deleteProjectFetch);
