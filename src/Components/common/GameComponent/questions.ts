export interface Question {
    title: string;
    variants: string[];
    correct: string;
}
export const questions: Question[]  = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'язык программирования'],
        correct: 'библиотека'
    },
    {
        title: 'Что такое JSX?',
        variants: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript eXtension'],
        correct: 'JavaScript XML'
    },
    {
        title: 'Как создать компонент в React?',
        variants: ['createComponent()', 'createElement()', 'makeComponent()'],
        correct: 'createElement()'
    },
    {
        title: 'Что такое state в React?',
        variants: ['Внешнее состояние компонента', 'Глобальное состояние приложения', 'Локальное состояние компонента'],
        correct: 'Локальное состояние компонента'
    },
    {
        title: 'Какой метод жизненного цикла React-компонента вызывается при монтировании компонента?',
        variants: ['componentDidMount()', 'componentWillMount()', 'rendered()'],
        correct: 'componentDidMount()'
    },
    {
        title: 'Что такое props в React?',
        variants: ['Внутренние свойства компонента', 'Атрибуты компонента', 'Методы компонента'],
        correct: 'Атрибуты компонента'
    },
    {
        title: 'Каким образом можно обновить состояние компонента в React?',
        variants: ['setState()', 'updateState()', 'changeState()'],
        correct: 'setState()'
    },
    {
        title: 'Что такое React Router?',
        variants: ['Библиотека для управления маршрутизацией в React', 'Фреймворк для разработки мобильных приложений', 'Инструмент для статической типизации кода'],
        correct: 'Библиотека для управления маршрутизацией в React'
    },
    {
        title: 'Что такое React Hooks?',
        variants: ['Способ расширения возможностей React', 'Устаревшая функциональность React', 'Стандартные компоненты React'],
        correct: 'Способ расширения возможностей React'
    },
    {
        title: 'Какой метод жизненного цикла React-компонента вызывается перед удалением компонента?',
        variants: ['componentWillUnmount()', 'componentDidUnmount()', 'removeComponent()'],
        correct: 'componentWillUnmount()'
    }
]