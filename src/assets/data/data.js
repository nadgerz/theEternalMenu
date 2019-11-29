import mockImage from '../imgs/iu-1.jpeg';
import mockImage2 from '../imgs/iu-2.jpeg';
import mockImage3 from '../imgs/iu-3.jpeg';

const mockData = {
  user: {
    recipes: [
      {
        title: 'Eggs On Toast',
        img: mockImage,
        favourite: false,
      },
      {
        title: 'Boiled Eggs',
        img: mockImage2,
        favourite: true,
      },
      {
        title: 'Scrambled Eggs',
        img: mockImage3,
        favourite: false,
      },
    ],
  },
};

export default mockData;
