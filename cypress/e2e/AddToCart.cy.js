/// <reference types = 'Cypress'/>
describe("Test", () => {
       it("Title Verify", () => {
              cy.visit("https://demo.nopcommerce.com/");
              cy.title().should("eq", "nopCommerce demo store");
       });

       it("Add To Cart", () => {
              cy.xpath("//input[@id='small-searchterms']").type(
                     "HTC One M8 Android L 5.0 Lollipop"
              );
              cy.xpath("//button[contains(text(),'Search')]").click();
              cy.get(".product-title>a").click();
              cy.xpath("//button[@id='add-to-cart-button-18']").click();
              cy.xpath("//span[contains(text(),'Shopping cart')]").click();
              cy.wait(5000);
              cy.xpath("(//span[@class='value-summary'])[1]").contains(
                     "$245.00"
              );
       });
});
