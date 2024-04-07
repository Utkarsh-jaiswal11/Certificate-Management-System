const express = require('express');
const mongoose = require('mongoose');

const pdfkit = require('pdfkit');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 10000;

app.use(express.static('public'));

app.set( 'view engine', 'ejs' );


const uri = 'mongodb://localhost:27017/Student_details'; // connection string /
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define a schema for student data
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  roll_no: { type: String, required: true },
  // Add other relevant fields
});

app.get('/' , (req , res)=>{
  res.render('Welcome')
})
app.get('/generate-certificate' , (req , res)=>{
  res.render('form' , {name : req.query.name})
})

const Student = mongoose.model('Student', studentSchema , 'Details');

app.get('/students/:roll_no', async (req, res) => {
    try {
      const { roll_no } = req.params;
      const student = await Student.findOne({ roll_no });
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      // Return student data (you can customize this)
      return res.json(student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
 // Certificate generation route
app.get('/generate-certificate/:roll_no', async (req, res) => {
  
  try {
    const { roll_no } = req.params;

    // Fetch student data from the database
    const student = await Student.findOne({ roll_no });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.render('certificate', {
        studentName: student.name.toUpperCase(),
        courseName: student.course.toUpperCase(),
        studentRoll: student.roll_no,
        yearOfCompletion: new Date().get,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
