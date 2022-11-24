var raja ={
    "name":"raja",
    "class":"10th",
    "marks":["90","95","100","96","99"]
}
for(var i=0;i<raja.marks.length;i++){
    console.log(raja.marks[i]);
}
for(let i in raja.marks)
{
    console.log(raja.marks[i]);
}
for (marks of raja.marks) {
    console.log("marks:"+ raja.marks);
}

