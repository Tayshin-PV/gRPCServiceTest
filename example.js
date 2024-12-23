// Пример JavaScript-кода для вызова gRPC-метода:

```javascript
import { grpc } from 'grpc-web';

// Создание клиента
const client = new YourService.YourServiceClient('http://localhost:50051');

// Создание запроса
const request = new YourRequest();

// Вызов метода
client.yourMethod(request, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});

// Примечание: В этом примере YourService - это имя сервиса, YourServiceClient - это клиент сервиса, YourRequest - это запрос, yourMethod - это метод сервиса. Вы должны заменить их на фактические имена из вашего файла .proto.
