export const AboutData: Array<IAboutData> = [
  {
    title: 'Fichipizza',
    desc: `A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey
    and arugula.`,
    sideTitle: 'Our Unique Culinary Creations'
  }, {
    title: 'Weekend Grand Buffet',
    desc: `Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five
     choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person`,
    sideTitle: 'This Month\'s Promotions'
  }, {
    title: 'Tommy McHugh',
    desc: `<p><strong>Executive Chef</strong></p> <p>Award winning three-star Michelin chef with wide International experience having
      worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.</p>`,
    sideTitle: 'Meet our Culinary Specialists'
  }
];

export interface IAboutData {
  title: string;
  desc: string;
  sideTitle: string;
}

export const Links: Array<ILinks> = [
  {
    route: 'home',
    title: 'Home',
    icon: 'home'
  },
  {
    route: 'about',
    title: 'About',
    icon: 'info'
  },
  {
    route: 'menu-items',
    title: 'Menu',
    icon: 'arrow_drop_down'
  },
  {
    route: 'contact',
    title: 'Contact',
    icon: 'contact_phone'
  }
];

export interface ILinks {
  route: string;
  title: string;
  icon: string;
}
