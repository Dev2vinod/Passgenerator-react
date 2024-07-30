import React from 'react';
import { useState } from 'react';
import { CopyOutlined ,RedoOutlined} from '@ant-design/icons';


const Password = () => {

    const[passLength,setPassLength] =useState(5)
    const[upperCase,setUpperCase] =useState(false)
    const[lowerCase,setLowerCase] =useState(false)
    const[numbers,setNumbers] =useState(false)
    const[symbol,setSymbol] =useState(true)
    const[passwords,setPasswords] =useState('')



    function passGenerator() {

        let pass ='';

        let str ='~!@#$%^&*()_+={}:<>?\/';

        if (upperCase){
             str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            //  console.log("")

            // console.log("uppercase",upperCase,str)



            
         }

             if (lowerCase) {

             str += 'abcdefghijklmnopqrstuvwxyz';

            //  console.log("lowercase",lowerCase,str)

            
         }

         if (numbers) {

             str += '0123456789'

    //  console.log("numbers",numbers,str)


            
        }




        
        
        
        for (let index = 0; index < passLength; index++) {
            let randomNumber = Math.floor(Math.random()*str.length);
            
            pass =pass+ str.charAt(randomNumber)

            // console.log("str",str)
            // console.log("password",pass)

            // console.log('randomNumber',pass)
            
        }
        // setPasswords(pass)

        localStorage.setItem("pass",pass)

        // console.log(pass,"me hu kys")
        
    }
  
   passGenerator()

  return (

    <>
   
    <div className='bg-gray-800 flex flex-col w-[50%] mx-auto my-[2%] gap-3 p-4 shadow-lg rounded-md'>

    <div   className='bg-green-900 rounded-md text-2xl flex items-center justify-between font-bold p-2 px-10'>
        <p> {localStorage.getItem("pass")}   

        </p>
        <div className='gap-5 p-1  flex justify-between items-center'>

        <p><CopyOutlined /></p>
        <p><RedoOutlined /></p>

        </div>
    </div>
     
      
    

    <div className=''>

            <div className='p-2 m-2 mt-3 font-semibold text-xl flex gap-5'>
                <p>Customize your password
                    
                
                </p>
                
                
            </div>

            <div>

                <label htmlFor="passLength"></label>

                <span className='w-10 p-2 h-10 rounded-full mx-2 bg-slate-500'> {passLength} </span>
                <input type="range" className='' min={5} max={20} id='passLength' onChange={(e)=>setPassLength(e.target.value)}  value={passLength} />
            </div>


                 {/* input part  */}
            <div className='p-2 m-2 mt-3 bg-green-900 hover:bg-green-800 font-semibold text-xl '>
                
                <input type="checkbox" name="" id="upperCase" className='p-4 m-1 bg-orange-900' onChange={(e)=>setUpperCase(e.target.checked)} />
                <label htmlFor="upperCase" className='cursor-pointer'>UpperCase</label>
            </div>


            <div className='p-2 m-2 mt-3 bg-green-900 hover:bg-green-800 font-semibold text-xl '>
                
                <input type="checkbox" name="" id="lowerCase" onChange={(e)=>setLowerCase(e.target.checked)}/>
                <label htmlFor="lowerCase">lowerCase</label>
            </div>

            <div className='p-2 m-2 mt-3 bg-green-900 hover:bg-green-800 font-semibold text-xl '>
                
                <input type="checkbox" name="" id="numbers" onChange={(e)=>setNumbers(e.target.checked)} />
                <label htmlFor="numbers">Numbers</label>
            </div>


            <div className='p-2 m-2 mt-3 bg-green-900 hover:bg-green-800 font-semibold text-xl '>
                
                <input type="checkbox" name="" id="symbols" onChange={(e)=>{setSymbol(e.target.checked)}} />
                <label htmlFor="symbols">Symbols</label>
            </div>

    </div>

    </div>

    
    </>
  )
}

export default Password