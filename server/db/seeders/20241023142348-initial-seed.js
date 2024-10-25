const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        email: 'john@example.com',
        password: bcrypt.hashSync('123', 10),
      },
      {
        name: 'Jane',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123', 10),
      },
    ]);
    await queryInterface.bulkInsert('Watches', [
      {
        name: 'Rolex Submariner',
        image:
          'https://img.chrono24.com/images/uhren/35610334-s2i1etk2mog2swoegw7doxbx-ExtraLarge.jpg',
        description:
          'Классические наручные часы Rolex Submariner с водонепроницаемым корпусом и автоматическим механизмом. Идеально подходят для повседневного ношения и активного отдыха.',
      },
      {
        name: 'Omega Speedmaster',
        image:
          'https://www.watchgecko.com/cdn/shop/articles/Speedmaster-on-Bracelet.jpg?v=1696339447',
        description:
          "Наручные часы Omega Speedmaster, известные как 'Moonwatch', с хронографом и автоматическим механизмом. Часы, которые были на Луне, подходят для любителей космоса и точности.",
      },
      {
        name: 'Tag Heuer Carrera',
        image:
          'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwa9c595c3/TAG_Heuer_Carrera/CBN2A1B.BA0643/CBN2A1B.BA0643_USP3.png',
        description:
          'Спортивные наручные часы Tag Heuer Carrera с хронографом и автоматическим механизмом. Идеально подходят для активного образа жизни и любителей автоспорта.',
      },
      {
        name: 'Breitling Navitimer',
        image:
          'https://www.breitling.com/media/image/4/gallery_square_700/asset-version-60718cef0f/navitimer-41-gmt-a32310171c1p1-ice-blue-leather-wrist-shot-ecom.png',
        description:
          'Наручные часы Breitling Navitimer с хронографом и автоматическим механизмом. Часы, разработанные для пилотов, с множеством функций и стильным дизайном.',
      },
      {
        name: 'Patek Philippe Nautilus',
        image:
          'https://djonwatch.ru/wp-content/uploads/2024/07/Screenshot_465.jpg',
        description:
          'Элегантные наручные часы Patek Philippe Nautilus с автоматическим механизмом и водонепроницаемым корпусом. Идеально подходят для повседневного ношения и активного отдыха.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
