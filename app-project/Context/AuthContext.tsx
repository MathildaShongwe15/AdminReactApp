import React, {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

interface AuthProps{

   authState?: {token:string|null; authenticated:boolean|null;Id:string|null; Email:string|null;}
   onRegister?:(email:string, password:string) => Promise<any>;
   onLogin?:(email:string, password:string) => Promise<any>;
   onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = '';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () =>{
  return useContext(AuthContext);
};

export const AuthProvider = ({children}:any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    Id:string|null;
    Email:string|null;
  }>({
    token:null,
    authenticated:null,
    Id:null,
    Email:null,
  });

  const [userId, setUserId] = useState('');
  const [email, setEmailAddress] = useState('');
  const [statusCode, setStatus] = useState({});

  const login = async (email :string ,password :string) =>{
    await localStorage.setItem("Email",email);

            await fetch('http://localhost:3000/Login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({Email:email,Password:password})
                    })
                    .then(response => {
                      if(!response.ok){
                        setStatus(response.status);
                         localStorage.setItem("CODE","false");
                        throw new Error('Network response not ok'),
                        console.log(response)
                      }
                      localStorage.setItem("CODE","true");
                      setStatus(response.status);
                      console.log("response is okay", response)

                      return response.json();
                    })
                    .then(async data =>(
                      await localStorage.setItem("USERID", data.Id),
                      await localStorage.setItem("FirstName", data.FirstName),
                      // await localStorage.setItem("FirstName", data.FirstName),

                      setAuthState({
                        token: data.token,
                        authenticated:true,
                        Id:data.Id,
                        Email:data.Email
                     }),
                     setUserId(data.Id),
                     setEmailAddress(data.Email),
                     localStorage.setItem(TOKEN_KEY, data.token)
                     ))
                     .catch(err => console.log(err))

  };

 useEffect(() =>{
  const loadToken = async() =>{
    const getToken =await localStorage.getItem(TOKEN_KEY);
    const getUserId  = await localStorage.getItem("USERID");
    const getEmail = await localStorage.getItem("Email")

    if(getToken){
      setAuthState({
         token: getToken,
         authenticated:true,
         Id:getUserId,
         Email:getEmail
      });
    }
  }
   loadToken();
}
,[]);

const logout = async()=>{
    setUserId('')
   setEmailAddress('')

  await localStorage.removeItem(TOKEN_KEY);
  await localStorage.removeItem("USERID");
  await localStorage.removeItem("Email");
  await localStorage.removeItem("CODE");

   setAuthState({
    token:null,
    authenticated:false,
    Id:null,
    Email:null
   });

}

const value ={
  onLogin: login,
  onLogout: logout,
  authState,
} ;
    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>
    )
}


