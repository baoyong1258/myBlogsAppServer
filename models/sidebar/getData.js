'use strict';

import mongoose from 'mongoose'
import sidebarData from '../../initData/sidebar'
import db from '../../mongodb/db';

const Schema = new mongoose.Schema({
    title: String,
    children: [
        {
            title: String,
            children: [],
            url: String,
            as: String
        },
    ],
    open: Boolean
},{versionKey: false});

Schema.statics.addSidebarData = async function (newSidebarData) {
    try{
        var sam = new Model({
            title: "child",
            children: [
                {
                    title: "demo",
                    children: [],
                    url: "/child?type=child&children=demo",
                    as: "/child/demo"
                }
            ],
            open: false
        })
        sam.save(function (err) {
            if(err){
                console.log('保存sidebar数据失败')
            }else{
                console.log('保存sidebar数据成功')
            }
        });
        return;
    }catch(err){
        console.log('保存cetegroy失败');
        throw new Error(err)
    }
}

Schema.statics.removeSidebarData = async function (title) {
    console.log('title = ' + title);
    try{
        this.remove({title: title}, function (err) {
            console.log('删除title:' + title);
        });
        return;
    }catch(err){
        console.log('删除数据失败');
        throw new Error(err)
    }
}


const Model = mongoose.model('Sidebar4', Schema);

Model.findOne((err, data) => {
    if (!data) {
        for (let i = 0; i < sidebarData.length; i++) {
            Model.create(sidebarData[i]);
        }
    }
})

export default Model;