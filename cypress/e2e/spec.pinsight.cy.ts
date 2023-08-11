import { secrets } from '../../secrets';


describe('Pinsight Website', () => {
    it('should have the correct title', () => {
      cy.visit('/');
      cy.title().should('include', 'Pinsight');
    });

    it('should log secret variables', () => {
        cy.log("email is:", secrets.email);
        cy.log("password is:", secrets.password);
      });

  });
  