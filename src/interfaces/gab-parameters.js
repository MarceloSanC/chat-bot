 // Mapeamento do nome da variavel utilizada no Gerenciador Assistente Bix para a respectiva variavel no chatbot
 const mapping = {
    profileImage: "profileImage",
    establishmentName: "businessName",
    phoneNumber: "phoneNumber",
    dayProductsList: "productList.0",
    topDayProductsId: "config.topProductsId.0",
    nightProductsList: "productList.1",
    topNightProductsId: "config.topProductsId.1",
    enableOnlineMenu: "config.serviceOptions",
    menuLink: "config.url.cardapio",
    modality: "config.modality",
    min: "config.tableInterval.min",
    max: "config.tableInterval.max",
    excludedValues: "config.tableInterval.excludedValues",
    satisfactionPoll: "config.serviceOptions.pesquisaSatisfacao",
    enableFAQ: "config.serviceOptions.faq",
    faqLink: "config.url.faq",
    orders: "config.serviceOptions.pedidos",
    cashier: "config.serviceOptions.caixa",
    attendant: "config.serviceOptions.atendente",
    waiter: "config.serviceOptions.garcom",
    onlyTopProducts: "config.serviceOptions.onlyTopProducts",
    productRecommendations: "config.enableRecommendProducts",
    recurringProductsResell: "config.enableRecurrentProducts",
    timeToOfferRecurringProducts: "config.recurrentTime",
}

export default mapping;