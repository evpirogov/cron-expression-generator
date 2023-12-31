# Cron-expression-generator

Приложение, которое помогает сгенерировать cron выражение, либо проверить введенное выражение на корректность.

<img width="482" alt="image" src="https://github.com/evpirogov/cron-expression-generator/assets/54399936/7f5b796c-034b-41ea-ac83-6aa7b382a78e">

### Нюансы реализации
- При реализации одной из целей было - успеть сделать проект за один день.
- Для разработки интерфейса выбрана сторонняя UI-библиотека [Ant Design](https://ant.design/). Это позволило сократить время на верстке компонентов.
- Большое количество времени ушло на понимание работы cron и его возможностей. К сожалению, не смог найти какого-то источника, который бы полноценно описал все возможности cron. Поэтому пришлось где-то ограничиваться по функционалу, а где-то использовать костыльные методы реализации (валидация cron выражения с помощью нескольких дублирующих RegExp)
- Рреализация сделана "в лоб". Что в том числе проявляется в многочисленном дублировании кода при взаимодействии со стейтом. Кажется, это можно и нужно упростить. Но решил в моменте не тратить на это большое количество сил и взять в условный "техдолг"/"на рефакторинг".
- Текущая версия не поддерживает секунды и года, а так же синтаксис обозначения "последнего/первого дня". Таким образом время разработки проекта оказалось минимальным и условный "пользователь" уже может решать базовые задачи, а последующие доработки могут быть добавленны итерационно.
