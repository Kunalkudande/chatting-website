import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessagae = async (req, res)=>{
    try{
        const {message} = req.body;
        const {id: recevierId} = req.params;
        const senderId = req.userId;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recevierId]}
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, recevierId]
            })
        }

        const newMessage = new Message({
            senderId,
            recevierId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await conversation.save();
        await newMessage.save();

        res.status(200).json(newMessage);
    }
    catch(e){
        console.log("Error in send message controller", e.message);
        res.status(500).json({
            Error: "Internal server error"
        })
    }
}

export const getMessage = async (req, res)=>{
    try{
        const {id: userIdChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userIdChatId]}
        }).populate("messages");
        
        if(!conversation){
            return res.status(400).json({
                Error: "dont have message "
            })
        }

        res.status(200).json(conversation.messages);
    }
    catch(e){
        console.log("Error in get message controller", e.message);
        res.status(500).json({
            Error: "Internal server error"
        })
    }
}