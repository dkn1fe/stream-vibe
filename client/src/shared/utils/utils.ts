import { Film } from "../types/staffTypes";
import { monthsRu } from "./months";

export const getRandomNumber = () => {
      let firstId = Math.floor(Math.random() * 100 + 300);
      let secondId = Math.floor(Math.random() * 100 + 300);
      let thirdId = Math.floor(Math.random() * 100 + 300);
      let fourthId = Math.floor(Math.random() * 100 + 300);
      const randomNumberArray = [firstId, secondId, thirdId, fourthId];
      return randomNumberArray
}


export const getZero = (num: number) => {
      return num < 10 ? `0${num}` : num;
}


export const getData = (data: string) => {
      const month = parseInt(data?.slice(5, 7), 10);
      const year = data?.slice(0, 4);
      const day = data?.slice(8, 10);
      return `${day} ${monthsRu[month]}, ${year}`;
}

export const getMoviesName = (films: Film[]) => {
      let moviesIdList: number[] = [];
      films?.map(item => moviesIdList.push(item.filmId))
      return moviesIdList.slice(0,10)
}


export const getRating = (rating:string) => {
      if (rating === undefined || rating === null) {
        return '-';
      }
      
      let number = Number(rating);
    
      if (!isNaN(number) && number !== 0) {
        return rating;
      }
    
      return rating + ',0';
    }