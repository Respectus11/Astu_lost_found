const User = require("../models/user");

/**
 * Seeds the database with an initial admin user if none exist
 * This function should be called during server startup
 */
const seedInitialAdmin = async () => {
  try {
    // Check if any admin users already exist
    const adminExists = await User.findOne({ role: "admin" });
    
    if (adminExists) {
    return;
    }

    // Get initial admin credentials from environment variables
    const initialAdminEmail = process.env.INITIAL_ADMIN_EMAIL;
    const initialAdminPassword = process.env.INITIAL_ADMIN_PASSWORD;
    const initialAdminName = process.env.INITIAL_ADMIN_NAME || "System Administrator";


    // Validate environment variables
    if (!initialAdminEmail || !initialAdminPassword) {
      return;
    }

    // Create the initial admin user
    const adminUser = new User({
      name: initialAdminName,
      email: initialAdminEmail,
      password: initialAdminPassword,
      role: "admin"
    });

    await adminUser.save();
    
    
  } catch (error) {
    throw error;
  }
};

module.exports = seedInitialAdmin;