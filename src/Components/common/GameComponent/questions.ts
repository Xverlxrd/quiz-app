export interface Question {
    title: string;
    variants: string[];
    correct: number;
}
export const questions: Question[]  = [
    {
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "язык программирования"],
        correct: 0
    },
    {
        title: "Что такое JSX?",
        variants: ["JavaScript XML", "Java Syntax Extension", "JavaScript eXtension"],
        correct: 0
    },
    {
        title: "Как создать компонент в React?",
        variants: ["createComponent()", "createElement()", "makeComponent()"],
        correct: 1
    },
    {
        title: "Что такое state в React?",
        variants: ["Внешнее состояние компонента", "Глобальное состояние приложения", "Локальное состояние компонента"],
        correct: 2
    },
    {
        title: "Какой метод жизненного цикла React-компонента вызывается при монтировании компонента?",
        variants: ["componentDidMount()", "componentWillMount()", "rendered()"],
        correct: 0
    },
    {
        title: "Что такое props в React?",
        variants: ["Внутренние свойства компонента", "Атрибуты компонента", "Методы компонента"],
        correct: 1
    },
    {
        title: "Каким образом можно обновить состояние компонента в React?",
        variants: ["setState()", "updateState()", "changeState()"],
        correct: 0
    },
    {
        title: "Что такое React Router?",
        variants: ["Библиотека для управления маршрутизацией в React", "Фреймворк для разработки мобильных приложений", "Инструмент для статической типизации кода"],
        correct: 0
    },
    {
        title: "Что такое React Hooks?",
        variants: ["Способ расширения возможностей React", "Устаревшая функциональность React", "Стандартные компоненты React"],
        correct: 0
    },
    {
        title: "Какой метод жизненного цикла React-компонента вызывается перед удалением компонента?",
        variants: ["componentWillUnmount()", "componentDidUnmount()", "removeComponent()"],
        correct: 0
    }
]