
(function(){
  const LANG_KEY = "artel_lang_v1";
  const RU_TO_EN = {
  "Главная": "Home",
  "Каталог": "Catalog",
  "Художники": "Artists",
  "Художники «Артель»": "Artel Artists",
  "Сотрудничество": "Cooperation",
  "Как купить": "How to Buy",
  "Отзывы": "Reviews",
  "Контакты": "Contacts",
  "Корзина": "Cart",
  "Избранное": "Favorites",
  "Галерея «Артель» — Оригинальные картины": "Artel Gallery — Original Paintings",
  "Каталог — Галерея «Артель»": "Catalog — Artel Gallery",
  "Художники — Галерея «Артель»": "Artists — Artel Gallery",
  "Как купить — Галерея «Артель»": "How to Buy — Artel Gallery",
  "Отзывы — Галерея «Артель»": "Reviews — Artel Gallery",
  "Контакты — Галерея «Артель»": "Contacts — Artel Gallery",
  "Сотрудничество — Галерея «Артель»": "Cooperation — Artel Gallery",
  "Корзина — Галерея «Артель»": "Cart — Artel Gallery",
  "Избранное — Галерея «Артель»": "Favorites — Artel Gallery",
  "Подбор по интерьеру — Галерея «Артель»": "Interior Selection — Artel Gallery",
  "Сервис подбора": "Selection service",
  "Подбор картины по интерьеру": "Painting selection by interior",
  "Этот раздел помогает подобрать работу под конкретное помещение. Выберите параметры интерьера, а сайт покажет наиболее подходящие картины из каталога.": "This section helps you choose a work for a specific room. Select the interior parameters, and the site will show the most suitable paintings from the catalog.",
  "Параметры подбора": "Selection parameters",
  "Укажите тип помещения, стиль, технику, бюджет и цветовую гамму.": "Specify the room type, style, technique, budget, and color palette.",
  "Тип помещения": "Room type",
  "Размер": "Size",
  "Стиль": "Style",
  "Бюджет": "Budget",
  "Цветовая гамма": "Color palette",
  "Не выбрано": "Not selected",
  "Гостиная": "Living room",
  "Спальня": "Bedroom",
  "Кабинет": "Study",
  "Кухня": "Kitchen",
  "Маленькая": "Small",
  "Средняя": "Medium",
  "Большая": "Large",
  "Классика": "Classic",
  "Современный": "Contemporary",
  "Абстракция": "Abstract",
  "До 20 000 ₽": "Up to 20,000 ₽",
  "До 50 000 ₽": "Up to 50,000 ₽",
  "От 50 000 ₽": "From 50,000 ₽",
  "Тёплая": "Warm",
  "Холодная": "Cool",
  "Нейтральная": "Neutral",
  "Подобрать": "Select",
  "Результаты подбора": "Selection results",
  "Система показывает работы, наиболее подходящие под выбранные параметры.": "The system shows the works that best match the selected parameters.",
  "По выбранным параметрам ничего не найдено. Попробуйте изменить условия подбора.": "No works were found for the selected parameters. Try changing the selection criteria.",
  "Перейдите в специальный раздел и выберите параметры помещения, стиля и бюджета.": "Go to the dedicated section and choose the room, style, and budget parameters.",
  "Открыть подбор": "Open selection",
  "Кол-во:": "Qty:",
  "Удалить": "Remove",
  "Оригинальные работы в наличии": "Original works available",
  "Оригинальные работы художников Екатеринбурга.": "Original works by Yekaterinburg artists.",
  "Подбираем картины для дома, офиса и в подарок. Все работы можно посмотреть в галерее или выбрать на сайте.": "We select paintings for home, office, and gifts. All works can be viewed in the gallery or chosen on the website.",
  "Отправить фото интерьера": "Send an interior photo",
  "Самовывоз": "Pickup",
  "ЦУМ, Банковский переулок, д. 3, 1 этаж": "TSUM, Bankovsky Lane, 3, 1st floor",
  "Оплата и возврат": "Payment and returns",
  "Оплата при получении в галерее. Возврат — в течение 14 рабочих дней.": "Payment upon pickup at the gallery. Return is possible within 14 working days.",
  "500+": "500+",
  "реализованных заказов": "completed orders",
  "В наличии": "In stock",
  "без ожидания и предзаказов": "no waiting or pre-orders",
  "Бесплатная": "Free",
  "доставка по городу": "city delivery",
  "Яндекс и Google": "Yandex and Google",
  "Почему выбирают «Артель»": "Why choose Artel",
  "Мы работаем как галерея, а не как “посредник”: живые работы, понятные условия, аккуратная выдача и доставка.": "We work as a gallery, not as an intermediary: real works, clear conditions, careful pickup and delivery.",
  "Обновление ассортимента каждую неделю.": "Assortment updates every week.",
  "Оригинальные работы: масло, живопись, вышивка.": "Original works: oil, painting, embroidery.",
  "Художники из Екатеринбурга и области.": "Artists from Yekaterinburg and the region.",
  "Подбор под интерьер по фото комнаты.": "Selection to match the interior using a room photo.",
  "Помощь с выбором рамы (при необходимости).": "Help with choosing a frame if needed.",
  "Аккуратная упаковка и сопровождение до получения.": "Careful packaging and support until pickup.",
  "Быстрый ориентир": "Quick overview",
  "Срок подбора": "Selection time",
  "в течение дня": "within a day",
  "Рама при необходимости": "Frame if needed",
  "около 1 недели": "about 1 week",
  "Возврат": "Return",
  "14 рабочих дней": "14 working days",
  "Подбор картины под интерьер": "Painting selection for your interior",
  "Если сложно выбрать по фото, отправьте снимок комнаты и место, где будет висеть работа — подберём несколько вариантов из наличия.": "If it is difficult to choose from photos, send a picture of the room and the place where the painting will hang — we will select several available options.",
  "Фото комнаты и стены/места под картину.": "Photo of the room and the wall/place for the painting.",
  "Бюджет и любимые цвета.": "Budget and preferred colors.",
  "Несколько вариантов в течение дня.": "Several options within a day.",
  "Уточнить по доставке": "Ask about delivery",
  "Что вы получите": "What you will get",
  "3–7 вариантов": "3–7 options",
  "под вашу комнату": "for your room",
  "Только наличие": "Only items in stock",
  "без ожидания": "no waiting",
  "Подбор по стилю": "Selection by style",
  "цвет, формат, настроение": "color, format, mood",
  "Сопровождение": "Support",
  "до получения": "until pickup",
  "Оригинальные работы в наличии. Самовывоз: Екатеринбург, ЦУМ, Банковский переулок, д. 3, 1 этаж.": "Original works in stock. Pickup: Yekaterinburg, TSUM, Bankovsky Lane, 3, 1st floor.",
  "Поиск": "Search",
  "Техника": "Technique",
  "Все": "All",
  "Масло": "Oil",
  "Акрил": "Acrylic",
  "Акварель": "Watercolor",
  "Гуашь": "Gouache",
  "Смешанная техника": "Mixed media",
  "Сортировка": "Sorting",
  "По умолчанию": "Default",
  "Цена: по возрастанию": "Price: low to high",
  "Цена: по убыванию": "Price: high to low",
  "Название: А—Я": "Title: A–Z",
  "Сбросить": "Reset",
  "Найдено: 0": "Found: 0",
  "Нажмите на картину, чтобы открыть в большом размере": "Click a painting to view it larger",
  "Ничего не найдено. Попробуй очистить фильтры или изменить запрос.": "Nothing found. Try clearing filters or changing the query.",
  "Название, художник, техника…": "Title, artist, technique…",
  "Художник:": "Artist:",
  "Размер:": "Size:",
  "Купить": "Buy",
  "В корзину": "To cart",
  "Добавлено": "Added",
  "В избранное": "Add to favorites",
  "В избранном": "In favorites",
  "Убрать": "Remove",
  "Здесь собраны картины, которые вы сохранили, чтобы вернуться к ним позже.": "Here are the paintings you saved to return to later.",
  "В избранном пока ничего нет.": "There is nothing in favorites yet.",
  "ГАЛЕРЕЯ «АРТЕЛЬ»": "ARTEL GALLERY",
  "Авторы, чьи работы представлены в каталоге.": "Artists whose works are featured in the catalog.",
  "художники Екатеринбурга": "Yekaterinburg artists",
  "реальные впечатления": "real impressions",
  "Отзывы наших клиентов": "Reviews from our clients",
  "Самовывоз и консультации в галерее. По заявкам с сайта мы связываемся и уточняем детали получения.": "Pickup and consultations at the gallery. For website requests, we contact you and clarify pickup details.",
  "Адрес": "Address",
  "г. Екатеринбург": "Yekaterinburg",
  "Телефон": "Phone",
  "Основной канал связи": "Main communication channel",
  "VK": "VK",
  "Можно написать в сообщения": "You can message us",
  "Время работы": "Opening hours",
  "выходной": "closed",
  "Как добраться": "How to get there",
  "Мы находимся в магазине «ЦУМ.Мир ткани», на первом этаже (Банковский переулок, 3). В здании два входа: со стороны станции метро «Площадь 1905 года» и со стороны Пассажа.": "We are located in the TSUM.Mir tkani store on the first floor (Bankovsky Lane, 3). The building has two entrances: from the Ploshchad 1905 Goda metro side and from the Passage side.",
  "Связь": "Contact",
  "По заявкам с сайта владелец связывается с клиентом и уточняет детали.": "For website requests, the owner contacts the client and clarifies the details.",
  "Написать в VK": "Write on VK",
  "Екатеринбург": "Yekaterinburg",
  "галерея «артель»": "artel gallery",
  "Сотрудничество для художников": "Cooperation for artists",
  "Мы работаем с авторами из Екатеринбурга и Урала и помогаем довести работы до покупателя: от отбора и презентации до продажи и передачи клиенту. Если у вас есть готовая серия работ или вы ищете площадку для постоянного сотрудничества — отправьте заявку.": "We work with authors from Yekaterinburg and the Urals and help bring works to the buyer: from selection and presentation to sale and handover. If you have a ready-made series of works or are looking for a platform for ongoing cooperation, send an application.",
  "Что мы предлагаем": "What we offer",
  "размещение работ в каталоге интернет-магазина": "placement of works in the online store catalog",
  "оформление карточек: описание, техника, размеры, цена": "preparation of product cards: description, technique, sizes, price",
  "продвижение через соцсети и рекомендации покупателям": "promotion through social media and customer recommendations",
  "помощь в подборе работ под интерьер и запрос клиента": "help selecting works for an interior and customer request",
  "прозрачные условия взаимодействия и фиксация договорённостей": "transparent cooperation terms and clear agreements",
  "аккуратная передача работ покупателю (самовывоз/доставка по договорённости)": "careful handover of works to the buyer (pickup/delivery by agreement)",
  "Как подать заявку": "How to apply",
  "Подготовьте портфолио": "Prepare a portfolio",
  "10–20 работ (ссылкой или архивом), 2–3 фото каждой работы (общий вид и фрагмент), а также список с названиями, размерами, техникой и ценами.": "10–20 works (via link or archive), 2–3 photos of each work (overall view and fragment), and a list with titles, sizes, techniques, and prices.",
  "Добавьте информацию о себе": "Add information about yourself",
  "Короткая биография, город, участие в выставках (если есть), ссылки на соцсети/сайт, предпочтительный способ связи.": "Short biography, city, exhibition participation (if any), links to social media/website, preferred contact method.",
  "Отправьте заявку": "Send an application",
  "Контакты для сотрудничества указаны на странице «Контакты». Мы свяжемся с вами после просмотра материалов.": "Cooperation contacts are listed on the Contacts page. We will contact you after reviewing the materials.",
  "Согласуем условия": "Agree on terms",
  "Обсуждаем формат размещения, комиссии/условия продажи, сроки обновления наличия и порядок передачи работ.": "We discuss the placement format, commission/sale terms, timing of stock updates, and handover procedure.",
  "Перейти к контактам": "Go to contacts",
  "Посмотреть художников «Артель»": "View Artel artists",
  "Требования к материалам": "Requirements for materials",
  "фото работ без сильных бликов и искажений перспективы (желательно дневной свет)": "photos of works without strong glare and perspective distortion (preferably daylight)",
  "размеры указывать в см (например: 50 × 70 см)": "specify sizes in cm (for example: 50 × 70 cm)",
  "техника и основа: масло/акрил/акварель/гуашь и т.п., холст/бумага/картон": "technique and base: oil/acrylic/watercolor/gouache, etc.; canvas/paper/cardboard",
  "состояние работы: в раме/без рамы, нужна ли упаковка для передачи": "condition of the work: framed/unframed, whether packaging is needed for handover",
  "цена и наличие должны быть актуальны (если работа продана — сообщать заранее)": "price and availability must be up to date (if a work is sold, please inform us in advance)",
  "Рассмотрение заявки": "Review of application",
  "Отбор работ проводится по качеству исполнения, целостности серии и соответствию тематике галереи. Мы не “переоформляем” ваши работы без согласования: любые изменения в описаниях, цене и наличии — только по договорённости.": "Works are selected based on quality of execution, integrity of the series, and relevance to the gallery theme. We do not change your works without approval: any changes in descriptions, price, and availability are made only by agreement.",
  "Если материалов много, удобнее прислать ссылку на папку (облако) и отдельным файлом список работ (название, техника, размер, цена).": "If there are many materials, it is more convenient to send a link to a folder (cloud storage) and a separate file with the list of works (title, technique, size, price).",
  "Коротко и по делу: как оформить заказ, получить работу, и какие условия по оплате и возврату.": "Briefly and clearly: how to place an order, receive the work, and what the payment and return terms are.",
  "Оформление заказа": "Order placement",
  "Покупка картины в галерее «Артель» оформляется через форму в корзине на сайте.": "The purchase of a painting in the Artel gallery is completed through the cart form on the website.",
  "Перейдите в «Каталог» и выберите понравившуюся работу.": "Go to the Catalog and choose the work you like.",
  "Нажмите «Купить» или добавьте работу в корзину.": "Click Buy or add the work to the cart.",
  "Откройте раздел «Корзина» и проверьте выбранные позиции.": "Open the Cart section and check the selected items.",
  "Заполните форму: имя, телефон и адрес (если нужна доставка).": "Fill in the form: name, phone number, and address (if delivery is needed).",
  "Нажмите «Оформить заказ». После отправки мы связываемся с вами для подтверждения деталей.": "Click Place Order. After submission, we contact you to confirm the details.",
  "Способы получения": "Delivery options",
  "Екатеринбург, ЦУМ, Банковский переулок, д. 3, 1 этаж (Контакты).": "Yekaterinburg, TSUM, Bankovsky Lane, 3, 1st floor (Contacts).",
  "Доставка": "Delivery",
  "По Екатеринбургу — бесплатно. Доставка выполняется в течение 3 рабочих дней. По РФ доставка не осуществляется.": "Within Yekaterinburg — free of charge. Delivery is carried out within 3 business days. Delivery across Russia is not available.",
  "Оплата": "Payment",
  "Есть два варианта оплаты при получении:": "There are two payment options upon receipt:",
  "наличными": "cash",
  "банковской картой": "bank card",
  "Возврат возможен в течение 14 дней с момента получения.": "Return is possible within 14 days from receipt.",
  "Важно": "Important",
  "все работы в каталоге — оригинальные": "all works in the catalog are original",
  "перед передачей картины проверяются": "paintings are checked before handover",
  "при необходимости поможем с подбором под интерьер": "if needed, we will help select a work for the interior",
  "Перейти в каталог": "Go to catalog",
  "Связаться с нами": "Contact us",
  "Корзина пуста.": "Cart is empty.",
  "Итого": "Total",
  "Сумма:": "Total:",
  "Оплата при получении. Заявка уходит владельцу, затем мы связываемся с вами для подтверждения.": "Payment upon receipt. The order request is sent to the owner, then we contact you for confirmation.",
  "Оформление доставки": "Delivery details",
  "Имя": "Name",
  "Адрес доставки": "Delivery address",
  "Комментарий (необязательно)": "Comment (optional)",
  "Оформить заказ": "Place order",
  "Очистить корзину": "Clear cart",
  "Спасибо за заказ!": "Thank you for your order!",
  "Мы получили заявку. С вами скоро свяжутся для подтверждения.": "We have received your request. We will contact you shortly to confirm it.",
  "Не получилось отправить": "Could not send",
  "Проверьте интернет и попробуйте ещё раз.": "Check your internet connection and try again.",
  "Иван": "Ivan",
  "Город, улица, дом, квартира": "City, street, building, apartment",
  "Подъезд, домофон, удобное время...": "Entrance, intercom, convenient time...",
  "Количество:": "Quantity:",
  "Стоимость:": "Cost:",
  "Корзина пуста": "Cart is empty",
  "Отправляем...": "Sending...",
  "Марина Береснева": "Marina Beresneva",
  "Елена Лейканд": "Elena Leikand",
  "Наталья Мызникова": "Natalia Myznikova",
  "Мария Мешбанк": "Maria Meshbank",
  "Нашла галерею случайно, хотела подобрать картину в гостиную. Помогли определиться с форматом и цветовой гаммой, показали несколько вариантов. Заказ оформили быстро, после отправки заявки связались и уточнили детали. Работа пришла в отличном состоянии, упаковка надежная.": "I found the gallery by chance and wanted to choose a painting for my living room. They helped me decide on the format and color scheme and showed several options. The order was placed quickly; after I sent the request, they contacted me and clarified the details. The work arrived in excellent condition and the packaging was reliable.",
  "В 2011 году друзья подарили мне картину на день рождения, и я долго не могла подобрать подходящий вариант оформления и размещения. Здесь помогли с рекомендациями по стилю и сочетанию с интерьером. Очень внимательное отношение и профессиональный вкус. Большое спасибо за аккуратную работу и консультацию.": "In 2011, my friends gave me a painting for my birthday, and for a long time I could not find the right framing and placement option. Here they helped with recommendations on style and matching it to the interior. Very attentive attitude and professional taste. Many thanks for the careful work and consultation.",
  "Долго выбирала подарок — нужна была небольшая картина в спокойных тонах. В каталоге удобно искать и сравнивать, описание понятное. После оформления заявки перезвонили, подтвердили заказ и согласовали получение. Результатом довольна, качество отличное.": "I was choosing a gift for a long time — I needed a small painting in calm colors. The catalog is convenient for searching and comparing, and the description is clear. After placing the request, they called back, confirmed the order, and agreed on pickup. I am happy with the result; the quality is excellent.",
  "Очень приятное общение и быстрый отклик. Помогли подобрать картину под интерьер, объяснили нюансы по размеру и цвету. Все сделали аккуратно, спасибо!": "Very pleasant communication and a quick response. They helped choose a painting for the interior and explained the nuances of size and color. Everything was done carefully, thank you!",
  "Виталий Волович": "Vitaly Volovich",
  "Миша Брусиловский": "Misha Brusilovsky",
  "Герман Метелев": "German Metelev",
  "Геннадий Мосин": "Gennady Mosin",
  "Алексей Рыжков": "Alexey Ryzhkov",
  "Андрей Елецкий": "Andrey Eletsky",
  "Алексей Ефремов": "Alexey Efremov",
  "Старик Букашкин": "Starik Bukashkin",
  "Михаил Сажаев": "Mikhail Sazhaev",
  "Кирилл Бородин": "Kirill Borodin",
  "Виктор Корьякин": "Viktor Koryakin",
  "Классик уральской школы графики и живописи. В работах — точная линия, сильная композиция и характерный, узнаваемый художественный язык. В «Артели» мы ценим Воловича за интеллектуальную выразительность и уверенную авторскую манеру.": "A classic of the Ural school of graphics and painting. His works feature precise lines, strong composition, and a distinctive artistic language. At Artel, we value Volovich for his intellectual expressiveness and confident authorial manner.",
  "Один из самых ярких уральских живописцев второй половины ХХ века. Его творчество узнаётся по насыщенному колориту, экспрессии и мощной образности. В нашей подборке — автор, который всегда работает «на эмоцию» и держит внимание сюжетом и цветом.": "One of the brightest Ural painters of the second half of the twentieth century. His work is recognizable by its rich color, expression, and powerful imagery. In our selection, he is an author who always works through emotion and holds attention with plot and color.",
  "Занял особое место в искусстве Урала благодаря универсализму, парадоксальному мышлению и редкой работоспособности. Умел виртуозно работать в разных жанрах и всегда отстаивал свободу творчества и независимость взгляда. В «Артели» Метелев — про смелость, масштаб и внутреннюю свободу.": "He occupies a special place in Ural art thanks to his versatility, paradoxical thinking, and rare work capacity. He virtuously worked in different genres and always defended freedom of creativity and independence of vision. At Artel, Metelev stands for boldness, scale, and inner freedom.",
  "Художник, чьё творчество неразрывно связано с Уралом: тема родного края — источник силы и главная линия в работах. Его произведения стали частью «золотого фонда» уральского искусства. Для нашей галереи Мосин — это мощная региональная идентичность и серьёзная художественная школа.": "An artist whose work is inseparably connected with the Urals: the theme of his native land is a source of strength and the main line in his works. His works have become part of the golden fund of Ural art. For our gallery, Mosin means strong regional identity and a serious artistic school.",
  "Художник и писатель, тонко чувствующий городскую среду. Его живопись — про Екатеринбург и его атмосферу: архитектуру, улицы, свет и воздух. Мы выбираем Рыжкова за честный городской взгляд и умение передавать настроение места.": "An artist and writer with a subtle feeling for the urban environment. His painting is about Yekaterinburg and its atmosphere: architecture, streets, light, and air. We choose Ryzhkov for his honest urban view and his ability to convey the mood of a place.",
  "Живописец с энергичной фактурой и насыщенной палитрой. В работах — крупные цветовые отношения, динамика мазка и ощущение движения внутри композиции. В «Артели» Елецкий — выбор для тех, кто любит смелую, «живую» живопись.": "A painter with energetic texture and a rich palette. His works feature large color relationships, dynamic brushwork, and a sense of movement inside the composition. At Artel, Eletsky is the choice for those who love bold, lively painting.",
  "Автор городских сюжетов и пейзажей, который умеет делать пространство светлым и «дышащим». Его работы легко читаются в интерьере: в них много воздуха, состояния и наблюдательности. Мы ценим Ефремова за спокойную уверенность и тонкое чувство среды.": "An author of urban scenes and landscapes who knows how to make space light and breathing. His works fit easily into interiors: they contain much air, atmosphere, and observation. We value Efremov for his calm confidence and subtle sense of environment.",
  "Самобытный уральский автор с яркой «наивной» эстетикой и ироничным взглядом на жизнь. Его работы мгновенно узнаются по живому визуальному языку и честной прямоте. В «Артели» Букашкин — про характер, свободу и удовольствие от искусства.": "An original Ural author with a bright naive aesthetic and an ironic view of life. His works are instantly recognizable by their lively visual language and honest directness. At Artel, Bukashkin stands for character, freedom, and pleasure from art.",
  "Художник, работающий с атмосферой и внутренним напряжением образа. В его живописи часто ощущается драматургия — через свет, цвет и состояние пространства. Для нашей подборки Сажаев — это выразительные работы «с настроением», которые долго держат взгляд.": "An artist working with atmosphere and the inner tension of the image. In his painting, one often senses dramaturgy through light, color, and the condition of space. In our selection, Sazhaev means expressive works with mood that hold the viewer’s gaze for a long time.",
  "Современный автор, чьи работы представлены в частных и музейных коллекциях в разных странах. Активно участвует в выставочных проектах и развивает собственную художественную линию. В «Артели» Бородин — это актуальная живопись с сильной энергией и современным звучанием.": "A contemporary author whose works are represented in private and museum collections in different countries. He actively participates in exhibition projects and develops his own artistic line. At Artel, Borodin means contemporary painting with strong energy and modern resonance.",
  "Живёт и работает в Екатеринбурге, постоянно участвует в художественной жизни города. Работает в разных направлениях — живопись, графика, скульптура, настенная роспись; произведения находятся в музеях России и за рубежом. В «Артели» Корьякин — это многожанровый мастер с сильной профессиональной базой.": "He lives and works in Yekaterinburg and constantly participates in the artistic life of the city. He works in different directions — painting, graphics, sculpture, wall painting; his works are found in museums in Russia and abroad. At Artel, Koryakin is a multi-genre master with a strong professional foundation.",
  "Кубистический карнавал": "Cubist Carnival",
  "Сон города и зверей": "Dream of the City and Beasts",
  "На перевале": "At the Pass",
  "Сказка о косе": "Tale of the Spit",
  "Салют над городом": "Salute Over the City",
  "Букет на светлой стене": "Bouquet on a Light Wall",
  "Весенний сквер": "Spring Square",
  "Я за мир": "I Am for Peace",
  "Зимний двор": "Winter Yard",
  "Красная абстракция": "Red Abstraction",
  "Старый завод": "Old Factory",
  "Экспрессивная композиция в духе кубизма с динамичной геометрией форм и контрастной цветовой палитрой.": "An expressive cubist-inspired composition with dynamic geometry of forms and a contrasting color palette.",
  "Фантазийный сюжет с множеством персонажей и архитектурных мотивов. Многослойная живопись с глубокой цветовой гаммой.": "A fantasy scene with many characters and architectural motifs. Layered painting with a deep color range.",
  "Пейзаж с фигурой человека на фоне уральских гор. Живописный этюд с атмосферной передачей пространства.": "A landscape with a human figure against the background of the Ural mountains. A painterly study with atmospheric spatial rendering.",
  "Лирическая сцена с элементами сказочного повествования. Мягкая цветовая палитра и декоративная стилизация.": "A lyrical scene with elements of fairy-tale narration. A soft color palette and decorative stylization.",
  "Городской пейзаж с праздничным фейерверком. Контрастное вечернее небо и архитектурные акценты.": "An urban landscape with festive fireworks. Contrasting evening sky and architectural accents.",
  "Яркий цветочный натюрморт с пастозной фактурой мазка. Эмоциональная и насыщенная композиция.": "A bright floral still life with thick impasto brush texture. An emotional and rich composition.",
  "Городской пейзаж с храмом и цветниками. Лёгкая импрессионистическая манера письма.": "An urban landscape with a church and flowerbeds. A light impressionistic manner of painting.",
  "Декоративная работа с символическими образами и выразительной «наивной» стилистикой.": "A decorative work with symbolic images and expressive naive stylistics.",
  "Зимний пейзаж с фигурой человека. Сдержанная цветовая гамма и атмосферное освещение.": "A winter landscape with a human figure. Restrained color palette and atmospheric lighting.",
  "Динамичная абстрактная композиция с преобладанием красных и зелёных оттенков.": "A dynamic abstract composition dominated by red and green shades.",
  "Городской индустриальный пейзаж. Свободная живописная манера и выразительный колорит.": "An urban industrial landscape. A free painterly manner and expressive coloring."
};
  const EN_TO_RU = Object.fromEntries(Object.entries(RU_TO_EN).map(([ru,en]) => [en,ru]));
  const PLACEHOLDERS = {
  "Название, художник, техника…": "Title, artist, technique…",
  "Иван": "Ivan",
  "Город, улица, дом, квартира": "City, street, building, apartment",
  "Подъезд, домофон, удобное время...": "Entrance, intercom, convenient time..."
};
  const EN_TO_RU_PH = Object.fromEntries(Object.entries(PLACEHOLDERS).map(([ru,en]) => [en,ru]));

  function getLang(){
    return localStorage.getItem(LANG_KEY) || "ru";
  }
  function setLang(lang){
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === "en" ? "en" : "ru";
  }
  function mapText(text, lang){
    if (lang === "en") return RU_TO_EN[text] || text;
    return EN_TO_RU[text] || text;
  }
  function mapPlaceholder(text, lang){
    if (lang === "en") return PLACEHOLDERS[text] || text;
    return EN_TO_RU_PH[text] || text;
  }
  function replaceTextNode(node, lang){
    const source = node.nodeValue;
    if (!source || !source.trim()) return;
    const trimmed = source.trim();
    const translated = mapText(trimmed, lang);
    if (translated !== trimmed) {
      node.nodeValue = source.replace(trimmed, translated);
    }
  }
  function walk(node, lang){
    if (!node) return;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
      acceptNode(textNode){
        const parent = textNode.parentNode;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.nodeName;
        if (["SCRIPT","STYLE","NOSCRIPT","IFRAME"].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (!textNode.nodeValue || !textNode.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let cur;
    while((cur = walker.nextNode())) replaceTextNode(cur, lang);
  }
  function translateAttributes(root, lang){
    root.querySelectorAll('[placeholder]').forEach(el => {
      const val = el.getAttribute('placeholder');
      if (!val) return;
      el.setAttribute('placeholder', mapPlaceholder(val, lang));
    });
    root.querySelectorAll('[title]').forEach(el => {
      const val = el.getAttribute('title');
      if (!val) return;
      el.setAttribute('title', mapText(val, lang));
    });
    root.querySelectorAll('[aria-label]').forEach(el => {
      const val = el.getAttribute('aria-label');
      if (!val) return;
      el.setAttribute('aria-label', mapText(val, lang));
    });
  }
  function translateDocument(lang){
    setLang(lang);
    document.title = mapText(document.title, lang);
    walk(document.body, lang);
    translateAttributes(document, lang);
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.checked = lang === 'en';
    const ru = document.querySelector('.lang-switch__label--ru');
    const en = document.querySelector('.lang-switch__label--en');
    if (ru) ru.classList.toggle('is-active', lang === 'ru');
    if (en) en.classList.toggle('is-active', lang === 'en');
  }
  function injectSwitcher(){
    const nav = document.querySelector('.nav');
    if (!nav || document.getElementById('langSwitch')) return;
    const wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.id = 'langSwitch';
    wrap.innerHTML = `
      <span class="lang-switch__label lang-switch__label--ru">RU</span>
      <label class="lang-switch__track" aria-label="Language switch" title="Language switch">
        <input id="langToggle" type="checkbox">
        <span class="lang-switch__slider"></span>
      </label>
      <span class="lang-switch__label lang-switch__label--en">EN</span>
    `;
    nav.appendChild(wrap);
    wrap.querySelector('#langToggle').addEventListener('change', (e) => {
      translateDocument(e.target.checked ? 'en' : 'ru');
    });
  }
  function installObserver(){
    const observer = new MutationObserver((mutations) => {
      const lang = getLang();
      if (lang === 'ru') return;
      for (const m of mutations) {
        if (m.type === 'characterData' && m.target) {
          replaceTextNode(m.target, lang);
        }
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            walk(node, lang);
            translateAttributes(node, lang);
          } else if (node.nodeType === 3) {
            replaceTextNode(node, lang);
          }
        });
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }
  window.getSiteLanguage = getLang;
  window.setSiteLanguage = function(lang){ translateDocument(lang); };
  window.__t = function(text){ return mapText(text, getLang()); };
  document.addEventListener('DOMContentLoaded', () => {
    injectSwitcher();
    translateDocument(getLang());
    installObserver();
  });
})();
