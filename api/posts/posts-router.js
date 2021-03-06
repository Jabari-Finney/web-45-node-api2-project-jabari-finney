// implement your posts router here
const express = require('express');
const Post = require('./posts-model')

const router = express.Router()

router.get('/',(req, res)=>{
    Post.find()
        .then(found => {
            res.json(found)
        })
        .catch(err =>{
            res.status(500).json({
                message: "The posts information could not be retrieved",
                err: err.message,
                stack: err.stack,
            })
        })
})

router.get('/:id', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if (!post) {
            res.status(404).json({
                message: "The post with the specified ID does not exist",
        
            })
        } else {
            res.json(post)
        }

} catch (err) {
    res.status(500).json({
        message: "The post information could not be retrieved",
        err: err.message,
        stack: err.stack,
    })
    
}
})

router.post('/',(req, res)=>{
    const { title, contents} = req.body
    if (!title || !contents) {
     res.status(400).json({
         message: "Please provide title and contents for the post"
     })   
    } else{
        console.log('success')
    }
    
})

router.delete('/:id',(req, res)=>{

})

router.put('/:id',(req, res)=>{

})

router.get('/:id/messages',(req, res)=>{

})







module.exports = router