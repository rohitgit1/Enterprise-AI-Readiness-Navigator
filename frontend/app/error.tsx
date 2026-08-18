"use client";

import { useEffect, useState } from "react";
export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [countdown, setCountdown] = useState(5);
    useEffect(() => {
          console.error("EAIRN Error caught by boundary:", error);

                  const timer = setInterval(() => {
                          setCountdown((prev) => {
                                    if (prev <= 1) {
                                                clearInterval(timer);
                                                window.location.reload();
                                                return 0;
                                    }
                                    return prev - 1;
                          });
                  }, 1000);

                  return () => clearInterval(timer);
    }, [error]);
    return (
          <div
                  style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "70vh",
                            textAlign: "center",
                            padding: "2rem",
                            color: "#ffffff",
                  }}
                >
                <div
                          style={{
                                      width: "56px",
                                      height: "56px",
                                      borderRadius: "50%",
                                      border: "4px solid rgba(255, 255, 255, 0.15)",
                                      borderTopColor: "#3b82f6",
                                      animation: "spin 1s linear infinite",
                                      marginBottom: "1.5rem",
                          }}
                        />
                <style>{`
                        @keyframes spin {
                                  to { transform: rotate(360deg); }
                                          }
                                                `}</style>
          
                <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                        Connecting to EAIRN Assessment Services
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                        The assessment services are warming up. Your view is loading and will refresh automatically.
                </p>
                <div
                          style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "0.5rem",
                                      fontSize: "0.95rem",
                                      color: "rgba(255, 255, 255, 0.5)",
                                      marginBottom: "2rem",
                          }}
                        >
                        Auto-refreshing in <strong>{countdown}s</strong>
                </div>
                <button
                          onClick={() => reset()}
                          style={{
                                      padding: "0.6rem 1.5rem",
                                      fontSize: "0.95rem",
                                      fontWeight: 500,
                                      backgroundColor: "#3b82f6",
                                      color: "#ffffff",
                                      border: "none",
                                      borderRadius: "0.375rem",
                                                  cursor: "pointer",
                                      transition: "background-color 0.2s",
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
                        >
                        Reload Now
                </button>
                      </div>
  );
}

