const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Route: POST /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const userId = generateUserId("Satvik", "Jangra","23052003");
    const email = "satvik3881.be21@chitkara.edu.in";
    const rollNumber = "2110993881";
    
    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (let item of data) {
      if (!isNaN(item)) {
        const num = parseInt(item);
        if (num % 2 === 0) {
          evenNumbers.push(num.toString());
        } else {
          oddNumbers.push(num.toString());
        }
      } else if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Generate User ID function
function generateUserId(firstName, lastName, dob) {
  return `${firstName}_${lastName}_${dob}`;
}

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
