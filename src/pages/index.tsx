import React, { useEffect, useState } from 'react'
import List from '@/components/list'
import { getAllItems } from '../services/index'
import Search from '@/components/search'
import { Items } from '@/types'

const DEFAULT_QUANTITY = 20
const MAX_QUANTITY = 60

interface Filters {
  type: string
  height: number
}

export default function Home() {
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY)
  const [data, setData] = useState<Items[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [filters, setFilters] = useState<Filters>({ type: 'all', height: 100 })
  const [error, setError] = useState<string>('')

  const [initialData, setInitialData] = useState<Items[]>([])

  const getData = () => {
    setIsLoading(true)
    setError('')
    getAllItems({ perPage: quantity })
      .then((response) => {
        setInitialData(response)
        setData(response)
        setIsLoading(false)
      })
      .catch((error) => {
        setError('An error occurred while trying to load the data.')
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [quantity])

  useEffect(() => {
    let filteredData = initialData

    if (searchText !== '') {
      filteredData = filteredData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
    }

    if (filters.type !== 'all') {
      filteredData = filteredData.filter(item => item.type === filters.type)
    }

    if (filters.height !== 0) {
      filteredData = filteredData.filter(item => item.height <= filters.height)
    }

    setData(filteredData)
  }, [initialData, searchText, filters])


  const handleShowMore = () => {
    setQuantity(prevQuantity => prevQuantity + DEFAULT_QUANTITY)
    setIsLoading(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
  }

  const handleApplyFilters = (type: string, height: number) => {
    setFilters({ type, height })
  }

  const showMoreButtonCondition = (quantity <= MAX_QUANTITY && searchText === '') || isLoading

  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      <Search handleInputChange={handleInputChange} handleApplyFilters={handleApplyFilters} />
      {!error ?
        <>
          <List data={data} />
          {showMoreButtonCondition && (
            <button disabled={isLoading} className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-12 rounded mt-8 text-lg' onClick={handleShowMore}>
              {isLoading ? 'Loading...' : 'Show More'}
            </button>
          )}
        </>
        :
        <>
          <span className='text-2xl font-medium'>{error}</span>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-12 rounded mt-8 text-lg' onClick={getData}>Try again</button>
        </>

      }
    </div>
  )
}
