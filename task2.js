// Напишите функцию createCounter, которая создает счётчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта, а не
// напрямую.

const createCounter = () => {
    let count = 0;
    return  {
    increment () {
                ++count;
                console.log('прибавился');
                console.log(count);
                
        },
    decrement () {
            console.log('убавился');
            --count;
            console.log(count);
    }
};
};

const demoCounter = createCounter();

demoCounter.decrement();
demoCounter.decrement();
demoCounter.increment();

