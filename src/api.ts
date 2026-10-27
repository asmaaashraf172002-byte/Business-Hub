import axios from 'axios';
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:3000/api'});
api.interceptors.request.use(c=>{const t=localStorage.getItem('token');if(t)c.headers.Authorization=`Bearer ${t}`;return c});
export async function login(email:string,password:string){const r=await api.post('/auth/login',{email,password});localStorage.setItem('token',r.data.accessToken);localStorage.setItem('user',JSON.stringify(r.data.user));return r.data}
export async function register(name:string,email:string,password:string){const r=await api.post('/auth/register',{name,email,password});localStorage.setItem('token',r.data.accessToken);localStorage.setItem('user',JSON.stringify(r.data.user));return r.data}
export function logout(){localStorage.removeItem('token');localStorage.removeItem('user')}
