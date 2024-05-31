// utils/otp.js
export function generateOTP() {
    // Generate and return an OTP (e.g., a random 6-digit number)
    return Math.floor(100000 + Math.random() * 900000);
}