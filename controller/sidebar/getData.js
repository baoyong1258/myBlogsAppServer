'use strict';

import sidebarModel from '../../models/sidebar/getData';
import formidable from 'formidable'

class SideBar {
    constructor(){
        this.getData = this.getData.bind(this);
    }
    async getData(req, res, next){
        let sidebarData;
        try{
            sidebarData = await sidebarModel.find();
            res.send(sidebarData);
        }catch(err){
            console.log('获取数据失败', err);
            res.send({
                status: 0,
                type: 'ERROR_GET_DATA',
                message: '获取数据失败',
            })
            return
        }
    }
    async addData(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            let newSidebarData = fields.newSidebarData;
            try{
                console.log('--- fields ---');
                console.log(fields);
                console.log('--- newSidebarData ---');
                console.log(newSidebarData);
                console.log('--- newSidebarData JSON ---');
                console.log(JSON.parse(newSidebarData));
                let result = await sidebarModel.addSidebarData(newSidebarData);
                res.send({
                    code: '0000',
                    message: '保存数据成功'
                })
            }catch(err){
                console.log('获取category_id失败');
                res.send({
                    type: 'ERROR_DATA',
                    message: '获取数据失败'
                })
                return
            }
        })
    }
    async removeData(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            const title = fields.title;
            try {
                console.log(title);
                let result = await sidebarModel.removeSidebarData(title);
                res.send({
                    code: '0000',
                    message: '删除数据成功'
                })
            }catch(err){
                res.send({
                    type: 'ERROR_DATA',
                    message: '删除数据失败'
                })
            }
        })
    }
    async updateData(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            const updateData = fields.updateData;
            try {
                let result = await sidebarModel.updateSidebarData(updateData);
                res.send({
                    code: '0000',
                    message: '更新数据成功'
                })
            }catch(err){
                res.send({
                    type: 'ERROR_DATA',
                    message: '更新数据失败'
                })
            }
        })
    }
}

export default new SideBar();