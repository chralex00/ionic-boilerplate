describe('MainView', () => {
  it('visiting / app route', () => {
    cy.visit('/');
    cy.contains('#container', 'Explore Ionic Docs');
  });
});
