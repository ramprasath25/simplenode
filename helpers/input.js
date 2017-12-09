module.exports = {
    "registration" : {
        "type": "object",
        "properties": {
            "firstname": {
                "type": 'string'
            },
            "lastname": {
                "type": 'string'
            },
            "specialist": {
                "type": 'string'
            },
            "qualification": {
                "type": 'string'
            },
            "streetname": {
                "type": 'string'
            },
            "location": {
                "type": 'string'
            },
            "city": {
                "type": 'string'
            },
            "state": {
                "type": 'string'
            },
            "pincode": {
                "type": 'string'
            },
            "yearsofexperience": {
                "type": 'string'
            },
            "mobile": {
                "type": 'string'
            },
            "email": {
                "type": 'string'
            }
        },
        "required": [ "firstname", 
                    "lastname",
                    "specialist",
                    "qualification",
                    "streetname",
                    "location",
                    "city",
                    "state",
                    "pincode",
                    "yearsofexperience",
                    "mobile",
                    "email",                  
                ]
    },
    "getList": {
        "type": "object", 
        "properties": {
            "page_no": {
                "type": 'number'
            }, 
            "per_page": {
                "type": 'number'
            }
        },
        "required": [
            "page_no", "per_page"
        ]
    }
}