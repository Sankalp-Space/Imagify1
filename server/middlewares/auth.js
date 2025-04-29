import jwt from 'jsonwebtoken'

const userAuth =async(req, res ,next)=>{
    const {token}= req.headers;

    if(!token){
        return res.json({success:false , message:'Not Authorized. Look Again'});
    }

    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.user = {id: tokenDecode.id};
        }
        else{
            return res.json({success:false , message:'Not Authorized. Look Again'});
        }

        next();
    }catch(error){
        return res.json({success:false , message: error.message});
    }
};


export default userAuth;