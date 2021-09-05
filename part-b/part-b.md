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
|  	|-- node_modules
|  	|-- public
|	|-- src
|  		|-- assets
|			|-- images
|			|-- css
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
|   	|-- context
| 			|-- store.js
|   	|-- routing
| 			|-- routes.js
|   	|-- utils
| 			|-- constants
|  				|-- URLconstants.js
|  				|-- Messageconstants.js
|  			|-- helpers
|  				|-- Validation.js
|  				|-- UploadUtils.js
|   	|-- App.js
|   	|-- index.js
|   |-- package.json
|   |-- README.md
|   |-- .prettierrc
|	|-- yarn.lock
 
```



## Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้

| Library          | เหตุผลในการใช้งาน                                              |
| ---------------- | ------------------------------------------------------------ |
| Lodash           | ใช้ในการจัดการเรื่องพวกค่าใน array, object หรือ string             |
| core-js          | ใช้ในการแสดงบน broswer ie                                     |
| uuid             | ใช้ในการเป็นค่าของ key                                          |
| axios            | ใช้ในการ call service และ upload file                         |
| react-router-dom | ใช้ในการจัดการ path url ว่าจะเข้าหน้าจอไหน                        |
| Day.js           | ใช้ในการจัดการเรื่อง วันเเละเวลา                                  |
| react-hook-form  | ช่วยในการจัดการฟอร์ม และลดการ code ที่ใช้การจัดการกับฟอร์ม, ลดจำนวนการ render ซ้ำ ๆ |
| useContext       | ช่วยในเรื่องการจัดการ global state ระหว่าง component              |
| yup              | ใช้ในการตรวจสอบความถูกต้องของฟอร์ม หรือการทำ validation           |
| tailwindcss      | มาช่วยในการจัดการ css ให้ใช้งานง่าย เพราะมัน custom css มาให้เราสามารถใช้งานได้เลย |
| material-ui      | ช่วยในการทำ component ui เช่น textfield, select หรือแม้แต่ layout |



## จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้

เนื่องจาก form ในแต่ละ step ไม่ได้มีข้อมูลเยอะมากเลยคิดว่าจะใช้ useContext เเทน Redux ซึ่งมีหลักการทำงานคล้ายๆ กัน

1. ทำการสร้าง store เพื่อเก็บข้อมูลของแต่ละ step

```react
import React, {useState, createContext} from 'react'

//สร้าง Store Context
export const StoreContext = createContext({})

export const StoreContextProvider =  ({ children }) => {
    // initail State
    const [prsonalInformation, setPsonalInformation] = useState({})
    const [aplicantBackground, setAlicantBackground] = useState({})
    const [emergencyContact, setEmergencyContact] = useState({})
    const [medicalInformation, setMedicalInformation] = useState({})
    const [souvenir, setSouvenir] = useState({})
  
    //value สำหรับ return ไปให้หน้าต่าง ๆ ใช้ 
    const store = {
      prsonalInformation : [prsonalInformation, setPsonalInformation],
      aplicantBackground : [aplicantBackground, setAlicantBackground],
      emergencyContact : [emergencyContact, setEmergencyContact],
      medicalInformation : [medicalInformation, setMedicalInformation],
      souvenir : [souvenir, setSouvenir]
    }
    
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  }
```
2. นำ store ที่ได้ไปครอบไว้ที่ Top Level (src/index.js)

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContextProvider } from './context/store'

ReactDOM.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  , document.getElementById('root'));
serviceWorker.unregister();
```

3. ทำการ import Store เพื่อเรียกใช้งาน global state และตอน Submit ให้ทำการ set state ให้กับ store

```react
import React, { useContext } from 'react
import useForm from "react-hook-form";
import { StoreContext } from '../context/store'

export default function StepperForm() {
  
    // เรียกใช้งาน useContext
    const { information, account } = useContext(StoreContext)
  
    const onSubmit = data => {
        if(activeStep === 0){
            //เรียก function สำหรับการ set state ให้กับ prsonalInformation
            prsonalInformation[1](data)
        }
        else if(activeStep === 1){
            //เรียก function สำหรับการ set state ให้กับ aplicant Background
            aplicantBackground[1](data)
        }
        // something
        handleNext()
    };

    return (
        <div className={classes.root}>
            <form onSubmit={activeStep === 0 ? prsonalInformationForm.handleSubmit(onSubmit) : aplicantBackgroundForm.handleSubmit(onSubmit)}>
                // something
            </form>
        </div>
    );
}
```



## จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit

ใช้ react-hook-form และ yup มาใช่ในการ validate และ submit ตัวอย่างเช่น

ตัวอย่างการใช้งานใน form
```react
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export default function App() {
// Set validationSchema สำหรับ prsonalInformation
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    prsonalInformationSchema: yup.object().shape({
      bibName: yup.string().matches(/^[A-Z0-9]*/ , 'Is not in correct format') //สร้าง Schema สำหรับ prsonalInformation Form
    }),
  })

  const submit = (value) => {
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" name="bibName" ref={register} />
      {errors.bibName && <div>{errors.bibName.message}</div>}
      <button type="submit">Next</button>
    </form>
  )
}
```

