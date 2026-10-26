try {
  // Код, который может вызвать ошибку
  let user = JSON.parse("{некорректный json}"); // Ошибка!
  console.log("Этот код не выполнится");
} catch (error) {
  // Код обработки ошибки
  console.error("Произошла ошибка: " + error.message);
}

console.log("Скрипт продолжает работу...");
