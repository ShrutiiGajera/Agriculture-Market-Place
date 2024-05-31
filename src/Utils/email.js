export const sendOTPEmail = (email, otp) => {
    return new Promise((resolve, reject) => {
        // Implement the logic to send the email here
        // For example, you can use Firebase's email sending functionality or any other email service
        
        // Placeholder implementation
        setTimeout(() => {
            console.log(`Sending OTP ${otp} to ${email}`);
            alert("OTP :"+otp);
            resolve(); // Resolve the promise if email sending is successful
        }, 2000); // Simulate sending email after 2 seconds
    });
};