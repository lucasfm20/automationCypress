describe("Teste de adicionar item ao carrinho", () => {
  it("Adicionado item  com sucesso", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('a[href="/product_details/1"]').click();
    cy.get("button.cart").click();
    cy.get("#cartModal h4.modal-title").contains("Added");
    cy.get("#cartModal u").click();
    cy.get('#product-1 a[href="/product_details/1"]').contains("Blue Top");
  });
});

describe("Teste de remover item do carrinho", () => {
  it("Item removido  com sucesso", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('a[href="/product_details/1"]').click();
    cy.get("button.cart").click();
    cy.get("#cartModal h4.modal-title").contains("Added");
    cy.get("#cartModal u").click();
    cy.get('#product-1 a[href="/product_details/1"]').contains("Blue Top");
    cy.get("#product-1 i.fa").click();
  });
});

describe("Teste de consulta de produtos via API", () => {
  it("Get de todos os produtos", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

   it("Consulta um produto", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/productsList",
      body:{search_product:'top'}
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
