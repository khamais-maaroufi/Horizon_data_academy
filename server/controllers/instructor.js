import User from "../models/user";


export const makeInstructor = async (req, res) => {
    const {password} = req.body;
    console.log(req.body);
    try {
        const user = await User.findById(req.user._id).exec();
if (password !== process.env.INSTRUCTOR_TOKEN){res.send("y")}
else {
        user.role = "instructor";
        user.save();
        res.send(user);
    }
    }catch(err){
        console.log("make instructor error", err);
    }
};