module.exports=function(template,prod){
    let output=template.replace('{{%Image%}}',prod.ProductImage)
    output=output.replace('{{%NAME%}}',prod.name)
    output=output.replace('{{%ModelName%}}',prod.ModelName)
    output=output.replace('{{%ModelNumber%}}',prod.ModelNumber)
    output=output.replace('{{%Size%}}',prod.Size)
    output=output.replace('{{%Desc%}}',prod.Description)
    output=output.replace('{{%Camera%}}',prod.Camera)
    output=output.replace('{{%Price%}}',prod.Price)
    output=output.replace('{{%color%}}',prod.color)
   
    output=output.replace('{{%Rom%}}',prod.Rom)
    
    return output;
}