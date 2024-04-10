import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions for adding document
import { db } from "./firebase"; // Assuming you have a separate file for initializing Firebase

function Date() {
  const [selectedDate, setSelectedDate] = useState(""); // State to hold the selected date

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add the selected date to Firestore collection
      const docRef = await addDoc(collection(db, "dates"), {
        date: selectedDate
      });
      console.log("Date added with ID: ", docRef.id);
      
      window.location.href = '/activites';
    } catch (error) {
      console.error("Error adding date: ", error);
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Date</title>
        <link rel="stylesheet" href="css/date.css" />
      </head>
      <body>
        <h1 title="choose a date">Chọn ngày điii bà </h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <label>Ngày nào: (chọn ngày)</label>
          <div>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button className="button" type="submit">
              Nộp 
            </button>
          </div>
        </form>
      </body>
    </html>
  );
}

export default Date;
