# TakeMeTour's Job Quest 2020 Edition

Thank you for your interest in working at TakeMeTour. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to benz@takemetour.com (Subject: JavaScript Engineer Application). Or you can simply reply an email that we've send you job quest link.

This quest has 3 parts
- **Basic JavaScript/TypeScript + Algorithm** (Any job position **must** do this part)
- **Front-end** (Only **Front-end** or **Full-stack** position **must** do this part)
- **Back-end** (Only **Back-end** or **Full-stack** position **must** do this part)

**Note:** Some answers can be answer in Thai language.

## Basic JavaScript/TypeScript + Algorithm

We would like to test your basic knowledge on writing JavaScript or TypeScript, plus we also want to test your algorithm skill a little bit.

What you need to do is write the code that solve each question and put it in folder `basic-js-ts`. We will run your code with **Node.js 12**, so check your fancy feature before using it!

**Noted that all questions on this part need to be implemented without using any external library like `lodash`**

1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

**Example**

```javascript
> fib(1)
1

> fib(3)
2

> fib(12)
144

> if fib(1) =(n-1) + fib(n-2)

> fib(3) =(n-1) + fib(n-2)

> fib(12)=(n-1) + fib(n-2)
return fib;
```

2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.

The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

**Example**

```javascript

> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
    
  function shift(){
    let n = []
      if(n ==='left'){
      }
      else if(n ==='right'){
      }
      else{
        return n
      }
      for (let i = 0; i < n; i++) {
      }
        return n;
}
    
```

3. **Second max**: Write a function `secondMax` that receive an array of number. The function will return the second maximum value of the array. If there is no second max, return max instead. If an array is empty, throw and error.

**Example**

```javascript
> secondMax([2, 3, 4, 5])
4

> secondMax([9, 2, 21, 21])
9

> secondMax([4, 4, 4, 4])
4

> secondMax([4123])
4123

> secondMax([])
Error!

for (int i = 0; i < array.length; i++) 
    {
        if (array[i] > hight2) 
        {
            hight2 = array[i];
        } 
        else if (array[i] > second)
            {
            second = array[i];
            }
        else 
    }
    echo(" hight2 "+second );
```

4. **FizzBuzz...But**: You may heard `FizzBuzz` task. Here we have the same rule. You will write a function `fizzBuzz` that receive a single parameter it will return the value base on these rule.

- If the input is divisable by 3, return 'Fizz'
- If the input is divisable by 5, return 'Buzz'
- If the input is divisable by both 3 and 5, return 'FizzBuzz'

**BUT we're not allow you to use `if/else` statement.** If there is any `if` or `else` word in your code. I will consider this question with 0 score :(


**Example**

```javascript
> fizzBuzz(21)
Fizz

> fizzBuzz(25)
Buzz

> fizzBuzz(45)
FizzBuzz

fizzBuzz= 21,25,45;
switch(fizzBuzz) {
  case 0
   (fizzBuzz%3 ===0)
  > echo ("fizz");
    break;
  case 1
   (fizzBuzz%5 ===0)
  > echo ("Buzz");
    break;
  default:
     (fizzBuzz%3 ===0 && fizzBuzz%5 ===0)
  > echo ("fizzBuzz");
}

```

## Front-End

You are going to make a web application written with **React** which allow users to get some joke from **Chuck Norris**. His joke look like this.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Using React to build the apps. (Create React Apps / Pure Webpack setup / Next.js is fine to me)
- We allows you to use any CSS framework. (Or you don't want to use that, also OK to me)

### Bonus
- You can surprise me with any extra features from my requirement. Use your imagination!

### Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

3. Breifly describe how *Virtual DOM* works.

4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?

5. What different between using `relative` / `absolute` / `fixed` to position the element.

6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

## Back-End

You are going to made a simple **Thai's joke API**. And this API is follow to REST API pattern.

Thai's joke API can allow user to explore, add, delete, like or dislike Thai's joke.

### Endpoints
- `GET /` Get all jokes.
- `POST /` Add new joke.
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (In case you hate it)
- `POST /:id/like` Like a joke. (Because we don't have authentication system yet. Like spaming is fine here.)
- `POST /:id/dislike` Dislike a joke. (Same as above. Dislike spaming is fine here.)

### Technical description
- All data must store to the database. Any database is fine. But we prefer **MongoDB**.
- Back-end code must written in Node.js. Any library or helper tools is up to you (Express / Koa / Nest.js you name it).

### Bonus
- If you implemented simple authentication with username and password, and also allow logged-in user to create or delete the joke. You will get a bonus for this task.

### Back-end Questions

1. Explain First-party cookie & Third-party cookie

2. Explain CAP Theorem.

3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.

4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.

5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

6. Explain how HTTP protocol works.
