import Image from 'next/image';
import vk from '../../public/VK.svg';
import telegram from '../../public/Telegram.svg';
import whatsupp from '../../public/Whatsapp.svg';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/*<div className={classes.icons_social}>*/}
      {/*  <span>*/}
      {/*    <Image src={vk} alt="it is vk icon" width="31" height="21" />*/}
      {/*  </span>*/}
      {/*  <span>*/}
      {/*    <Image src={telegram} alt="it is telegram icon" width="31" height="31" />*/}
      {/*  </span>*/}
      {/*  <span>*/}
      {/*    <Image src={whatsupp} alt="it is whatsupp icon" width="31" height="31" />*/}
      {/*  </span>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
