import generateContent from "../services/ai.sevice.js";
export default async function getReview (req,res){
    const code = req.body.code;
    if(!code){
        res.status(400).send("Code is required")
    }
    const response = await generateContent(code);
    res.send(response);
}

