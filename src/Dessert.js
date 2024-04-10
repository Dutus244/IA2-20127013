import React, { useState } from "react";
import "./Activities.css";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions for adding document
import { db } from "./firebase";

function Desserts() {
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
        const docRef = await addDoc(collection(db, "desserts"), {
            activities: mergedActivities
        });

        console.log("Activities added successfully with ID: ", docRef.id);
        window.location.href = '/lastpage';
        // Redirect to the activities page
    } catch (error) {
        console.error("Error adding activities: ", error);
    }
};

  return (
    <div className="Activities">
        <div id="activityquestion">
          <b>Đến móng tráng miệng</b>
        </div>
        <div class="activities-selection">
        <div class="activity-item">
            <img src="https://mixuediemdien.com/wp-content/uploads/2023/07/Kem-Oc-Que.jpg" alt="aquarium" />
            <label>
              <input
                type="checkbox"
                name="activities"
                value="kem"
                onChange={handleCheckboxChange}
              />
              Kem
            </label>
          </div>
          <div class="activity-item">
            <img src="https://cdn.tgdd.vn/Files/2021/03/06/1333070/cach-lam-banh-taiyaki-banh-ca-nhat-ban-thom-ngon-don-gian-tai-nha-202103061639240947.jpg" alt="arcade" />
            <label>
              <input
                type="checkbox"
                name="activities"
                value="banh ca"
                onChange={handleCheckboxChange}
              />
              Bánh cá
            </label>
          </div>
          <div class="activity-item">
        <img src="https://phamvulinh18.github.io/Date/food/che.jpeg" alt="cinema" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="che"
            onChange={handleCheckboxChange}
          />Chè</label
        >
      </div>
      <div class="activity-item">
        <img src="https://phamvulinh18.github.io/Date/food/mochi.jpeg" alt="cinema" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="mochi"
            onChange={handleCheckboxChange}
          />Mochi</label
        >
      </div>
      <div class="activity-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ctKFokkPgH6MChNK4U5FdjJalxzIwSzUtA&s" alt="cinema" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="trasua"
            onChange={handleCheckboxChange}
          />Tà Tữaaaa</label
        >
      </div>
      <div class="activity-item">
        <img src="https://bepxua.vn/wp-content/uploads/2020/10/tau_hu_nuoc_duong-1.jpg.webp" alt="park.jpeg" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="tauhu"
            onChange={handleCheckboxChange}
          />Tàu hũ</label
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

export default Desserts;
