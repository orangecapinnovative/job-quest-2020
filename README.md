# Orange Cap Innovative's Job Quest 2021 Edition

Thank you for your interest in working at Orange Cap Innovative. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to benz@orangecapinnovative.com. Or you can simply reply an email that we've send you job quest link.

This quest has 3 parts
- **Part A: Basic JavaScript/TypeScript + Algorithm** (Any job position **must** do this part)
- **Part B: Front-end (Coding + Architecture Design)** (Only **Front-end** or **Full-stack** position **must** do this part)
- **Part C: Back-end (Coding + Architecture Design)** (Only **Back-end** or **Full-stack** position **must** do this part)

**Note:** Some answers can be answer in Thai language.

## Part A: Basic JavaScript/TypeScript + Algorithm

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
```

2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.

The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

**Example**

```javascript
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
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
```

## Part B: Front-End

### Part B1: Coding Task
You are going to make a web application written with **React** which allow users to get some joke from **Chuck Norris**. His joke look like this.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

#### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

#### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Using React to build the apps. (Create React Apps / Pure Webpack setup / Next.js is fine to me)
- We allows you to use any CSS framework. (Or you don't want to use that, also OK to me)

#### Bonus
- You can surprise me with any extra features from my requirement. Use your imagination!

### Part B2: Architecture Design Task

[Thai Version]

เนื่องจาก CTO ของ Orange Cap Innovative ชอบวิ่งมาก (แบบมากๆ) ทีมเราเลยตัดสินใจจัดงานแข่งวิ่ง Marathon ในชื่อ "Orange Cap Marathon 2021" งานของคุณคือต้องออกแบบ Architecture สำหรับเว็บไซต์ในส่วนของ Front-end ที่พัฒนาด้วย React โดยระบบที่ได้รับมอบหมายจะเป็นในส่วนของการลงทะเบียนนักวิ่งที่จะเข้ามาสมัครวิ่งในงาน

**Requirements และรายละเอียดของระบบ**
- งานวิ่งนี้มีแค่ระยะเดียวเท่านั้น
- การสมัครงานวิ่งนี้สมัครได้แค่ทีละคน ไม่มีการสมัครเป็นกลุ่มหลายคนให้
- ระบบต้องสามารถจัดเก็บข้อมูลทั้งหมดเหล่านี้ได้ครบถ้วนดังต่อไปนี้
  - ข้อมูลส่วนตัว
    - คำนำหน้าชื่อ
    - ชื่อ (ภาษาไทย และอังกฤษ)
    - นามสกุล (ภาษาไทย และอังกฤษ)
    - วันเดือนปีเกิด
    - อีเมล
    - เลขบัตรประจำตัวประชาชน
    - ที่อยู่
    - เบอร์โทรศัพท์
    - รูปถ่ายหน้าตรง
      - ความละเอียดขั้นต่ำ 300x300 pixel บังคับเป็น Square Resolution
    - ชื่อบนเบอร์วิ่ง (BIB)
      - กำหนดให้กรอกได้สูงสุด 10 ตัวอักษร ภาษาอังกฤษตัวพิมพ์ใหญ่ และตัวเลขเท่านั้น
  - ข้อมูลเกี่ยวกับการวิ่ง
    - เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon มาก่อนหรือไม่
    - เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)
  - ผู้ติดต่อฉุกเฉิน
    - ผู้ติดต่อฉุกเฉินคนที่ 1
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
    - ผู้ติดต่อฉุกเฉินคนที่ 2
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
  - ข้อมูลทางการแพทย์
    - หมู่เลือด
      - A / B / O / AB
    - ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีโรคประจำตัว หรือไม่ 
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่
      - หากตอบว่ามี ให้ระบุตำแหน่งและปีที่รับการผ่าตัด
    - ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่
    - ท่านมียาที่ต้องทานเป็นประจำหรือไม่
      - หากตอบว่ามี ให้ระบุ
    - ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่
    - ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)
    - ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่?
  - เสื้อของที่ระลึก
    - ไซส์เสื้อ
      - XS / S / M / L / XL / XXL / XXXL
- ต้องมีการแบ่งฟอร์มเป็น Step ตามหัวข้อ เนื่องจากฟอร์มใหญ่มาก User ไม่สามารถกรอกครบตามกำหนดได้ในครั้งแรก
- ระบบต้องสามารถทำการ Save Draft บันทึกไว้ในระบบหลังบ้านได้ผ่าน API
- การ Save Draft ไม่จำเป็นต้องกรอกครบทุกช่องให้ครบถึงจะ Save Draft ได้
- การกดเพื่อไปขั้นตอนต่อไป จะต้องมีการ Validate Form ให้ครบถ้วนเสมอ
- ในหน้าสุดท้าย จะมีขั้นตอนของการตรวจสอบข้อมูล ก่อนส่งใบสมัคร โดยต้องมีการแสดงข้อมูลทั้งหมดที่กรอกมา เพื่อตรวจสอบว่ามีข้อมูลอะไรผิดพลาดหรือไม่ และสามารถกดแก้ไขเพื่อกลับไปแก้ไขได้
- Assume ได้ว่าระบบนี้มี API หลังบ้านเรียบร้อยแล้วสำหรับทุก Action ที่ต้องส่งข้อมูลไปหาหลังบ้าน ไม่ต้อง Implement เอง

**สิ่งที่ต้องส่งมาเป็นคำตอบ**
- Folder Structure ที่จะใช้ในการจัดวาง
- Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
- จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้
- จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit
- สามารถตอบเป็นภาษาไทยได้

[English Version]

We need you to help our CTO of Orange Cap who is super passionate about running and  we are going to organise the event under "Orange Cap Marathon 2021." Of course! If you saw this message, you are chosen! Your mission is to design an architecture for Front-end web apps by React on the registration page for our applicants. 

**Requirements and Details :**

- You can set ONLY 1 running distance
- The applicant can apply ONLY one person/time. (Grouping registration is not required)
- For the application form, all details must be included as following :
  - Personal Information
    - Title of name 
    - First name (TH-EN)
    - Last name (TH-EN)
    - Birthdate
    - Email 
    - ID card no. 
    - Address
    - Contact 
    - Recent photo (Straight face)
      - Minimum 300x300 pixel with Square resolution
    - Name of registered applicant on BIB 
      - Length of name: maximum 10 characters (use ONLY Capital letter and number)
  - Applicant background
    - Have you previously run a Mini Marathon/ Half Marathon / Full Marathon?
    - What time do you expect to complete your goal in this event? (Hour/Minute)
  - Emergency contact 
    - Contact 1 
      - Name - Surname 
      - Relationship
      - Telephone number
    - Contact 2 
      - Name - Surname 
      - Relationship
      - Telephone number
  - Medical information 
    - Blood type 
      - A / B / O / AB
    - Do you have a medical allergy? 
      - If yes, please fill out the detail
    - Do you have any chronic health? 
      - If yes, please fill out the detail
    - Have you had surgery before?  
      - If yes, please fill out the detail
    - Do you have any plan for having a baby or are you pregnant before joining this event?
      - If yes, please fill out the detail
    - Do you have any personal medicine to take? 
      - If yes, please fill out the detail
    - Have you ever gotten injured from a Marathon event? 
      - If yes, please fill out the detail
    - Do you often exercise? (at least 2-3 times / week)
    - Have you ever felt chest tightness or easily tired during working out?
      - If yes, please fill out the detail
  - Souvenir 
    - T-shirt 
      - Size XS / S / M / L / XL / XXL / XXXL
- The register form is divided by the following topics. It is a large form. Don’t forget that the applicant cannot complete the form at one time. 
- The system must be able to save drafts in Back-end via API.
- To save draft is not necessary to fill out all the blanks.
- To press “Next” step needs to be a validated form completely.
- The last page must appear with all the information for reviewing and the user can get back to the page to edit their form.
- It can be assumed that your system includes a totally API in every step to back-end without implementing.

**Please send the answer as follows :**
- Folder structure for project
- List all of libraries use for this project and tell me why you use it. Ex. Use lodash for data management.
- Tell me how to manage the data state in this project.
- Tell me the process you use to validate the form for saving draft and submitting the application form.

## Part C: Back-End

### Part C1: Coding Task

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

### Part C2: Architecture Design Task

[Thai Version]

เนื่องจาก CTO ของ Orange Cap Innovative ชอบวิ่งมาก (แบบมากๆ) ทีมเราเลยตัดสินใจจัดงานแข่งวิ่ง Marathon ในชื่อ "Orange Cap Marathon 2021" งานของคุณคือต้องออกแบบ Architecture สำหรับเว็บไซต์ในส่วนของ REST API Back-end โดยระบบที่ได้รับมอบหมายจะเป็นในส่วนของการลงทะเบียนนักวิ่งที่จะเข้ามาสมัครวิ่งในงาน

**Requirements และรายละเอียดของระบบ**
- งานวิ่งนี้มีแค่ระยะเดียวเท่านั้น
- การสมัครงานวิ่งนี้สมัครได้แค่ทีละคน ไม่มีการสมัครเป็นกลุ่มหลายคนให้
- ระบบต้องสามารถจัดเก็บข้อมูลทั้งหมดเหล่านี้ได้ครบถ้วนดังต่อไปนี้
  - ข้อมูลส่วนตัว
    - คำนำหน้าชื่อ
    - ชื่อ (ภาษาไทย และอังกฤษ)
    - นามสกุล (ภาษาไทย และอังกฤษ)
    - วันเดือนปีเกิด
    - อีเมล
    - เลขบัตรประจำตัวประชาชน
    - ที่อยู่
    - เบอร์โทรศัพท์
    - รูปถ่ายหน้าตรง
      - ความละเอียดขั้นต่ำ 300x300 pixel บังคับเป็น Square Resolution
    - ชื่อบนเบอร์วิ่ง (BIB)
      - กำหนดให้กรอกได้สูงสุด 10 ตัวอักษร ภาษาอังกฤษตัวพิมพ์ใหญ่ และตัวเลขเท่านั้น
  - ข้อมูลเกี่ยวกับการวิ่ง
    - เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon มาก่อนหรือไม่
    - เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)
  - ผู้ติดต่อฉุกเฉิน
    - ผู้ติดต่อฉุกเฉินคนที่ 1
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
    - ผู้ติดต่อฉุกเฉินคนที่ 2
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
  - ข้อมูลทางการแพทย์
    - หมู่เลือด
      - A / B / O / AB
    - ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีโรคประจำตัว หรือไม่ 
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่
      - หากตอบว่ามี ให้ระบุตำแหน่งและปีที่รับการผ่าตัด
    - ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่
    - ท่านมียาที่ต้องทานเป็นประจำหรือไม่
      - หากตอบว่ามี ให้ระบุ
    - ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่
    - ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)
    - ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่?
  - เสื้อของที่ระลึก
    - ไซส์เสื้อ
      - XS / S / M / L / XL / XXL / XXXL
- Front-end จะมีการแบ่ง Form ออกเป็น 5 Step ตามหัวข้อของคำถาม เนื่องจากฟอร์มใหญ่มาก User ไม่สามารถกรอกครบตามกำหนดได้ในครั้งแรก
- Back-end จึงต้องมี API สำหรับการรองรับการ Save Draft เพื่อให้ Front-end ทำการ Save Draft ได้
- การกดเพื่อไปขั้นตอนต่อไป จะต้องมีการ Validate Form ให้ครบถ้วนเสมอ
- ในหน้าสุดท้าย Front-end จะมีหน้าแสดงข้อมูลทั้งหมดที่กรอกมา เพื่อให้ตรวจสอบข้อมูล ก่อนส่งใบสมัคร Back-end จึงต้องมี API สำหรับการ Submit ในขั้นตอนสุดท้าย ที่จะตรวจสอบข้อมูลว่ากรอกมาครบถ้วนหรือไม่
ใบสมัครที่ส่งไปแล้ว จะไม่สามารถแก้ไขได้อีก

**สิ่งที่ต้องส่งมาเป็นคำตอบ**
- Database Schema มีหน้าตาอย่างไร
- จะใช้วิธีใดในการทำ Authentication
- ต้องมี REST API Endpoint และ Method อะไรบ้าง (ไม่นับส่วนของการ Login / Register) ในกรณีที่ Endpoint ไหนมีการส่ง Body ต้องระบุ Body มาด้วยว่าต้องมีอะไรบ้าง (ไม่จำเป็นต้องละเอียด ในกรณีที่ field เยอะมากๆ)
ใน API สำหรับการ Submit ส่งใบสมัคร ควรทำอะไรบ้างในขั้นตอนดังกล่าว สามารถเขียนเป็น Pseudo Code ได้
- สามารถตอบเป็นภาษาไทยได้

[English Version]
We need you to help our CTO of Orange Cap who is super passionate about running and  we are going to organise the event under "Orange Cap Marathon 2021." Of course! If you saw this message, you are chosen! Your mission is to design an architecture for Front-end web apps by React on the registration page for our applicants. 

**Requirements and Details:**

- You can set ONLY 1 running distance
- The applicant can apply ONLY one person/time. (Grouping registration is not required)
- For the application form, all details must be included as following :
  - Personal Information
    - Title of name 
    - First name (TH-EN)
    - Last name (TH-EN)
    - Birthdate
    - Email 
    - ID card no. 
    - Address
    - Contact 
    - Recent photo (Straight face)
      - Minimum 300x300 pixel with Square resolution
    - Name of registered applicant on BIB 
      - Length of name: maximum 10 characters (use ONLY Capital letter and number)
  - Applicant background
    - Have you previously run a Mini Marathon/ Half Marathon / Full Marathon?
    - What time do you expect to complete your goal in this event? (Hour/Minute)
  - Emergency contact 
    - Contact 1 
      - Name - Surname 
      - Relationship
      - Telephone number
    - Contact 2 
      - Name - Surname 
      - Relationship
      - Telephone number
  - Medical information 
    - Blood type 
      - A / B / O / AB
    - Do you have a medical allergy? 
      - If yes, please fill out the detail
    - Do you have any chronic health? 
      - If yes, please fill out the detail
    - Have you had surgery before?  
      - If yes, please fill out the detail
    - Do you have any plan for having a baby or are you pregnant before joining this event?
      - If yes, please fill out the detail
    - Do you have any personal medicine to take? 
      - If yes, please fill out the detail
    - Have you ever gotten injured from a Marathon event? 
      - If yes, please fill out the detail
    - Do you often exercise? (at least 2-3 times / week)
    - Have you ever felt chest tightness or easily tired during working out?
      - If yes, please fill out the detail
  - Souvenir 
    - T-shirt 
      - Size XS / S / M / L / XL / XXL / XXXL
- On the Front-end, the register form will be divided into 5 steps as the question. It is a large form. Don’t forget that the applicant cannot complete the form at one time. 
- Back-end must provide an API to save drafts in the Front-end part. 
- In order to proceed to next step by click “Next” button the form in that step need to be fully validate.
- Front-end page will appear with all the filled out details before submitting the application form. Back-end  must have an API to completely submit the form in the final step.
- If the applicant already sent the form, it cannot be edited any more.

**Please send the answer as follows:**
- Design database schema.
- Explain how to perform authentication for some API endpoint that need to authenticate first.
- List all REST API Endpoint for this system, some endpoint may have a request body so please specify what contains inside the body (you don't need to explain full body form, explain only important field).
- For application form submission endpoint. Explain step by step or Pseudo Code on how to handle form submission.
- Be able to answer in Thai.
