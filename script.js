function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

async function getData() {
  try {
    const data = await fetchFakeData();

    console.log("Отримані дані:", data);
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}

console.log("Завдання: 1 ==============================");
// Викликаємо нашу асинхронну функцію.
getData();

function getRandomNumberAfterSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

async function logRandomNumberAfterSeconds(seconds) {
  try {
    const randomNumber = await getRandomNumberAfterSeconds(seconds);

    console.log("Отримане випадкове число:", randomNumber);
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}

console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds(3); // Наприклад, чекаємо 3 секунди перед виведенням випадкового числа.

//Завдання 3
async function getDataFromUrl(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Отримані дані:", data);
  } catch (error) {
    console.error("Сталася помилка:", error.message);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
async function postDataWithAuthorization(url, data, authToken) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log("Відповідь сервера:", responseData);
  } catch (error) {
    console.error("Сталася помилка:", error.message);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield i++;
  }
}

const gen = asyncGenerator();

async function printFiveItems() {
  for await (const value of gen) {
    console.log(value);

    if (value === 4) break;
  }
}

printFiveItems();

console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

async function* gatherData() {
  try {
    const dbData = await getDataFromDB();
    yield dbData;

    const apiData = await getDataFromAPI();
    yield apiData;

    const cacheData = await getDataFromCache();
    yield cacheData;
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}

async function displayData() {
  const generator = gatherData();

  console.log(await generator.next());
  console.log(await generator.next());
  console.log(await generator.next());
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7
function* countdownGenerator(start) {
  let count = start;

  while (count >= 0) {
    yield count;

    count--;
  }
}

console.log("Завдання: 7 ==============================");

const countdown = countdownGenerator(5);

const nextValue = countdown.next().value;

while (!countdown.next().done) {
  console.log(nextValue);

  nextValue = countdown.next().value;
}

