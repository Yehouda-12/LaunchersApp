import Launcher from "../model/launcher.js";

export const getAllLaunchers =async (req,res)=>{
    try{
        const launchers = await Launcher.find()
        res.status(200).json(launchers)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getLauncherById = async (req,res)=>{
    try{
        const launcher = await Launcher.findById(req.params.id)
        if(!launcher){
            return res.status(404).json({message:"launcher not found"})
        }
        res.status(200).json(launcher)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const createLauncher = async (req,res)=>{
    try{
      
        const launcher = await Launcher.create(req.body)
        res.status(201).json(launcher)
    }catch(error){
         res.status(500).json({message:error.message})
    }
}

export const deleteLaucher = async (req,res)=>{
    try {
        const launcher = await Launcher.findByIdAndDelete(req.params.id)
        if(!launcher){
            return res.status(404).json({message:"launcher not found"})
        }
        res.status(201).json({message :"launcher deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})

        
    }
}
export const updateLauncher = async (req,res)=>{
    try {
        const launcher = await Launcher.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}

        )
        if(!launcher){
            return res.status(404).json({message:"launcher not found"})
        }
         res.status(200).json(launcher)
        
    } catch (error) {
         res.status(500).json({message:error.message})

    }
}
