import {WordStats, WorkerMessage} from "../../model"
import {compareWordsByOccurrence} from "../../lib"
import {v4} from "uuid"

self.onmessage = function (event: MessageEvent) {
    const tasks = event.data as Array<WorkerMessage>
    const wordCounts: { [key in string]: number } = {}

    tasks.forEach((task) => {
        const words = [task.description, task.title].join(" ").split(" ")
        words.forEach((word) => {
            if (word in wordCounts) {
                wordCounts[word] = wordCounts[word] + 1

            } else {
                wordCounts[word] = 1
            }
        })
    })


    const allCount = Object.values(wordCounts).reduce((sum, item) => sum + item, 0)
    const wordWithStats: Array<WordStats> = Object.keys(wordCounts).map((word) => {
        return {
            id: v4(),
            word,
            occurred: wordCounts[word],
            percentage: Math.floor((wordCounts[word] / allCount) * 100),
            size: Math.round((wordCounts[word] / allCount) * 50) + 10, // Sizes between 10 and 60
        }
    })

    wordWithStats.sort(compareWordsByOccurrence)

    self.postMessage(wordWithStats)
}
