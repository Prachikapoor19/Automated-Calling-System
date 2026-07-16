import { useState } from "react";
import { FaPhoneAlt, FaSpinner } from "react-icons/fa";
import { startAICall } from "../api/callApi";

function Dialer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleCall = async () => {
    if (!phoneNumber.trim()) {
      alert("Please enter a phone number.");
      return;
    }

    try {
      setLoading(true);
      setStatus("Calling...");

      const response = await startAICall(phoneNumber);

      console.log("Backend Response:", response);

      setStatus("✅ Call Initiated Successfully");
      alert("Call Initiated Successfully");

    } catch (error) {
      console.error(error);

      setStatus("❌ Call Failed");
      alert(
        error?.response?.data?.detail ||
        "Failed to initiate call."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="fw-bold">📞 Dialer</h2>

      <p className="text-muted">
        Enter a phone number and make a call.
      </p>

      <div className="row justify-content-center mt-4">

        <div className="col-lg-6">

          <div
            className="card border-0 shadow-lg p-4 rounded-4"
          >

            <div className="text-center">

              <div
                className="rounded-circle bg-success text-white mx-auto d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "30px",
                }}
              >
                <FaPhoneAlt />
              </div>

              <h3 className="mt-3">
                AI Dialer
              </h3>

              <p className="text-muted">
                Make a single phone call instantly.
              </p>

            </div>

            <label className="fw-semibold mt-3">
              Phone Number
            </label>

            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="+918840256795"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <button
              className="btn btn-success btn-lg w-100 mt-4"
              disabled={loading}
              onClick={handleCall}
            >
              {loading ? (
                <>
                  <FaSpinner className="me-2" />
                  Calling...
                </>
              ) : (
                <>
                  <FaPhoneAlt className="me-2" />
                  Call Now
                </>
              )}
            </button>

            {status && (
              <div className="alert alert-info mt-4 mb-0">
                {status}
              </div>
            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default Dialer;