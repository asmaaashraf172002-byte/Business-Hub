import jwt from 'jsonwebtoken';
export default function auth(req,res,next){const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):null;if(!token)return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(token,process.env.JWT_SECRET||'change_this_secret');next()}catch{return res.status(401).json({message:'Invalid or expired token'})}}
export const allow=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'ليس لديك صلاحية'})
