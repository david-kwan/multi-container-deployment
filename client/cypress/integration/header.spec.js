describe('Header test', () => {
  it('should render on page', () => {
    cy.visit(
      'http://multicontainerdeployment-env.2rajmvpmt8.us-east-1.elasticbeanstalk.com/'
    );

    cy.get('h1').should('contain', "David's Blog");
  });
});
