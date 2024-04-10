import React, { useState } from "react";
import "./Food.css";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions for adding document
import { db } from "./firebase";

function Foods() {
  // Sử dụng useState để lưu trữ danh sách các label đã chọn
  const [selectedActivities, setSelectedActivities] = useState([]);

  // Hàm xử lý khi checkbox thay đổi
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Nếu checkbox được chọn, thêm label vào danh sách
      setSelectedActivities((prevSelectedActivities) => [
        ...prevSelectedActivities,
        value,
      ]);
    } else {
      // Nếu checkbox bị hủy chọn, loại bỏ label khỏi danh sách
      setSelectedActivities((prevSelectedActivities) =>
        prevSelectedActivities.filter((activity) => activity !== value)
      );
    }
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        // Merge selected activities into a single string
        const mergedActivities = selectedActivities.join(', ');
        
        // Add the merged activities to Firestore collection
        const docRef = await addDoc(collection(db, "foods"), {
            activities: mergedActivities
        });

        console.log("Activities added successfully with ID: ", docRef.id);
        window.location.href = '/deserts';
        // Redirect to the activities page
    } catch (error) {
        console.error("Error adding activities: ", error);
    }
};

  return (
    <div className="Activities">
        <div id="activityquestion">
          <b>Lựa món mà bà thích điii nàaa?</b>
        </div>
        <div class="activities-selection">
        <div class="activity-item">
            <img src="https://phamvulinh18.github.io/Date/food/banhtrang.jpeg" alt="aquarium" />
            <label>
              <input
                type="checkbox"
                name="activities"
                value="BanhTrangTron"
                onChange={handleCheckboxChange}
              />
              Bánh tráng trộn
            </label>
          </div>
          <div class="activity-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_myqVgT6Nz4IyxO8TEqt_UJxRMtmyjwrUw&s" alt="arcade" />
            <label>
              <input
                type="checkbox"
                name="activities"
                value="CaVienChien"
                onChange={handleCheckboxChange}
              />
              Cá viên chiên
            </label>
          </div>
          <div class="activity-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92-qj39haTJmIZ9No6eMShMxNHitqa9AUhQ&s" alt="cinema" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="oc"
            onChange={handleCheckboxChange}
          />Ốc</label
        >
      </div>
      <div class="activity-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEjJpLQ6FywRKhO-JLck8FxxT5QePN4C6BQ&s" alt="ceramics" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="mycay"
            onChange={handleCheckboxChange}
          />Mỳ cay</label
        >
      </div>
      <div class="activity-item">
        <img src="https://phamvulinh18.github.io/Date/food/pizza.jpeg" alt="ceramics" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="pizza"
            onChange={handleCheckboxChange}
          />Pizza</label
        >
      </div>
      <div class="activity-item">
        <img src="https://dienmaythiennamhoa.vn/static/images/2.%20landing%20pages%20promotion/BBNP9HW.jpg" alt="park.jpeg" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="lauthai"
            onChange={handleCheckboxChange}
          />Lẩu thái</label
        >
      </div>
      <div class="activity-item">
        <img src="https://danviet.mediacdn.vn/upload/2-2018/images/2018-05-15/Nhung-mon-ga-ran-ngon-nhat-hanh-tinh-1-1526357898-width650height488.jpg" alt="park.jpeg" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="garan"
            onChange={handleCheckboxChange}
          />Gà rán</label
        >
      </div>
      <div class="activity-item">
        <img src="https://phamvulinh18.github.io/Date/food/sushi.jpeg" alt="park.jpeg" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="sushi"
            onChange={handleCheckboxChange}
          />Sushi</label
        >
      </div>
            </div>
        <button className="button" onClick={handleSubmit}>
              Nộp 
            </button>
        {/* Hiển thị danh sách các label đã chọn */}
    </div>
  );
}

export default Foods;
