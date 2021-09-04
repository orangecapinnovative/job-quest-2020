[TOC]

## รูปแบบหน้าจอที่ Design ไว้

**ข้อมูลส่วนตัว**

![](.\img\step1.png)

**ข้อมูลเกี่ยวกับการวิ่ง**

![](.\img\step2.png)



**ผู้ติดต่อฉุกเฉิน**

![](.\img\step3.png)

**ข้อมูลทางการแพทย์**

![](.\img\step4.png)

**เสื้อของที่ระลึก**

![](.\img\step5.png)



## Folder Structure ที่จะใช้ในการจัดวาง

```tree
|-- Project_Orange_Cap_Marathon_2021
|  |-- node_modules
|  |-- public
|	|-- src
|  	|-- assets
|			|-- images
|			|-- css
|   	|-- action
|   		|-- action.js
|   		|-- action.js
|   	|-- components
|			|-- TextField
|				|-- TextField0001.js
| 				|-- TextField0001.styles.js
| 				|-- TextField0002.js
| 				|-- TextField0002.styles.js 		
| 			|-- Select
| 				|-- Select0001.js
|  				|-- Select0001.styles.js
|  				|-- Select0002.js
|  				|-- Select0002.styles.js 	
|      		|-- Layout
| 				|-- Layout0001.js
|  				|-- Layout0001.styles.js
|  				|-- Layout0002.js
|  				|-- Layout0002.styles.js 	
|   	|-- page
|       	|-- PersonalInformationPage
|  				|-- PersonalInformationPage.js
|       	|-- ApplicantBackgroundPage
|  				|-- ApplicantBackgroundPage.js
|       	|-- EmergencyContactPage
|  				|-- EmergencyContactPage.js
|       	|-- MedicalInformationPage
|  				|-- MedicalInformationPage.js
|           |-- SouvenirPage
|  				|-- SouvenirPage.js
|   	|-- store
| 			|-- rootReducer.js
| 			|-- configureStore.js
| 			|-- action.js
|   	|-- routing
| 			|-- routes.js
|   	|-- utils
| 			|-- constants
|  				|-- URLconstants.js
|  				|-- Messageconstants.js
|  			|-- helpers
|  				|-- Validation.js
|  				|-- UploadUtils.js
|   |-- App.js
|   |-- index.js
|   |-- package.json
|   |-- README.md
|   |-- .prettierrc
|   |-- yarn.lock
 
```



## Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้

| Library          | เหตุผลในการใช้งาน |
| ---------------- | --------------- |
| Lodash           |                 |
| core-js          |                 |
| uuid             |                 |
| axios            |                 |
| react-router-dom |                 |
| Day.js           |                 |
| react-hook-form  |                 |
| redux            |                 |
| redux-logger     |                 |
| redux-persist    |                 |
| redux-thunk      |                 |
| use-debounce     |                 |
| yup              |                 |
| tailwindcss      |                 |
| material-ui      |                 |

