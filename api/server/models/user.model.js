import mongoose from "mongoose";
const schema = mongoose.Schema;
const usersSchema = new schema(
    {
        username:{
            type: String,
            required: true,
            // unique: true
        },
        email:{
            type: String,
            required: true,
            // unique: true
        },
        password:{
            type: String,
            required: true,
        },
         avatar:{
             type: String,
             default: "default.jpg",
         }
    }
);
const users  = mongoose.model("users",usersSchema);
export default users;
