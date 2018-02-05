export default [
    {
        "title": "child",
        "children": [
            {
                "title": "index",
                "children": [],
                "url": "/child",
                "as": "/child"
            },
            {
                "title": "demo",
                "children": [],
                "url": "/child?type=child&children=demo",
                "as": "/child/demo"
            }
        ],
        "open": false
    },
    {
        "title": "git",
        "children": [
            {
                "title": "git的概述",
                "children": [],
                "url": "/child?type=git",
                "as": "/git"
            },{
                "title": "git基础",
                "children": [],
                "url": "/child?type=git&children=basics",
                "as": "/git/basics"
            },{
                "title": "git原理",
                "children": [],
                "url": "/git/theory"
            }
        ],
        "open": false
    },
    {
        "title": "es6",
        "children": [
            {
                "title": "es6的概述",
                "children": [],
                "url": "/child?type=git",
                "as": "/es6"
            },{
                "title": "es6基础",
                "children": [],
                "url": "/child?type=git&children=basics",
                "as": "/es6/basics"
            },{
                "title": "es6原理",
                "children": [],
                "url": "/es6/theory"
            }
        ],
        "open": false
    }
]