import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";
import { uploadCSV } from "../api/callApi";

// ✅ Prachi, yahan { setNumbers } likha hai, isliye red line chali jayegi
function UploadCard({ setNumbers }) { 
  const [uploaded, setUploaded] = useState(false);
  const [numbers, setNumbersList] = useState([]);

  const handleFileChange = async (event) => {
    console.log("UPLOAD INPUT CLICKED");
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const data = await uploadCSV(formData);
      console.log("BACKEND RESPONSE:", data);
      
      setUploaded(true);

      if (data.contacts) {
        // ✅ Ye Dashboard ko data bhejega
        setNumbers(data.contacts); 
        
        // ✅ Ye UI pe list dikhayega
        setNumbersList(data.contacts.map(c => c.phone)); 
        
        // ✅ LocalStorage mein save taaki Control component utha sake
        localStorage.setItem("campaignContacts", JSON.stringify(data.contacts)); 
      }

      alert("CSV Uploaded Successfully");
    } catch (error) {
      console.error("UPLOAD FAILED:", error);
      alert("CSV Upload Failed");
    }
  };

  return (
    <div className="card upload-card h-100">
      <h3>Upload CSV File</h3>
      <p className="text-muted">Upload a CSV file containing phone numbers for automated calling.</p>
      
      <div className="upload-box">
        <FaFileUpload size={45} color="#4f46e5" style={{ marginBottom: "15px" }} />
        <h5>Drag & Drop CSV File</h5>
        <p className="text-muted">or click below to browse</p>
        
        <label className="btn btn-primary w-100">
          Choose CSV File
          <input type="file" accept=".csv" hidden onChange={handleFileChange} />
        </label>

        {uploaded && <p className="text-success mt-3">✅ CSV Uploaded Successfully</p>}

        {numbers.length > 0 && (
          <div className="mt-3">
            <h6>Uploaded Numbers</h6>
            <ul className="text-start">
              {numbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadCard;