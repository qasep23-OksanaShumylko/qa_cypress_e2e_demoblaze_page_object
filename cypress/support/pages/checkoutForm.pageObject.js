import PageObject from '../PageObject';

class CheckoutFormPageObject extends PageObject {
  url = '/index.html';

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get okBtn() {
    return cy.get('.confirm');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, {force: true});
  }

  typeCity(city) {
    this.cityField.type(city, {force: true});
  }

  typeCreditCard(card) {
    this.creditCardField.type(card, {force: true});
  }

  typeMonth(month) {
    this.monthField.type(month, {force: true});
  }

  typeYear(year) {
    this.yearField.type(year, {force: true});
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }

}

export default CheckoutFormPageObject;