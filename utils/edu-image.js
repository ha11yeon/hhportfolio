import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';



export const EduImage = (edu) => {
    const eduID = edu.toLowerCase();
    switch (eduID) {
      case 'c':
        return c;
      case 'bulma':
        return bulma;
      case 'bootstrap':
        return bootstrap;
       

      default:
      break;
    }
  }
  