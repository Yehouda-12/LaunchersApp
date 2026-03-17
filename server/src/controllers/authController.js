import jwt from "jsonwebtoken"
import User from "../model/user.js"

export const createUser = async (req, res) => {
    try {
        const { username, password, email, user_type } = req.body
        const existingType = await User.findOne({ user_type })
        if (existingType) {
            return res.status(401).json({ message: `User with  type ${user_type} already exist` })
        }
        const user = await User.create({ username, password, email, user_type })
        res.status(201).json({ message: "User created!" })


    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export const updateUser = async (req, res) => {
    try {
        const { id, username, email, user_type, password } = req.body
        const user = await User.findByIdAndUpdate(
            id,
            { username, email, user_type, password },
            { new: true, runValidators: true }

        )
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(201).json({ message: "User updated" })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(eq.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(201).json({ message: "User deleted!" })




    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Password not good" })
        }
        user.last_login = new Date()
        await user.save()

        const token = jwt.sign(
            { id: user._id, username: user.username, user_type: user.user_type },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.status(200).json({ token, user_type: user.user_type, username: user.username })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })

        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

export const getAllUsers= async (req, res) => {
    try {
        const users = await User.find()
       
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}