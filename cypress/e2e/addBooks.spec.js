const firstBook = {
    title: "Властелин Колец",
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.",
    author: "Дж. Р. Р. Толкин",
  };
  
  const secondBook = {
    title: " Знак кота",
    description:
      "Юный Хинккель из Дома Клаверель, отвергнутый собственной семьей из-за неприспособленности к воинскому ремеслу, находит себе новых сородичей среди песчаных котов - существ, считающихся во Внешних землях едва ли не самыми главными врагами человека. Тем временем над пятью королевствами и всеми правящими Домами империи, которую они составляют, нависает неотвратимая опасность - нашествие огромных полуразумных крыс, безжалостных ко всему живому. Только единение людей и песчаных котов способно остановить угрозу. Но, к сожалению, не все враждующие друг с другом Дома это понимают.",
    author: "Андрэ Нортон",
  };
  
  const thirdBook = {
    title: "Ловец снов",
    description:
      "Бред странного, безумного человека, ворвавшегося в лагерь четверых охотников, - это лишь первый шаг четверых друзей в мир кошмара, далеко превосходящего человеческое понимание. В мир кромешного Ада, правит которым Зло. Абсолютное Зло, пришедшее, дабы нести людям погибель и страх. Зло, единственное оружие против которого кроется в тайной магии старинного индейского амулета - Ловца снов...",
    author: "Стивен Кинг ",
  };
  
  describe("Favorite book spec", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("test@test.com", "test");
    });
      
     //добавляем первую книгу
    it("Should add first book", () => {
      cy.addBook(firstBook);
      cy.get(".card-title").should("contain.text", firstBook.title);
    });
    
    //добовляем вторую книгу
    it("Should add second book", () => {
        cy.addBook(thirdBook);
        cy.get(".card-title").should("contain.text", thirdBook.title);
      });

      //добавляем книгу и помечаем как избранное
    it("Should add new book to favorite", () => {
      cy.addFavoriteBook(secondBook);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", secondBook.title);
    });
  
    //добавлям книгу в избранное из списка имеющихся
    it("Should add book to favorite through 'Book list' page", () => {
    cy.contains(thirdBook.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.visit("/favorites");
      cy.contains(thirdBook.title).should("be.visible");
    });
  
    //удаляем книгу из избранного
    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(thirdBook.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(thirdBook.title).should("not.exist");
    });
    
    //удаляем книгу из избранного
    it("Should delete book from favorite", () => {
        cy.visit("/favorites");
        cy.contains(secondBook.title)
          .should("be.visible")
          .within(() => cy.get(".card-footer > .btn").click({ force: true }));
        cy.contains(secondBook.title).should("not.exist");
      });
  });

 
  
      
   
  