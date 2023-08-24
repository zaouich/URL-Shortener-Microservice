const Link = require("../models/linksModel")
const AppError = require("../utils/AppError")
const catchAsync = require("../utils/catchAsync")
const dns = require("dns")


const lookup = catchAsync(async(req,res,next)=>{
    const {original_url}=req.body
    const urlPattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    console.log("nnnnnnnn",urlPattern.test(original_url))
    if (urlPattern.test(original_url)) return next()
    return next(new AppError("invalid url",400))

})
const addLink = catchAsync(async(req,res,next)=>{
    const {original_url,short_url}=req.body
    
    await Link.create({original_url,short_url})
    res.status(201).json({
        original_url,short_url
    })
})
const getLink = catchAsync(async(req,res,next)=>{
    const {url} = req.params
    const link = await Link.findOne({short_url:url})
    if(!link) return next(new AppError("no url found by this short url",404))
    res.redirect(link.original_url)
})
module.exports = {addLink,lookup,getLink}