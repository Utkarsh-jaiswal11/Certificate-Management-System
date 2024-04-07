
// Select the database to use.
use('Student_details');

// Insert a few documents into the sales collection.
// db.getCollection('Details').insertMany([
//     {
//         "name": "Utkarsh",
//         "course": "web3",
//         "roll_no": "01"
//     },
//     {
//         "name": "Samantha",
//         "course": "data science",
//         "roll_no": "02"
//     },
//     {
//         "name": "Rahul",
//         "course": "machine learning",
//         "roll_no": "03"
//     },
//     {
//         "name": "Emma",
//         "course": "web development",
//         "roll_no": "04"
//     },
//     {
//         "name": "Aiden",
//         "course": "graphic design",
//         "roll_no": "05"
//     },
//     {
//         "name": "Sophia",
//         "course": "software engineering",
//         "roll_no": "06"
//     },
//     {
//         "name": "Jacob",
//         "course": "artificial intelligence",
//         "roll_no": "07"
//     },
//     {
//         "name": "Isabella",
//         "course": "cybersecurity",
//         "roll_no": "08"
//     },
//     {
//         "name": "Liam",
//         "course": "blockchain",
//         "roll_no": "09"
//     },
//     {
//         "name": "Olivia",
//         "course": "cloud computing",
//         "roll_no": "10"
//     }
// ]);
db.Details.findOne({'roll_no':'02'});



