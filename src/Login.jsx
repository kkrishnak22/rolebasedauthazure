
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginequest } from './config/authConfig';

export const Login =  () => {
    const { instance } = useMsal();
    function handlLogin(){
        instance.loginPopup(loginequest).catch((e) => console.log(console.error(e)));
    }

    console.log(useMsal());

  return (
    <>
       <div>
      <button onClick={handlLogin}>Login</button>
    </div>
    </>
   
  )
}
