import React, {createContext, useContext, useEffect, useState} from 'react'

interface AuthProps{

   authState?: {token:string|null; authenticated:boolean|null;Id:string|null;}
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
  }>({
    token:null,
    authenticated:null,
    Id:null,
  });

  const [Id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmailAddress] = useState('');
  const [statusCode, setStatus] = useState({});

  const login = async (email :string ,password :string) =>{

            await fetch('https://mutt-one-calf.ngrok-free.app/Login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({Email:email,Password:password})
                    })
                    .then(response => {
                      if(!response.ok){
                        setStatus(response.status);
                        throw new Error('Network response not ok'),
                        console.log(response)
                      }
                      setStatus(response.status);
                      console.log("response is okay", response)

                      return response.json();
                    })
                    .then(async data =>(


                      await localStorage.setItem("USERID", data.Id),

                      setAuthState({
                        token: data.token,
                        authenticated:true,
                        Id:data.Id,
                     }),


                     setId(data.ProviderId),
                     setRole(data.role),
                     setUserId(data.Id),
                     setEmailAddress(data.Email),


                     localStorage.setItem(TOKEN_KEY, data.token),
                     localStorage.setItem("ROLE", role)
                     ))



                     .catch(err => console.log(err))

  };

 useEffect(() =>{
  const loadToken = async() =>{


    const getToken =await localStorage.getItem(TOKEN_KEY);
    const getUserId  = await localStorage.getItem("USERID");

    if(getToken){
      setAuthState({
         token: getToken,
         authenticated:true,
         Id:getUserId,
      });
    }
  }
   loadToken();
}
,[]);

const logout = async()=>{
   setId('')
   setRole('')
   setUserId('')
   setEmailAddress('')

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("USERID");

   setAuthState({
    token:null,
    authenticated:false,
    Id:null,
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


