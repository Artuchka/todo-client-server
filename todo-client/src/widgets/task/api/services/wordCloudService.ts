import { WordStats, WorkerMessage } from "../../model"

export class WordCloudService {
  private worker: Worker

  constructor() {
    // composition
    this.worker = new Worker(new URL("./wordCloudWorker.ts", import.meta.url))
  }

  generateWordCloud(
    tasks: Array<WorkerMessage>,
    callback: (wordCloudData: Array<WordStats>) => void,
  ) {
    console.log("worker message senind request", tasks, this.worker)
    this.worker.onmessage = function (event) {
      console.log("worker message getting request", event)
      callback(event?.data)
    }
    this.worker.postMessage(tasks)
  }

  terminate() {
    this.worker.terminate()
  }
}

