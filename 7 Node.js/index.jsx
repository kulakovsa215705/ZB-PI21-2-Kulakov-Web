class Hello extends React.Component {
    render() {
        return <ul>
            <li>Добыть питьевую воду</li>
            <li>Проверить ловушки на крыс</li>
            <li>Собрать дрова для костра</li>
            <li>Попытаться поймать радиосигнал</li>
            <li>Подготовить оружие к походу</li>
            <li>Перебрать запасы еды</li>
            <li>Попытаться починить запасной генератор</li>
        </ul>;
    }
}
ReactDOM.render(
    <Hello></Hello>,
    document.getElementById("app")
)