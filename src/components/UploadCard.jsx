import { FaFileUpload } from "react-icons/fa";

function UploadCard() {
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

        <input
          className="form-control my-3"
          type="file"
          accept=".csv"
        />

        <button className="btn btn-primary w-100">
          Choose CSV File
        </button>

      </div>
    </div>
  );
}

export default UploadCard;
