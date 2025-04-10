@REM using codespace


curl -X POST https://silver-space-umbrella-7vr5rgxxw767cxw75-5174.app.github.dev/api/todos/ ^
  -H "Content-Type: application/json" ^
  -d "{\"title\": \"Buy groceries\", \"description\": \"Milk, eggs, and bread\", \"priority\": \"medium\", \"dueDate\": \"2025-04-15T00:00:00.000Z\", \"category\": \"todo\"}"


curl -X GET https://silver-space-umbrella-7vr5rgxxw767cxw75-5174.app.github.dev/api/todos/