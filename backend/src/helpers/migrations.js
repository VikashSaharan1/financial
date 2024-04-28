var bcrypt = require("bcryptjs");

const Migrations = {

    insertRole: (Role) => {
            Role.create({
                id: 1,
                name: "customer",
                is_active: 'Yes'
            }).then().catch(err => {
                console.log(err.message);
              });

            Role.create({
                id: 2,
                name: "admin",
                is_active: 'Yes'
            }).then().catch(err => {
                console.log(err.message);
              });

            Role.create({
                id: 3,
                name: "SuperAdmin",
                is_active: 'Yes'
            }).then().catch(err => {
                console.log(err.message);
              });
       

    },
    createSuperAdmin: (User) => {

            User.create({
                first_name: 'Test1',
                last_name: 'Test2',
                user_name: 'superadmin',
                is_active: 'Yes',
                password: bcrypt.hashSync('Kc#280Dk', 8)
            })
                .then(user => {
                    // admin role = 1
                    user.setRoles([3]).then(() => {
                        console.log("Super Admin was registered successfully!");
                    });
                }).catch(err => {
                    console.log(err.message);
                  });;
        
                  

    }


};

module.exports = Migrations;