import React, {useEffect, useState} from "react"
import {observer} from "mobx-react-lite"
import {List, useService} from "../../../../shared"
import {WordCloudServiceRef} from "../../../../app"
import {WordCloudService} from "../../api"
import {taskStore, WordStats, WorkerMessage} from "../../model"
import {toJS} from "mobx"


export const TaskWordCloud = observer(() => {
        const [wordCloudData, setWordCloudData] = useState<Array<WordStats>>([])

        const wordCloudService = useService<WordCloudService>(WordCloudServiceRef)

        useEffect(() => {
            generateStats()
        }, [taskStore.tasks])

        function generateStats() {
            wordCloudService.generateWordCloud(
                taskStore?.tasks?.map((task): WorkerMessage => ({
                    description: task.metadata.description,
                    title: task.title
                })),
                (data) => {
                    setWordCloudData(data)
                },
            )
        }

        return (
            <div className="word-cloud">
                <table className={"table table-hover"}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Word</th>
                        <th scope="col">Times Occurred</th>
                        <th scope="col">Percentage</th>
                    </tr>
                    </thead>

                    <tbody>
                    <List
                        items={wordCloudData}
                        renderItem={(item, index) => {
                            return (
                                <tr className={getTableRowStyle(index)}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.word}</td>
                                    <td>{item.occurred}</td>
                                    <td>{item.percentage} %</td>
                                </tr>
                            )
                        }}
                    />
                    </tbody>
                </table>
            </div>
        )
    },
)

function getTableRowStyle(index: number) {
    if (index === 0) {
        return "table-success"
    }
    if (index === 1) {
        return "table-warning"
    }
    if (index === 2) {
        return "table-secondary"
    }

    return ""
}
