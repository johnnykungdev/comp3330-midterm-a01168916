api path = /schedule

Get all courses
GET /
response:
    [
        {
            _id: ObjectId,
            date: string, "Oct 21th 2021",
            courseNumber: string, "comp3330",
            time: string, "1500-1700",
            location: string, "#557 DTC"
        },
        ...
    ]

Get a schedule with id
GET /:id
response:
    {
        _id: ObjectId,
        date: string, "Oct 21th 2021",
        courseNumber: string, "comp3330",
        time: string, "1500-1700",
        location: string, "#557 DTC"
    }


Post a new schedule
POST /
request body:
    {
        date: string, "Oct 21th 2021",
        courseNumber: string, "comp3330",
        time: string, "1500-1700",
        location: string, "#557 DTC"
    }

response:
    {
        _id: ObjectId,
        date: string, "Oct 21th 2021",
        courseNumber: string, "comp3330",
        time: string, "1500-1700",
        location: string, "#557 DTC"
    }

Update schedule information
PATCH /:id
request body:
    {
        date?: string, "Oct 21th 2021",
        courseNumber?: string, "comp3330",
        time?: string, "1500-1700",
        location?: string, "#557 DTC"
    }

response:
    {
        _id: ObjectId,
        date: string, "Oct 21th 2021",
        courseNumber: string, "comp3330",
        time: string, "1500-1700",
        location: string, "#557 DTC"
    }

Delete a schedule
DELETE /:id
response:
    {
        "_id": ObjectId, "6172e1ed08cf644a0839cf56"
        "message": string, "Data deleted successfully"
    }