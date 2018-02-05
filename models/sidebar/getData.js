'use strict';

import mongoose from 'mongoose'
import sidebarData from '../../initData/sidebar'

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
});

Schema.statics.addSidebarData = async function (newSidebarData) {
    try{
        let obj = {
                title: "child",
                children: [
                    {
                        title: "index",
                        children: [],
                        url: "/child",
                        as: "/child"
                    },
                ],
                open: false
            };
        let result = await this.insert(obj);
        return
    }catch(err){
        console.log('保存cetegroy失败');
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