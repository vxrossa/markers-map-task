export const en = {
  name: 'Test task',
  taskButton: 'Task',
  mapButton: 'Map',
  taskHeading: 'Test task',
  taskDescription:
    'Using Vuejs, Vuex, Vue Router, Vuetify, create an application. A headershould have a menu with 2 links: "Task" and "Map". In the main part of the application there should be a description for the contents.',
  aboutTask: 'About the "Task" page',
  aboutTaskContent: 'There should be a test task as a Vue page',
  aboutMap: 'About the "Map" page',
  aboutMapContent: 'On the screen there should be a map and a list (see):',
  map1: 'When you click the Add button, the map should add a new marker, and a new marker should appear right where you clicked. The marker should also contain an address',
  map2a: 'To geocode an address, you can you a free API e.g. https://geocode.maps.co/',
  map2b: 'If the address was not found, show an error but do not add a new marker',
  map3: 'When you click on a marker, a corresponding record should be highlighted',
  map4: 'When you click on a record, the map should center on a marker',
  map5: 'Markers should be stored in local storage and should not disappear after a page is refreshed',
  map6: 'Selected marker ID should be stored in a URL',
  lsDescription:
    'Storage should be implemented as a service that emulates a backend. Create a "Backend" class that saves data to localStorage pseudo-asynchronously',
  additionally: 'In addition:',
  addition1: 'Create a responsive page that is valid on mobile',
  addition2: 'Add i18n',
  addition3: 'Using Jest, create at least 1 module test for any component',
  noted: 'Remember:',
  notedContent:
    'This test task must show that you are able to write modular code and can use the technologies mentioned above. Make yourself proud of this code!',
  selectMode: 'The map is in select mode',
  noData: 'No data. Click the button in the bottom right corner to add an address!',
} as const

export const ru = {
  name: 'Тестовое',
  taskButton: 'Задание',
  mapButton: 'Карта',
  taskHeading: 'Тестовое задание',
  taskDescription:
    'Необходимо с помощью Vuejs, Vuex, VueRouter, Vuetify написать приложение. Хэдер приложения должен содержать меню из 2-х пунктов: О задании и Карта. В основной части приложения должно отображаться содержимое разделов.',
  aboutTask: 'Раздел "О задании"',
  aboutTaskContent: 'В разделе должен быть текст этого задания, сверстанный аналогично.',
  aboutMap: 'Раздел "Карта"',
  aboutMapContent: 'На экране должны быть карта и список (см. пример):',
  map1: 'При клике на кнопку добавления, карта должна перейти в режим добавления маркера: в месте клика должен появится маркер, а в списке - запись с адресом точки.',
  map2a:
    'Для поиска адреса можно использовать любое бесплатное API для геокодирования, например: https://geocode.maps.co/.',
  map2b: ' случае, если адрес не найден, необходимо вывести ошибку и не добавлять маркер в список.',
  map3: 'При клике на маркер должна подсвечиваться запись в списке.',
  map4: 'При клике на запись в списке карта должна центрироваться на маркере.',
  map5: 'Маркеры должны храниться локально и не пропадать после перезагрузки страницы.',
  map6: 'В адресной строке должен отображаться id выбранного маркера.',
  lsDescription:
    'Локальное хранение данных должно быть организовано в виде сервиса, эмулирующего бекенд. (Необходим класс Backend, который псевдо-асинхронно сохраняет данные в localStorage)',
  additionally: 'Дополнительно:',
  addition1: 'Продумать отображение на мобильных устройствах.',
  addition2: 'Предусмотреть локализацию.',
  addition3: 'Необходимо с помощью jest написть 1 модульный тест на любой компонент.',
  noted: 'Напоминание:',
  notedContent:
    'Тестовое задание призвано показать умение писать хороший модульный код, а также умение пользоваться указанными технологиями и не только. Этим кодом нужно гордиться.',
  selectMode: 'Карта в режиме выбора маркера',
  noData: 'Данных нет. Нажмите на кнопку в нижнем правом углу, чтобы добавить адрес!',
} as const

export type DictionaryDefinition = keyof typeof en | keyof typeof ru

export const dictionaries = {
  en,
  ru,
}
