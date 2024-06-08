import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

export const navItems: string[] = ['Home', 'About me', 'Star Wors', 'Contacts']
//повторяющиеяся сущности, служебные инструменты
//массив строк навигационного меню

interface FriendImage {
    id: number;
    url: string;
    alt: string;
    className?: string; // className необязательное поле
  }

export const friendsImages: FriendImage[]= [ {
    id: 1,
    url: friend1,
    alt: 'friend1',
  },
  {
    id: 2,
    url: friend2,
    alt: 'friend2',
  },
  {
    id: 3,
    url: friend3,
    alt: 'friend3',
  },
  {
    id: 4,
    url: friend4,
    alt: 'friend4',
  },
  {
    id: 5,
    url: friend5,
    alt: 'friend5',
  },
  {
    id: 6,
    url: friend6,
    alt: 'friend6',
  },
  {
    id: 7,
    url: friend7,
    alt: 'friend7',
    className: 'bottomLeft',
  },
  {
    id: 8,
    url: friend8,
    alt: 'friend8',
  },
  {
    id: 9,
    url: friend9,
    alt: 'friend9',
    className: 'bottomRight',
  },
];
