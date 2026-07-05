import { FaFileUpload } from "react-icons/fa";

function UploadCard() {

  const handleFileChange = async (event) => {
    console.log("UPLOAD INPUT CLICKED");

    const file = event.target.files[0];
    console.log("SELECTED FILE:", file);

    // ❗ safety check
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/upload-csv", {
        method: "POST",
        body: formData,
      });

      // response handle
      const data = await res.json();
      console.log("BACKEND RESPONSE:", data);

    } catch (error) {
      console.error("UPLOAD FAILED:", error);
    }
  };

  return (
    <div className="card upload-card h-100">

      <h3>Upload CSV File</h3>

      <p className="text-muted">
        Upload a CSV file containing phone numbers for automated calling.
      </p>

      <div className="upload-box">

        <FaFileUpload
          size={45}
          color="#4f46e5"
          style={{ marginBottom: "15px" }}
        />

        <h5>Drag & Drop CSV File</h5>

        <p className="text-muted">
          or click below to browse
        </p>

        <label className="btn btn-primary w-100">
          Choose CSV File

          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleFileChange}
          />
        </label>

      </div>
    </div>
  );
}

export default UploadCard;