# Тестовый проект - авторизации

<h3>Проект реализован с клиендской стороны при помощи React(Redux),
а с серверной при помощи запросы с моковыми данными.
https://github.com/typicode/json-server
</h3>
<h6>Для имитации работы базы данных на клиенте была создана утилита которая позволяет сделать фейк
 фильтрацию таблицы пользователей базы данных</h6>

```javascript
// client/src/utils/userVerify.js
export const userVerify = (users, data) => {
  const username = data.username
  const password = data.password
  const foundUser = users.filter(item => Object.keys(item).some(k => item[k].toString() === username))[0]
  if(!foundUser) {
    return {
      access: false,
      status: 401,
      message: 'User does not exist'
    }
  }
  if(foundUser.password !== password) {
    return {
      access: false,
      status: 401,
      message: 'incorrect password - access denied'
    }
  }
  return {
    access: true,
    status: 200,
    user: foundUser
  }
}
```
<p>
Которая имулирует работу сервера и
 обработку ошибок с серверной стороны.
</p>

<p>
В рамках проекта был использован Redux
 для хранения и обработки данных, 
 а также на нем завязана авторизация, 
 при данных реалиях сервера 
 не удалось завязать авторизацию по 
 (jwt)
</p>
<p>Для запросов к API был с использован fetch API.</p>

<h2>Для запуска проекта:</h2>
<p>1) перейдите в папку с сервером (/server) и выполните команду <strong>yarn start</strong></p>
<p>2) перейдите в папку с клинктом (/client) и выполните команду <strong>yarn start</strong></p>

