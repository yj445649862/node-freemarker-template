var schedule = require('node-schedule');
var path = require('path') ;
const Freemarker = require('freemarker');
const freemarker = new Freemarker({ root: path.resolve('tlps') });
var fs = require('fs') ;
var count = 0 ;
setInterval(()=>{
    freemarker.renderFile(path.join(path.resolve('tlps'),'index.ftl'), {title:Math.random(),data:{time:Math.random()}}, (err, result) => {
        if (err) {
            throw new Error(err);
        }
        fs.writeFile(path.join(path.resolve('statichtmls'),'a.html'),result,{flag:'w'},(err,sult)=>{
            console.dir(err)
            console.dir(sult);
            console.dir(`当前次数${count++}`)
        });

    });
},1000)