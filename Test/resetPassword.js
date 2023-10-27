const axios = require('axios');

async function resetPassword(resetLink, newPassword) {
  try {
    const response = await axios.post('https://omniwallet.tngbl.xyz/reset-password', {
      resetLink,
      newPassword,
    });
    return response.data;
  } catch (error) {
    // Handle any error, e.g., log it or return an error response
    console.error('Error resetting password:', error);
    throw error;
  }
}

module.exports = resetPassword;
