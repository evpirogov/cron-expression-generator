import "./App.scss"
import store from "./store"
import { Provider } from "react-redux"
import { CheckExpression } from "./components/CheckExpression"
import { GenerateExpression } from "./components/GenerateExpression"

function App() {
  return (
    <Provider store={store}>
      <h1 style={{ fontSize: 32 }}>Генератор cron выражений</h1>
      <p>
        <span style={{ color: "red" }}>Важно: </span>Текущая версия не
        поддерживает секунды и года, а так же синтаксис обозначения
        "последнего/первого дня".
      </p>
      <GenerateExpression />
      <CheckExpression />
    </Provider>
  )
}

export default App
