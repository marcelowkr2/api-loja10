"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          description: "Laço Preto",
          model: "",
          type: "laço",
          price: 39.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 2,
          description: "Laço Cetim Azul",
          model: "",
          type: "laço",
          price: 50.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 3,
          description: "Laço Coral",
          model: "",
          type: "laço",
          price: 50.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 4,
          description: "Laço Veludo Vinho",
          model: "",
          type: "laço",
          price: 70.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 5,
          description: "Laço Cetim Rosa",
          model: "",
          type: "laço",
          price: 38.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 6,
          description: "Laço Xadrez",
          model: "",
          type: "laço",
          price: 38.0,
          weight: null,
          notes:
            "Nosso laço é leve, confortável e delicado para deixar o seu look muito mais interessante. Este delicado acessório pode ser usado no coque, no rabo de cavalo e em diversos penteados criativos. Todas as nossas peças são feitas à mão uma a uma, podendo sofrer pequenas variações. São modelos exclusivos, feitos somente para você!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 8,
          description: "Laço Preto em Cadarço",
          model: "",
          type: "laço",
          price: 25.0,
          weight: null,
          notes:
            "Este laço é fabricado em fita de cadarço duplo com perna bem comprida. O Cadarço é o produto que nunca sai da moda, a tendência pode ser usado em qualquer estação. O Laço é um produto 100% artesanal, feito à mão com todo o carinho. O Laço possui acabamento em bico de pato, fácil de usar podendo ser usado em diferentes texturas de cabelo, pois prende facilmente. Possui aproximadamente 12cm de perna.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 9,
          description: "Tiara Princesa Akosua",
          model: "Princesa Akosua",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes:
            "A tiara turbante voltou para ficar e transforma qualquer look de uma forma simples e prática, podendo ser uma grande aliada de vários penteados. Esta tiara ilumina qualquer look com charme e estilo!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 10,
          description: "Tiara Princesa Charlotte",
          model: "Princesa Charlotte",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes: "Tiara de decoração de strass",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 11,
          description: "Tiara Princesa Mako",
          model: "Princesa Mako",
          type: "tiara",
          price: 80.0,
          weight: null,
          notes:
            "Tiara trançada em veludo azul petróleo com acabamento interno impecável. Um acessório digno de uma princesa!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 12,
          description: "Tiara Princesa Grace Kelly",
          model: "Princesa Grace Kelly",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes: "Tiara de decoração de pérolas artificiais",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 13,
          description: "Tiara Princesa Angela",
          model: "Princesa Angela",
          type: "tiara",
          price: 100.0,
          weight: null,
          notes:
            "Um acessório despojado e confortável, um acessório que pode ser usado em qualquer ocasião que te deixando ainda mais moderna.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 14,
          description: "Tiara Princesa Diana",
          model: "Princesa Diana",
          type: "tiara",
          price: 70.0,
          weight: null,
          notes:
            "Tem acessório para cabelo mais prático do que as tiaras? Além dessa praticidade, elas já mudam completamente o seu penteado de todos os dias e chamam a atenção para o seu look. ",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 15,
          description: "Tiara Princesa Leonor",
          model: "Princesa Leonor",
          type: "tiara",
          price: 70.0,
          weight: null,
          notes:
            "Esta tiara oferece o brilho que traz consigo! Neutra e chique, ela é capaz de transformar aquele look noite em uma variação mais night e baladex.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 16,
          description: "Tiara Princesa Isabel",
          model: "Princesa Isabel",
          type: "tiara",
          price: 65.0,
          weight: null,
          notes:
            "Perfeita para transformar looks e penteados com charme, praticidade & conforto.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 17,
          description: "Boina Preta",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica preta é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 18,
          description: "Boina Branca",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão, a boina lisa básica branca é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 19,
          description: "Boina Vermelha",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica vermelha é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 20,
          description: "Boina Preta com Laço de Veludo",
          model: "",
          type: "boina",
          price: 85.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos com fita de veludo, a boina preta com laço de veludo é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 21,
          description: "Boina Preta com Pérolas",
          model: "",
          type: "boina",
          price: 85.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos com pérolas, a boina preta com pérolas é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 22,
          description: "Boina Azul",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios acrílicos, a boina lisa básica azul é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 23,
          description: "Boina Bege",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão tricotado, esta boina é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 24,
          description: "Boina Roxa",
          model: "",
          type: "boina",
          price: 70.0,
          weight: null,
          notes:
            "Confeccionada em fios de algodão tricotado, esta boina é uma ótima pedida para os dias mais frios. O modelo com textura e barra dobrada garante produções mais aconchegantes nos dias de inverno. Aposte em combinar com um look moderno e confortável!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 25,
          description: "Presilha Gama",
          model: "",
          type: "acessórios",
          price: 25.0,
          weight: null,
          notes:
            "Presilha de cabelo fabricada à mão com base de metal e pedra de resina fabricada no Brasil.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 26,
          description: "Presilha de Strass Prata Vazada",
          model: "",
          type: "acessórios",
          price: 28.0,
          weight: null,
          notes:
            "Presilha de cabelo com pedrinhas de strass pra você brilhar o ano inteiro!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 27,
          description: "Presilha de Strass Prata",
          model: "",
          type: "acessórios",
          price: 28.0,
          weight: null,
          notes:
            "Presilha de cabelo com pedrinhas de strass pra você brilhar o ano inteiro!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 28,
          description: "Piranha Espinha Rosa",
          model: "",
          type: "acessórios",
          price: 15.0,
          weight: null,
          notes: "Piranha Espinha Rosa",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 29,
          description: "Piranha Floral Roxa",
          model: "",
          type: "acessórios",
          price: 15.0,
          weight: null,
          notes: "Piranha Floral Roxa",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 30,
          description: "Xuxinha Vermelha",
          model: "",
          type: "acessórios",
          price: 10.0,
          weight: null,
          notes:
            "Essa xuxinha acende qualquer penteado em seu vermelho aberto cheio de atitude!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 31,
          description: "Xuxinha Vinho com Pérolas",
          model: "",
          type: "acessórios",
          price: 20.0,
          weight: null,
          notes:
            "No veludo com aplicações de pérolas, esta xuxinha não sai do seu cabelo ou pulso e te acompanha em qualquer ocasião deixando o look chic  cool.",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 32,
          description: "Xuxinha preta",
          model: "",
          type: "acessórios",
          price: 20.0,
          weight: null,
          notes:
            "Xuxinha com laço removível na cor preta, uma peça chic para você se divertir em diferentes ocasiões e segurar as madeixas com conforto e estilo!",
          overall_evaluation: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
