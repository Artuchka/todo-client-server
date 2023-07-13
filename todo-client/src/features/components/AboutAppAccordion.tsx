import React from "react"
import {
  Accordion,
  AccordionItem,
} from "../../shared"
import { v4 } from "uuid"

const accordionItems: Array<AccordionItem> = [
  {
    id: v4(),
    header: "Зачем это приложение?",
    body: <article>
      <div>Это приложение <del>для выполнения грейда Principal COBOL TechLead Software Engineer L10</del> для практики
        моих знаний в одном месте
      </div>
    </article>,
  },
  {
    id: v4(), header: "Какие темы здесь представлены??",
    body: <article>
      <div>
        В первую очередь представлена:
        <ul>
          <li>Многослойсная луковая архитектура</li>
          <li>в формате Feature Sliced Design</li>
          <li>соответсвующий для них code style.</li>
        </ul>
      </div>

      <div>
        Я придерживался принципов SOLID:
        <ul className={"list-group list-group-numbered"}>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">S. Single Responsobility Principle</div>
              <ul>
                <li>
                  <strong>дробил компоненты</strong> на составные
                </li>
                <li>
                  <strong>сервисы</strong> отвечают только за <strong>1 зону ответстсвенности</strong>
                </li>
                <li>
                  <strong>нельзя осмысленно извлечь</strong> компоненты в другие
                </li>
                <li>
                  <strong>один</strong> сервис\функция\компонент = <strong>одно</strong> действие
                </li>
              </ul>
            </div>
            <span className="badge bg-primary rounded-pill">3 services</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">O. Opened/Closed Principle</div>
              <ul>
                <li>
                  классы из bootstrap
                </li>
                <li>
                  ButtonIcon extends Button
                </li>
                <li>
                  <strong>renderProps</strong> подход в {`<List />`}
                </li>
                <li>
                  <strong>передача JSX</strong> разметки в пропсы {`<AccordionItem />`}
                </li>
                <li>
                  <strong>compound component</strong> в bootstrap
                </li>
              </ul>
            </div>
            <span className="badge bg-primary rounded-pill">3 services</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">L. Liskov Substitution Principle</div>
              <ul>
                <li>
                  {`<Button/>`} extends basic {`<button/>`}
                </li>
                <li>
                  using ComponentProps, ComponentPropsWithoutRef, {`InputHTMLAttributes<HTLMInputElement>`}
                </li>
              </ul>
            </div>
            <span className="badge bg-primary rounded-pill">3 services</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">I. Interface Segregation Principle</div>
              <ul>
                <li>
                  {`<TaskListItem/>`} accepts props task of TaskItem interface = bad = must have description inside
                  metadata only
                </li>
                <li>
                  {`<List/>`} accepts prop 'items' of <em>{"<T extends HasId>"}</em> interface = good = <strong>does not
                  depend </strong>
                  on items; must have only id;
                </li>
              </ul>
            </div>
            <span className="badge bg-primary rounded-pill">3 services</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">D. Dependency Inversion Principle</div>
              <ul>
                <li>
                  создал свой <strong>Service Locator</strong>
                </li>
                <li>
                  logger в ErrorBoundary, HTTPService, ServiceLocator
                </li>
                <li>
                  HTTPService как APIService в TaskAPIService
                </li>
                <li>
                  TaskAPIService в TaskServiceImpl
                </li>
                <li>
                  <span>
                    <em>onChange</em> в {"<Input/>"} = мы не знаем когда наша функция onChange будет вызыватсья на самом деле
                  </span>
                  <br/>
                  <span>
                    например, с хуком useThrottle или с хуком useDebounce или без задержок и ожиданий на каждый символ??
                  </span>
                  <br/>
                  <span>
                    в {"<Input/>"} нет зависимости на конкретную реализацию <em>onChange</em> функции
                  </span>
                </li>
                <li>
                  абстракции TaskAPIService, TaskService, RequestService не зависимы от конкретных уровней
                  <br/>
                  реализации зависят от абстракций
                </li>
              </ul>
            </div>
            <span className="badge bg-primary rounded-pill">3 services</span>
          </li>
        </ul>

      </div>

      <div>
        Старался использовать OOП принципы.
        <ul className={"list-group"}>

          <li className={"list-group-item"}>
            <h5>Абстракцию</h5>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>1</li>
              <li className={"list-group-item"}>2</li>
              <li className={"list-group-item"}>3</li>
            </ul>
          </li>
          <li className={"list-group-item"}>
            <h5>Инкапсуляцию, композицию, аггрегацию</h5>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>public api</li>
              <li className={"list-group-item"}>private field in classes</li>
              <li className={"list-group-item"}>private methods in classes</li>
              <li className={"list-group-item"}><strong>composition</strong> inside wordCloudService</li>
              <li className={"list-group-item"}><strong>delegation</strong> inside log of ServiceLocator</li>
              <li className={"list-group-item"}><strong>aggregation</strong> inside TaskAPIService as APIService</li>
            </ul>
          </li>
          <li className={"list-group-item"}>
            <h5>Наследование</h5>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>пропсы для моей ButtonProps extends
                ComponentPropsWithoutRef{"<\"button\">"} </li>
              <li className={"list-group-item"}></li>
              <li className={"list-group-item"}>3</li>
            </ul>
          </li>
          <li className={"list-group-item"}>
            <h5>Полиморфизм</h5>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>разные имплементации RequestService (http, graphql, html, soap)</li>
              <li className={"list-group-item"}>разные имплементации Logger (ConsoleLogger, LocalStorageLogger)</li>
              <li className={"list-group-item"}>3</li>
            </ul>
          </li>
        </ul>
      </div>

      <sup>
        <em>
          <small>
            Приниципы KISS, YAGNI я считаю грубо НАРУШЕНЫ, но сделано так специально.
          </small>
        </em>
      </sup>
    </article>,
  },
]

export const AboutAppAccordion = () => {

  return (<Accordion items={accordionItems}/>)
}
