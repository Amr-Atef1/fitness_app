import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const videokey = import.meta.env.VITE_VEDIO_API_KEY



const baseUrl = "https://exercisedb.p.rapidapi.com"
const options={
  params:{limit:"100"},
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}
const videoBaseUrl = "https://youtube-search-and-download.p.rapidapi.com"

export const youtubeOptions = {
  headers: {
    'X-RapidAPI-Key': videokey,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url:string) =>{
  const {data} = await axios(`${baseUrl}/${url}`,options)
  return data
}

export const fetchVideos = async (url:string)=>{
  const {data} = await axios(`${videoBaseUrl}/${url}`,youtubeOptions)
  return data
}