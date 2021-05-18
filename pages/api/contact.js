export default (req, res)=>{
    const data = JSON.parse(req.body)
    const { name, email, message } = data
    console.log(name, email, message)
    res.status(200).send()
}