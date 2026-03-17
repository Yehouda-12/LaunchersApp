import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next)=>{
    const auth = req.headers.authorization
   

    if (!auth || !auth.startsWith('Bearer')){
        return res.status(401).json({message:'No Token'})
    }

    const token =auth.split(' ')[1]
   

    try {
       
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decoded
        next()
        
    } catch (error) {
        return res.status(401).json({message:"invalid token"})
        
    }

}

export const verifyAdmin = (req,res,next)=>{
     if(req.user.user_type !== 'admin'){
        return res.status(401).json({message:"No access - Admin only"})
     }
     next()
}


export const verifyIntelligence = (req,res,next)=>{
    if(req.user.user_type !== 'intelligence' && req.user.user_type !== 'admin'){
         return res.status(401).json({message:"No access "})

    }
    next()
}


