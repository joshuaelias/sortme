import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

const bubbleSort = (arr: number[]) => {
  let i, j
  const len = arr.length

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        return { arr, modified: true }
      }
    }
  }
  return { arr, modified: false }
}

const mergeSort = (arr: number[]) => {
  const middleIndex = arr.length / 2

  const rightSideArr = arr.slice(middleIndex)
  const leftSideArr = arr.slice(0, middleIndex)

  return arr
}

const Home: NextPage = () => {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    setBars(Array.from({ length: 90 }, () => Math.floor(Math.random() * 100)))
  }, [])

  const handleBubbleSort = () => {
    if (bubbleSort(bars).modified) {
      setTimeout(() => {
        const currentBars = [...bars]
        setBars(bubbleSort(currentBars).arr)
        handleBubbleSort()
      }, 5)
    }
  }

  const handleMergeSort = () => {
    mergeSort(bars)
  }

  return (
    <>
      <div className="flex flex-row justify-center gap-1">
        {bars?.map((value, index) => {
          return (
            <div
              key={`${index.toString()}`}
              className="bg-blue-200"
              style={{ width: '6px', height: `${value}px` }}
            >
              {}
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={() => handleBubbleSort()}>bubble sort</button>
        <button onClick={() => handleMergeSort()}>merge sort</button>
      </div>
    </>
  )
}

export default Home
