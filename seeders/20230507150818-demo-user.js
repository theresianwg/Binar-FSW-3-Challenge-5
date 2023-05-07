'use strict';

  const bcrypt = require('bcryptjs');
  const User = require('./models/User');
  const Role = require('./models/Role');
  
  const users = [
    {
      username: 'Charlie',
      password: 'charlie123',
      role: 'user'
    },
    {
      username: 'Isyana',
      password: 'isyana123',
      role: 'admin'
    },
    {
      username: 'Hindia',
      password: 'hindia123',
      role: 'superadmin'
    }
  ];
  
  const seed = async () => {
    try {
      // Create roles
      const userRole = await Role.create({
        name: 'user'
      });
  
      const adminRole = await Role.create({
        name: 'admin'
      });
  
      const superAdminRole = await Role.create({
        name: 'superadmin'
      });
  
      // Create users
      for (let i = 0; i < users.length; i++) {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(users[i].password, salt);
  
        // Create user
        const user = await User.create({
          username: users[i].username,
          email: users[i].email,
          password: hashedPassword
        });
  
        // Assign role
        if (users[i].role === 'user') {
          await user.setRole(userRole);
        } else if (users[i].role === 'admin') {
          await user.setRole(adminRole);
        } else if (users[i].role === 'superadmin') {
          await user.setRole(superAdminRole);
        }
      }
  
      console.log('Seed completed');
    } catch (err) {
      console.error(err);
    }
  };
  
  seed();




