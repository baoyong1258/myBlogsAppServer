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
        let data = Object.assign({}, JSON.parse(newSidebarData), {open: false});
        var sam = new Model(data);
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

Schema.statics.updateSidebarData = async function (updateData) {
    try{
        const data = JSON.parse(updateData);
        const title = data.title;
        const children = data.children;
        this.update({title}, {children}, function (err) {
            console.log('更新数据成功');
        })
    }catch(err){
        console.log('更新数据失败');
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